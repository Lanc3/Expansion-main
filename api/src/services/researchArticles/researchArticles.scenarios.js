export const standard = defineScenario({
  post: {
    pub: {
      data: {
        title: 'Published',
        body: 'Body',
        slug: 'published-article',
        published: true,
        publishedAt: new Date('2021-06-01'),
        contentFormat: 'markdown',
      },
    },
    draft: {
      data: {
        title: 'Draft',
        body: 'Secret',
        slug: 'draft-article',
        published: false,
        contentFormat: 'markdown',
      },
    },
  },
})
