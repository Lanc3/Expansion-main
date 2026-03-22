import gql from "graphql-tag";
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvc2VydmljZXMuc2RsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXHJcbiAgdHlwZSBTZXJ2aWNlIHtcclxuICAgIGlkOiBJbnQhXHJcbiAgICB0aXRsZTogU3RyaW5nIVxyXG4gICAgc2x1ZzogU3RyaW5nIVxyXG4gICAgc2hvcnREZXNjcmlwdGlvbjogU3RyaW5nIVxyXG4gICAgZnVsbERlc2NyaXB0aW9uOiBTdHJpbmchXHJcbiAgICBpY29uOiBTdHJpbmchXHJcbiAgICBpbWFnZTogU3RyaW5nXHJcbiAgICBvcmRlcjogSW50IVxyXG4gICAgaXNBY3RpdmU6IEJvb2xlYW4hXHJcbiAgICBjcmVhdGVkQXQ6IERhdGVUaW1lIVxyXG4gICAgdXBkYXRlZEF0OiBEYXRlVGltZSFcclxuICB9XHJcblxyXG4gIHR5cGUgUXVlcnkge1xyXG4gICAgc2VydmljZXM6IFtTZXJ2aWNlIV0hIEBza2lwQXV0aFxyXG4gICAgc2VydmljZShpZDogSW50ISk6IFNlcnZpY2UgQHJlcXVpcmVBdXRoXHJcbiAgICBzZXJ2aWNlQnlTbHVnKHNsdWc6IFN0cmluZyEpOiBTZXJ2aWNlIEBza2lwQXV0aFxyXG4gICAgYWN0aXZlU2VydmljZXM6IFtTZXJ2aWNlIV0hIEBza2lwQXV0aFxyXG4gIH1cclxuXHJcbiAgaW5wdXQgQ3JlYXRlU2VydmljZUlucHV0IHtcclxuICAgIHRpdGxlOiBTdHJpbmchXHJcbiAgICBzbHVnOiBTdHJpbmchXHJcbiAgICBzaG9ydERlc2NyaXB0aW9uOiBTdHJpbmchXHJcbiAgICBmdWxsRGVzY3JpcHRpb246IFN0cmluZyFcclxuICAgIGljb246IFN0cmluZyFcclxuICAgIGltYWdlOiBTdHJpbmdcclxuICAgIG9yZGVyOiBJbnRcclxuICAgIGlzQWN0aXZlOiBCb29sZWFuXHJcbiAgfVxyXG5cclxuICBpbnB1dCBVcGRhdGVTZXJ2aWNlSW5wdXQge1xyXG4gICAgdGl0bGU6IFN0cmluZ1xyXG4gICAgc2x1ZzogU3RyaW5nXHJcbiAgICBzaG9ydERlc2NyaXB0aW9uOiBTdHJpbmdcclxuICAgIGZ1bGxEZXNjcmlwdGlvbjogU3RyaW5nXHJcbiAgICBpY29uOiBTdHJpbmdcclxuICAgIGltYWdlOiBTdHJpbmdcclxuICAgIG9yZGVyOiBJbnRcclxuICAgIGlzQWN0aXZlOiBCb29sZWFuXHJcbiAgfVxyXG5cclxuICB0eXBlIE11dGF0aW9uIHtcclxuICAgIGNyZWF0ZVNlcnZpY2UoaW5wdXQ6IENyZWF0ZVNlcnZpY2VJbnB1dCEpOiBTZXJ2aWNlISBAcmVxdWlyZUF1dGhcclxuICAgIHVwZGF0ZVNlcnZpY2UoaWQ6IEludCEsIGlucHV0OiBVcGRhdGVTZXJ2aWNlSW5wdXQhKTogU2VydmljZSEgQHJlcXVpcmVBdXRoXHJcbiAgICBkZWxldGVTZXJ2aWNlKGlkOiBJbnQhKTogU2VydmljZSEgQHJlcXVpcmVBdXRoXHJcbiAgfVxyXG5gXHJcbiJdLCJtYXBwaW5ncyI6Ik9BQXNCQSxHQUFHO0FBQXpCLE9BQU8sTUFBTUMsTUFBTSxHQUFHRCxHQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMifQ==