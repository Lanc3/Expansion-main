export const schema = gql`
  type ClientLogo {
    id: Int!
    name: String!
    logoUrl: String!
    websiteUrl: String
    order: Int!
    isActive: Boolean!
    createdAt: DateTime!
  }

  type Query {
    clientLogos: [ClientLogo!]! @skipAuth
    clientLogo(id: Int!): ClientLogo @requireAuth
  }

  input CreateClientLogoInput {
    name: String!
    logoUrl: String!
    websiteUrl: String
    order: Int
    isActive: Boolean
  }

  input UpdateClientLogoInput {
    name: String
    logoUrl: String
    websiteUrl: String
    order: Int
    isActive: Boolean
  }

  type Mutation {
    createClientLogo(input: CreateClientLogoInput!): ClientLogo! @requireAuth
    updateClientLogo(id: Int!, input: UpdateClientLogoInput!): ClientLogo!
      @requireAuth
    deleteClientLogo(id: Int!): ClientLogo! @requireAuth
  }
`
