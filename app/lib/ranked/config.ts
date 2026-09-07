export const SITE_ORIGIN = (
  process.env.SITE_ORIGIN ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://genesisintegrativemed.com'
).replace(/\/$/, '')

export const DEFAULT_COVER = '/images/blog/default-cover.jpg'
export const DEFAULT_COVER_ALT = 'Genesis Integrative Medicine blog article cover'

export const DEFAULT_CTA = {
  label: 'Contact us',
  href: '/contact/',
}

/** Cover prompt for Genesis Integrative Medicine. No patient faces / medical gore. */
export function coverPrompt(title: string): string {
  return [
    'Editorial photograph, 16:9 landscape, premium integrative-medicine clinic photography.',
    'Calm Geneva Illinois wellness setting, chiropractic and regenerative-medicine atmosphere.',
    `Theme inspired by: ${title.slice(0, 120)}.`,
    'Cinematic lighting, sharp, no grain, no watermark.',
    'No people faces, no patient faces, no medical gore, no needles in skin, no wounds.',
    'No text, no letters, no logos, no captions, no readable signage.',
  ].join(' ')
}

/**
 * Slugs that already have a committed file at /images/blog/covers/{slug}.png
 * List only. Do not fs.stat public/ — that packs images into the cron bundle.
 */
export const COMMITTED_COVER_SLUGS: readonly string[] = []

/**
 * Hand-picked local covers for Ranked slugs. String map only — never fs.stat public/.
 */
export const COMMITTED_COVER_BY_SLUG: Readonly<Record<string, string>> = {
  'laser-lipo-effectiveness-for-stubborn-midlife-belly-fat':
    '/images/blog/sasun-bughdaryan-KswNFGi1s44-unsplash.jpg',
}
