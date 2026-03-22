export const schema = gql`
  type Faq {
    id: Int!
    question: String!
    answer: String!
    category: String!
    order: Int!
    isActive: Boolean!
    createdAt: DateTime!
  }

  type Query {
    faqs: [Faq!]! @skipAuth
    faq(id: Int!): Faq @requireAuth
  }

  input CreateFaqInput {
    question: String!
    answer: String!
    category: String!
    order: Int!
    isActive: Boolean!
  }

  input UpdateFaqInput {
    question: String
    answer: String
    category: String
    order: Int
    isActive: Boolean
  }

  type Mutation {
    createFaq(input: CreateFaqInput!): Faq! @requireAuth
    updateFaq(id: Int!, input: UpdateFaqInput!): Faq! @requireAuth
    deleteFaq(id: Int!): Faq! @requireAuth
  }
`
