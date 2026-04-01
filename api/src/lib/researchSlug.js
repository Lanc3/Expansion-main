import { UserInputError } from '@redwoodjs/graphql-server'

const RESERVED_SLUGS = new Set([
  'new',
  'edit',
  'admin',
  'api',
  'rss',
  'feed',
  'preview',
])

const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const MAX_SLUG_LEN = 120

/**
 * @param {string} raw
 * @returns {string}
 */
export const slugifyTitle = (raw) => {
  if (!raw || typeof raw !== 'string') {
    return 'article'
  }
  const s = raw
    .toLowerCase()
    .trim()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, MAX_SLUG_LEN)
  return s || 'article'
}

/**
 * @param {string} slug
 */
export const assertValidSlug = (slug) => {
  if (!slug || typeof slug !== 'string') {
    throw new UserInputError('Slug is required.')
  }
  const trimmed = slug.trim().toLowerCase()
  if (trimmed.length > MAX_SLUG_LEN) {
    throw new UserInputError(`Slug must be at most ${MAX_SLUG_LEN} characters.`)
  }
  if (!SLUG_REGEX.test(trimmed)) {
    throw new UserInputError(
      'Slug may only contain lowercase letters, numbers, and hyphens.'
    )
  }
  if (RESERVED_SLUGS.has(trimmed)) {
    throw new UserInputError('This slug is reserved. Choose another.')
  }
  return trimmed
}
