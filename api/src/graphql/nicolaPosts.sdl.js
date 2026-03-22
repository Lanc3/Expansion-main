export const schema = gql`
  type NicolaPost {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
    likeAmount: Int!
    Image: String
  }

  type Query {
    nicolaPosts: [NicolaPost!]! @skipAuth
    nicolaPost(id: Int!): NicolaPost @skipAuth
  }

  input CreateNicolaPostInput {
    title: String!
    body: String!
    likeAmount: Int!
    Image: String
  }

  input UpdateNicolaPostInput {
    title: String
    body: String
    likeAmount: Int
    Image: String
  }

  type Mutation {
    createNicolaPost(input: CreateNicolaPostInput!): NicolaPost! @requireAuth
    updateNicolaPost(id: Int!, input: UpdateNicolaPostInput!): NicolaPost!
      @requireAuth
    deleteNicolaPost(id: Int!): NicolaPost! @requireAuth
  }
`
