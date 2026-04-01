import { UserInputError } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { assertValidSlug, slugifyTitle } from 'src/lib/researchSlug'

const nextUniqueSlug = async (base, excludeId) => {
  let candidate = base
  let counter = 0
  while (true) {
    const found = await db.post.findFirst({
      where: excludeId
        ? { slug: candidate, NOT: { id: excludeId } }
        : { slug: candidate },
      select: { id: true },
    })
    if (!found) {
      return candidate
    }
    counter += 1
    candidate = `${base}-${counter}`
  }
}

const normalizeTags = (tags) => {
  if (!tags || !Array.isArray(tags)) {
    return []
  }
  return [...new Set(tags.map((t) => String(t).trim()).filter(Boolean))]
}

export const posts = () => {
  requireAuth({ roles: 'admin' })
  return db.post.findMany({
    orderBy: [{ updatedAt: 'desc' }, { id: 'desc' }],
  })
}

export const post = ({ id }) => {
  requireAuth({ roles: 'admin' })
  return db.post.findUnique({
    where: { id },
  })
}

export const createPost = async ({ input }) => {
  requireAuth({ roles: 'admin' })
  let base =
    input.slug?.trim().toLowerCase() || slugifyTitle(input.title || 'article')
  base = assertValidSlug(base)
  const slug = await nextUniqueSlug(base)

  const published = input.published ?? false
  const publishedAt = published
    ? input.publishedAt
      ? new Date(input.publishedAt)
      : new Date()
    : null

  if (input.featured) {
    await db.post.updateMany({ data: { featured: false }, where: { featured: true } })
  }

  return db.post.create({
    data: {
      title: input.title,
      body: input.body,
      likeAmount: input.likeAmount ?? 0,
      Image: input.Image ?? null,
      slug,
      excerpt: input.excerpt ?? null,
      published,
      publishedAt,
      tags: normalizeTags(input.tags),
      seoTitle: input.seoTitle ?? null,
      seoDescription: input.seoDescription ?? null,
      authorName: input.authorName ?? null,
      featured: input.featured ?? false,
      contentFormat: input.contentFormat || 'markdown',
    },
  })
}

export const updatePost = async ({ id, input }) => {
  requireAuth({ roles: 'admin' })
  const existing = await db.post.findUnique({ where: { id } })
  if (!existing) {
    throw new UserInputError('Post not found.')
  }

  const data = {}

  if (input.title !== undefined) {
    data.title = input.title
  }
  if (input.body !== undefined) {
    data.body = input.body
  }
  if (input.likeAmount !== undefined) {
    data.likeAmount = input.likeAmount
  }
  if (input.Image !== undefined) {
    data.Image = input.Image
  }
  if (input.excerpt !== undefined) {
    data.excerpt = input.excerpt
  }
  if (input.tags !== undefined) {
    data.tags = normalizeTags(input.tags)
  }
  if (input.seoTitle !== undefined) {
    data.seoTitle = input.seoTitle
  }
  if (input.seoDescription !== undefined) {
    data.seoDescription = input.seoDescription
  }
  if (input.authorName !== undefined) {
    data.authorName = input.authorName
  }
  if (input.featured !== undefined) {
    data.featured = input.featured
    if (input.featured) {
      await db.post.updateMany({
        data: { featured: false },
        where: { featured: true, NOT: { id } },
      })
    }
  }
  if (input.contentFormat !== undefined) {
    data.contentFormat = input.contentFormat
  }

  if (input.slug !== undefined && input.slug !== null) {
    const normalized = assertValidSlug(input.slug)
    if (normalized !== existing.slug) {
      data.slug = await nextUniqueSlug(normalized, id)
    }
  }

  if (input.published !== undefined) {
    data.published = input.published
    if (!input.published) {
      data.publishedAt = null
    } else if (input.publishedAt !== undefined && input.publishedAt !== null) {
      data.publishedAt = new Date(input.publishedAt)
    } else if (!existing.publishedAt) {
      data.publishedAt = new Date()
    }
  } else if (
    input.publishedAt !== undefined &&
    existing.published
  ) {
    data.publishedAt = input.publishedAt
      ? new Date(input.publishedAt)
      : null
  }

  return db.post.update({
    data,
    where: { id },
  })
}

export const deletePost = ({ id }) => {
  requireAuth({ roles: 'admin' })
  return db.post.delete({
    where: { id },
  })
}
