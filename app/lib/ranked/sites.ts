import { SITE_ORIGIN } from './config'

export type RankedSiteTarget = {
  projectId: string
  name: string
  origin: string
}

export const RANKED_SITES: RankedSiteTarget[] = [
  {
    projectId: process.env.RANKED_PROJECT_ID || '',
    name: 'Genesis Integrative Medicine',
    origin: SITE_ORIGIN,
  },
].filter((s) => s.projectId)

function sitesFromEnv(): RankedSiteTarget[] {
  const raw = process.env.RANKED_SITE_MAP
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw) as RankedSiteTarget[]
    if (!Array.isArray(parsed)) return []
    return parsed.filter((row) => row?.projectId && row?.origin)
  } catch {
    console.error('[ranked] RANKED_SITE_MAP is not valid JSON')
    return []
  }
}

export function getRankedSiteTargets(): RankedSiteTarget[] {
  const configured = process.env.RANKED_PROJECT_ID || ''
  const merged = new Map<string, RankedSiteTarget>()
  for (const site of [...RANKED_SITES, ...sitesFromEnv()]) {
    if (isLocalOrigin(site.origin) && configured && site.projectId !== configured) {
      console.error(
        `[ranked] ignored mapped project ${site.projectId}: this origin only publishes RANKED_PROJECT_ID`,
      )
      continue
    }
    merged.set(site.projectId, site)
  }
  return [...merged.values()]
}

export function isLocalOrigin(origin: string): boolean {
  try {
    return new URL(origin).host.replace(/^www\./, '') === new URL(SITE_ORIGIN).host.replace(/^www\./, '')
  } catch {
    return origin.replace(/\/$/, '') === SITE_ORIGIN
  }
}
