export const schema = gql`
  type Technology {
    id: Int!
    name: String!
    icon: String!
    category: String!
    proficiency: String!
    order: Int!
    isActive: Boolean!
    createdAt: DateTime!
  }

  type Query {
    technologies: [Technology!]! @skipAuth
    technology(id: Int!): Technology @requireAuth
  }

  input CreateTechnologyInput {
    name: String!
    icon: String!
    category: String!
    proficiency: String!
    order: Int
    isActive: Boolean
  }

  input UpdateTechnologyInput {
    name: String
    icon: String
    category: String
    proficiency: String
    order: Int
    isActive: Boolean
  }

  type Mutation {
    createTechnology(input: CreateTechnologyInput!): Technology! @requireAuth
    updateTechnology(id: Int!, input: UpdateTechnologyInput!): Technology!
      @requireAuth
    deleteTechnology(id: Int!): Technology! @requireAuth
  }
`
