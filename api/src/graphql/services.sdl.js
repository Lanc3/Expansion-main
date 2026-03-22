export const schema = gql`
  type Service {
    id: Int!
    title: String!
    slug: String!
    shortDescription: String!
    fullDescription: String!
    icon: String!
    image: String
    order: Int!
    isActive: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    services: [Service!]! @skipAuth
    service(id: Int!): Service @requireAuth
    serviceBySlug(slug: String!): Service @skipAuth
    activeServices: [Service!]! @skipAuth
  }

  input CreateServiceInput {
    title: String!
    slug: String!
    shortDescription: String!
    fullDescription: String!
    icon: String!
    image: String
    order: Int
    isActive: Boolean
  }

  input UpdateServiceInput {
    title: String
    slug: String
    shortDescription: String
    fullDescription: String
    icon: String
    image: String
    order: Int
    isActive: Boolean
  }

  type Mutation {
    createService(input: CreateServiceInput!): Service! @requireAuth
    updateService(id: Int!, input: UpdateServiceInput!): Service! @requireAuth
    deleteService(id: Int!): Service! @requireAuth
  }
`
