import gql from "graphql-tag";
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvcHJpY2luZ1RpZXJzLnNkbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxyXG4gIHR5cGUgUHJpY2luZ1RpZXIge1xyXG4gICAgaWQ6IEludCFcclxuICAgIG5hbWU6IFN0cmluZyFcclxuICAgIGRlc2NyaXB0aW9uOiBTdHJpbmchXHJcbiAgICBmZWF0dXJlczogU3RyaW5nIVxyXG4gICAgcHJpY2U6IFN0cmluZyFcclxuICAgIHVuaXQ6IFN0cmluZyFcclxuICAgIGlzUG9wdWxhcjogQm9vbGVhbiFcclxuICAgIGN0YVRleHQ6IFN0cmluZyFcclxuICAgIG9yZGVyOiBJbnQhXHJcbiAgICBpc0FjdGl2ZTogQm9vbGVhbiFcclxuICAgIGNyZWF0ZWRBdDogRGF0ZVRpbWUhXHJcbiAgfVxyXG5cclxuICB0eXBlIFF1ZXJ5IHtcclxuICAgIHByaWNpbmdUaWVyczogW1ByaWNpbmdUaWVyIV0hIEBza2lwQXV0aFxyXG4gICAgcHJpY2luZ1RpZXIoaWQ6IEludCEpOiBQcmljaW5nVGllciBAcmVxdWlyZUF1dGhcclxuICB9XHJcblxyXG4gIGlucHV0IENyZWF0ZVByaWNpbmdUaWVySW5wdXQge1xyXG4gICAgbmFtZTogU3RyaW5nIVxyXG4gICAgZGVzY3JpcHRpb246IFN0cmluZyFcclxuICAgIGZlYXR1cmVzOiBTdHJpbmchXHJcbiAgICBwcmljZTogU3RyaW5nIVxyXG4gICAgdW5pdDogU3RyaW5nIVxyXG4gICAgaXNQb3B1bGFyOiBCb29sZWFuIVxyXG4gICAgY3RhVGV4dDogU3RyaW5nIVxyXG4gICAgb3JkZXI6IEludCFcclxuICAgIGlzQWN0aXZlOiBCb29sZWFuIVxyXG4gIH1cclxuXHJcbiAgaW5wdXQgVXBkYXRlUHJpY2luZ1RpZXJJbnB1dCB7XHJcbiAgICBuYW1lOiBTdHJpbmdcclxuICAgIGRlc2NyaXB0aW9uOiBTdHJpbmdcclxuICAgIGZlYXR1cmVzOiBTdHJpbmdcclxuICAgIHByaWNlOiBTdHJpbmdcclxuICAgIHVuaXQ6IFN0cmluZ1xyXG4gICAgaXNQb3B1bGFyOiBCb29sZWFuXHJcbiAgICBjdGFUZXh0OiBTdHJpbmdcclxuICAgIG9yZGVyOiBJbnRcclxuICAgIGlzQWN0aXZlOiBCb29sZWFuXHJcbiAgfVxyXG5cclxuICB0eXBlIE11dGF0aW9uIHtcclxuICAgIGNyZWF0ZVByaWNpbmdUaWVyKGlucHV0OiBDcmVhdGVQcmljaW5nVGllcklucHV0ISk6IFByaWNpbmdUaWVyISBAcmVxdWlyZUF1dGhcclxuICAgIHVwZGF0ZVByaWNpbmdUaWVyKGlkOiBJbnQhLCBpbnB1dDogVXBkYXRlUHJpY2luZ1RpZXJJbnB1dCEpOiBQcmljaW5nVGllciFcclxuICAgICAgQHJlcXVpcmVBdXRoXHJcbiAgICBkZWxldGVQcmljaW5nVGllcihpZDogSW50ISk6IFByaWNpbmdUaWVyISBAcmVxdWlyZUF1dGhcclxuICB9XHJcbmBcclxuIl0sIm1hcHBpbmdzIjoiT0FBc0JBLEdBQUc7QUFBekIsT0FBTyxNQUFNQyxNQUFNLEdBQUdELEdBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIn0=