/**
 * Canonical site origin for absolute OG / canonical URLs.
 * Set SITE_URL in .env (see redwood.toml includeEnvironmentVariables).
 */
export const getSiteUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  const fromEnv = process.env.SITE_URL
  if (fromEnv && /^https?:\/\//i.test(fromEnv)) {
    return fromEnv.replace(/\/$/, '')
  }
  return 'https://www.expansion.ie'
}

/**
 * @param {string | null | undefined} pathOrUrl
 */
export const absoluteUrl = (pathOrUrl) => {
  if (!pathOrUrl) {
    return ''
  }
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl
  }
  const base = getSiteUrl().replace(/\/$/, '')
  const p = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  return `${base}${p}`
}
