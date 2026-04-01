export const schema = gql`
  type Query {
    researchArticles(take: Int, skip: Int): [Post!]! @skipAuth
    researchArticle(slug: String!): Post @skipAuth
    publishedPostSlugById(id: Int!): String @skipAuth
    publishedNicolaLegacySlug(legacyId: Int!): String @skipAuth
    researchArticleDraft(slug: String!): Post @requireAuth
  }
`
