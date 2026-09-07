import { BlobNotFoundError, head, put } from '@vercel/blob'
import { COMMITTED_COVER_BY_SLUG, COMMITTED_COVER_SLUGS, coverPrompt } from './config'

const FALLBACK_UNSPLASH = [
  'photo-1576091160399-112ba8d25d1d',
  'photo-1563986768609-322da13575f3',
  'photo-1559757148-5c350d0d3c56',
  'photo-1551836022-d5d88e9218df',
  'photo-1582750433449-648ed127bb54',
  'photo-1518770660439-4636190af475',
  'photo-1554224155-6726b3ff858f',
  'photo-1600880292203-757bb62b4baf',
  'photo-1606811841689-23dfddce3e95',
  'photo-1677442135703-1787eea5ce01',
  'photo-1551434678-e076c223a692',
  'photo-1552664730-d307ca884978',
  'photo-1600880292089-90a7e086ee0c',
  'photo-1554224154-26032ffc0d07',
  'photo-1497366216548-37526070297c',
  'photo-1450101499163-c8848c66ca85',
  'photo-1573496359142-b8d87734a5a2',
  'photo-1485827404703-89b55fcc595e',
  'photo-1542744173-8e7e53415bb0',
  'photo-1573497019940-1c28c88b4f3e',
  'photo-1522202176988-66273c2fd55f',
  'photo-1581595220892-b0739db3ba8c',
  'photo-1579684385127-1ef15d508118',
  'photo-1582719478250-c89cae4dc85b',
  'photo-1559757175-0eb30cd8c063',
  'photo-1584982751601-97dcc096659c',
] as const

function coverPngPath(contentId: string): string {
  return `blog-covers/${contentId}.png`
}

function coverJpgPath(contentId: string): string {
  return `blog-covers/${contentId}.jpg`
}

function committedCoverUrl(slug?: string): string | null {
  if (!slug) return null
  if (COMMITTED_COVER_BY_SLUG[slug]) return COMMITTED_COVER_BY_SLUG[slug]
  return COMMITTED_COVER_SLUGS.includes(slug) ? `/images/blog/covers/${slug}.png` : null
}

function hashSlug(slug: string): number {
  let hash = 0
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0
  return hash
}

function unsplashUrl(photoId: string): string {
  return `https://images.unsplash.com/${photoId}?w=1200&q=80&fit=crop`
}

function picsumUrl(slug: string): string {
  return `https://picsum.photos/seed/${encodeURIComponent(`genesis-${slug}`)}/1200/630`
}

export function uniqueWebCoverUrl(slug: string, reserved: Set<string> = new Set()): string {
  const start = hashSlug(slug) % FALLBACK_UNSPLASH.length
  for (let i = 0; i < FALLBACK_UNSPLASH.length; i++) {
    const url = unsplashUrl(FALLBACK_UNSPLASH[(start + i) % FALLBACK_UNSPLASH.length])
    if (!reserved.has(url)) return url
  }
  let seed = slug
  let n = 0
  let url = picsumUrl(seed)
  while (reserved.has(url) && n < 50) {
    n += 1
    seed = `${slug}-${n}`
    url = picsumUrl(seed)
  }
  return url
}

function imageModels(): string[] {
  const preferred = process.env.OPENAI_IMAGE_MODEL?.trim()
  const models = [preferred, 'gpt-image-2', 'gpt-image-1'].filter((m): m is string => Boolean(m))
  return [...new Set(models)]
}

async function existingBlobUrl(contentId: string): Promise<string | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.VERCEL) return null
  for (const pathname of [coverPngPath(contentId), coverJpgPath(contentId)]) {
    try {
      const meta = await head(pathname)
      if (meta.url) return meta.url
    } catch (err) {
      if (!(err instanceof BlobNotFoundError)) return null
    }
  }
  return null
}

async function persistBuffer(pathname: string, bytes: Buffer, contentType: string): Promise<string | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.VERCEL) return null
  const blob = await put(pathname, bytes, {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType,
  })
  return blob.url
}

async function generatePng(title: string): Promise<Buffer | null> {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) return null
  const prompt = coverPrompt(title)
  let lastError = ''
  for (const model of imageModels()) {
    const res = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ model, prompt, size: '1536x1024', quality: 'medium', n: 1 }),
    })
    const text = await res.text()
    if (!res.ok) {
      lastError = `${model} ${res.status}: ${text.slice(0, 240)}`
      continue
    }
    const json = JSON.parse(text) as { data?: Array<{ url?: string; b64_json?: string }> }
    const row = json.data?.[0]
    if (row?.b64_json) return Buffer.from(row.b64_json, 'base64')
    if (row?.url) {
      const img = await fetch(row.url)
      if (img.ok) return Buffer.from(await img.arrayBuffer())
    }
  }
  console.error(`[ranked] OpenAI cover generation exhausted: ${lastError}`)
  return null
}

export async function getRankedCoverImage(input: {
  contentId: string
  title: string
  generate: boolean
  slug?: string
  reservedUrls?: Set<string>
}): Promise<string> {
  const slug = input.slug ?? input.contentId
  const reserved = input.reservedUrls ?? new Set<string>()

  const committed = committedCoverUrl(input.slug)
  if (committed) {
    reserved.add(committed)
    return committed
  }

  const cached = await existingBlobUrl(input.contentId)
  if (cached) {
    reserved.add(cached)
    return cached
  }

  const webUrl = uniqueWebCoverUrl(slug, reserved)
  if (!input.generate) {
    reserved.add(webUrl)
    return webUrl
  }

  try {
    const png = await generatePng(input.title)
    if (png) {
      const url = await persistBuffer(coverPngPath(input.contentId), png, 'image/png')
      if (url) {
        reserved.add(url)
        return url
      }
    }

    const sourceUrl = uniqueWebCoverUrl(slug, reserved)
    const img = await fetch(sourceUrl)
    if (img.ok) {
      const bytes = Buffer.from(await img.arrayBuffer())
      const persisted = await persistBuffer(coverJpgPath(input.contentId), bytes, 'image/jpeg')
      const url = persisted || sourceUrl
      reserved.add(url)
      return url
    }
  } catch (err) {
    console.error(`[ranked] cover failed for ${input.contentId}`, err)
  }

  reserved.add(webUrl)
  return webUrl
}

export function ensureUniqueCoverImages<T extends { slug: string; coverImage: string }>(posts: T[]): T[] {
  const used = new Set<string>()
  return posts.map((post) => {
    let cover = post.coverImage
    if (!cover || used.has(cover)) cover = uniqueWebCoverUrl(post.slug, used)
    used.add(cover)
    return cover === post.coverImage ? post : { ...post, coverImage: cover }
  })
}
