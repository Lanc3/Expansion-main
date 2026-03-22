export const schema = gql`
  type PricingTier {
    id: Int!
    name: String!
    description: String!
    features: String!
    price: String!
    unit: String!
    isPopular: Boolean!
    ctaText: String!
    order: Int!
    isActive: Boolean!
    createdAt: DateTime!
  }

  type Query {
    pricingTiers: [PricingTier!]! @skipAuth
    pricingTier(id: Int!): PricingTier @requireAuth
  }

  input CreatePricingTierInput {
    name: String!
    description: String!
    features: String!
    price: String!
    unit: String!
    isPopular: Boolean!
    ctaText: String!
    order: Int!
    isActive: Boolean!
  }

  input UpdatePricingTierInput {
    name: String
    description: String
    features: String
    price: String
    unit: String
    isPopular: Boolean
    ctaText: String
    order: Int
    isActive: Boolean
  }

  type Mutation {
    createPricingTier(input: CreatePricingTierInput!): PricingTier! @requireAuth
    updatePricingTier(id: Int!, input: UpdatePricingTierInput!): PricingTier!
      @requireAuth
    deletePricingTier(id: Int!): PricingTier! @requireAuth
  }
`
