export const standard = defineScenario({
  post: {
    one: {
      data: {
        title: 'String',
        body: 'String',
        slug: 'string-one',
        published: true,
        publishedAt: new Date('2020-01-01'),
        contentFormat: 'markdown',
      },
    },
    two: {
      data: {
        title: 'String2',
        body: 'String2',
        slug: 'string-two',
        published: false,
        contentFormat: 'markdown',
      },
    },
  },
})
