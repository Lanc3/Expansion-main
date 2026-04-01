import { db } from 'src/lib/db'

import {
  researchArticles,
  researchArticle,
  publishedPostSlugById,
  publishedNicolaLegacySlug,
} from './researchArticles'

describe('researchArticles service', () => {
  scenario('returns only published posts', async (scenario) => {
    const result = await researchArticles({ take: 10, skip: 0 })
    const slugs = result.map((p) => p.slug)
    expect(slugs).toContain(scenario.post.pub.slug)
    expect(slugs).not.toContain(scenario.post.draft.slug)
  })

  scenario('returns published article by slug', async (scenario) => {
    const result = await researchArticle({ slug: 'published-article' })
    expect(result?.title).toEqual('Published')
  })

  scenario('returns null for draft slug', async () => {
    const result = await researchArticle({ slug: 'draft-article' })
    expect(result).toBeNull()
  })

  scenario('publishedPostSlugById', async (scenario) => {
    const slug = await publishedPostSlugById({ id: scenario.post.pub.id })
    expect(slug).toEqual('published-article')
  })

  scenario('publishedNicolaLegacySlug', async (scenario) => {
    await db.post.update({
      where: { id: scenario.post.pub.id },
      data: { legacyNicolaPostId: 42 },
    })
    const slug = await publishedNicolaLegacySlug({ legacyId: 42 })
    expect(slug).toEqual('published-article')
  })
})
