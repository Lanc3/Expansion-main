export const schema = gql`
  type LegalPage {
    id: Int!
    slug: String!
    title: String!
    body: String!
    isActive: Boolean!
    updatedAt: DateTime!
  }

  type Query {
    legalPages: [LegalPage!]! @requireAuth
    legalPage(id: Int!): LegalPage @requireAuth
    legalPageBySlug(slug: String!): LegalPage @skipAuth
  }

  input CreateLegalPageInput {
    slug: String!
    title: String!
    body: String!
    isActive: Boolean
  }

  input UpdateLegalPageInput {
    slug: String
    title: String
    body: String
    isActive: Boolean
  }

  type Mutation {
    createLegalPage(input: CreateLegalPageInput!): LegalPage! @requireAuth
    updateLegalPage(id: Int!, input: UpdateLegalPageInput!): LegalPage!
      @requireAuth
    deleteLegalPage(id: Int!): LegalPage! @requireAuth
  }
`
