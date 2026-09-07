import { SITE_ORIGIN } from './config'
import {
  RANKED_CACHE_TAG,
  type RankedContentDetail,
  type RankedContentListItem,
  type RankedDetailResponse,
  type RankedListResponse,
  type RankedProject,
  type RankedProjectsResponse,
} from './types'

const RANKED_BASE = 'https://app.ranked.ai/api/v1'

function rankedConfig() {
  return {
    apiKey: process.env.RANKED_API_KEY,
    projectId: process.env.RANKED_PROJECT_ID,
  }
}

export function isRankedConfigured(): boolean {
  const { apiKey, projectId } = rankedConfig()
  return Boolean(apiKey && projectId)
}

export function hasRankedApiKey(): boolean {
  return Boolean(rankedConfig().apiKey)
}

/**
 * This site publishes exactly one Ranked project (RANKED_PROJECT_ID).
 * Any other project id is refused so another client's calendar cannot land here.
 */
function thisProjectId(projectId?: string): string | undefined {
  const configured = rankedConfig().projectId
  if (!configured) return undefined
  if (projectId && projectId !== configured) {
    console.error(
      `[ranked] blocked project ${projectId}: this site only publishes RANKED_PROJECT_ID`,
    )
    return undefined
  }
  return configured
}

async function rankedGet<T>(path: string): Promise<T> {
  const { apiKey } = rankedConfig()
  if (!apiKey) throw new Error('RANKED_API_KEY is not set')

  const res = await fetch(`${RANKED_BASE}${path}`, {
    headers: { Authorization: `Bearer ${apiKey}` },
    next: { revalidate: 300, tags: [RANKED_CACHE_TAG] },
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Ranked API ${res.status} ${path}: ${text.slice(0, 200)}`)
  }

  return res.json() as Promise<T>
}

export async function listRankedProjects(): Promise<RankedProject[]> {
  if (!hasRankedApiKey()) return []

  const items: RankedProject[] = []
  for (let offset = 0; offset < 500; offset += 50) {
    const json = await rankedGet<RankedProjectsResponse>(`/projects?limit=50&offset=${offset}`)
    const page = Array.isArray(json.data) ? json.data : []
    items.push(...page)
    if (page.length < 50) break
  }
  return items
}

function projectWebsite(project: RankedProject): string | null {
  return project.websiteUrl || project.website_url || null
}

function websiteMatchesThisSite(website: string | null): boolean {
  if (!website) return false
  try {
    const host = new URL(website).host.replace(/^www\./, '').toLowerCase()
    const expected = new URL(SITE_ORIGIN).host.replace(/^www\./, '').toLowerCase()
    return host === expected
  } catch {
    return /genesisintegrativemed\.com/i.test(website)
  }
}

/** Refuse to publish if RANKED_PROJECT_ID is another client's calendar. */
let verifiedThisSite: boolean | null = null

export async function isConfiguredProjectForThisSite(): Promise<boolean> {
  if (verifiedThisSite !== null) return verifiedThisSite
  const id = rankedConfig().projectId
  if (!id) {
    verifiedThisSite = false
    return false
  }
  try {
    const projects = await listRankedProjects()
    const mine = projects.find((p) => p.id === id)
    if (!mine) {
      console.error('[ranked] RANKED_PROJECT_ID was not found for this API key')
      verifiedThisSite = false
      return false
    }
    const website = projectWebsite(mine)
    const nameOk = /genesis integrative medicine/i.test(mine.name || '')
    if (!websiteMatchesThisSite(website) && !nameOk) {
      console.error(
        `[ranked] blocked project "${mine.name}" (${website || 'no website'}): not ${SITE_ORIGIN}`,
      )
      verifiedThisSite = false
      return false
    }
    if (website && !websiteMatchesThisSite(website)) {
      console.error(
        `[ranked] blocked project "${mine.name}" (${website}): not ${SITE_ORIGIN}`,
      )
      verifiedThisSite = false
      return false
    }
    verifiedThisSite = true
    return true
  } catch (err) {
    console.error('[ranked] could not verify project belongs to this site', err)
    verifiedThisSite = false
    return false
  }
}

export async function listRankedContent(projectId?: string, limit = 50): Promise<RankedContentListItem[]> {
  const id = thisProjectId(projectId)
  if (!id) return []
  if (!(await isConfiguredProjectForThisSite())) return []

  const items: RankedContentListItem[] = []
  const pageSize = Math.min(limit, 50)
  for (let offset = 0; offset < 1000; offset += pageSize) {
    const json = await rankedGet<RankedListResponse>(
      `/projects/${id}/content?limit=${pageSize}&offset=${offset}`,
    )
    const page = Array.isArray(json.data) ? json.data : []
    items.push(...page)
    if (page.length < pageSize) break
  }
  return items
}

export async function getRankedContentDetail(
  contentId: string,
  projectId?: string,
): Promise<RankedContentDetail | null> {
  const id = thisProjectId(projectId)
  if (!id) return null

  const json = await rankedGet<RankedDetailResponse>(`/projects/${id}/content/${contentId}`)
  return json.data ?? null
}
