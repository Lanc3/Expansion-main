import { db } from 'src/lib/db'

import { requireAuth } from 'src/lib/auth'

const MAX_TAKE = 100

export const researchArticles = ({ take, skip }) => {
  const t = Math.min(Math.max(take ?? 24, 1), MAX_TAKE)
  const s = Math.max(skip ?? 0, 0)
  return db.post.findMany({
    where: { published: true },
    orderBy: [{ publishedAt: 'desc' }, { createdAt: 'desc' }],
    take: t,
    skip: s,
  })
}

export const researchArticle = ({ slug }) => {
  const normalized = slug?.trim().toLowerCase()
  if (!normalized) {
    return null
  }
  return db.post.findFirst({
    where: { slug: normalized, published: true },
  })
}

export const publishedPostSlugById = async ({ id }) => {
  const row = await db.post.findFirst({
    where: { id, published: true },
    select: { slug: true },
  })
  return row?.slug ?? null
}

export const publishedNicolaLegacySlug = async ({ legacyId }) => {
  const row = await db.post.findFirst({
    where: { legacyNicolaPostId: legacyId, published: true },
    select: { slug: true },
  })
  return row?.slug ?? null
}

export const researchArticleDraft = ({ slug }) => {
  requireAuth({ roles: 'admin' })
  const normalized = slug?.trim().toLowerCase()
  if (!normalized) {
    return null
  }
  return db.post.findFirst({
    where: { slug: normalized },
  })
}
