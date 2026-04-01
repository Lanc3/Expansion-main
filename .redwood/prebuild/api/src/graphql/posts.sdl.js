import gql from "graphql-tag";
export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    likeAmount: Int!
    Image: String
    slug: String!
    excerpt: String
    published: Boolean!
    publishedAt: DateTime
    tags: [String!]!
    seoTitle: String
    seoDescription: String
    authorName: String
    legacyNicolaPostId: Int
    featured: Boolean!
    contentFormat: String!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    title: String!
    body: String!
    likeAmount: Int
    Image: String
    slug: String
    excerpt: String
    published: Boolean
    publishedAt: DateTime
    tags: [String!]
    seoTitle: String
    seoDescription: String
    authorName: String
    featured: Boolean
    contentFormat: String
  }

  input UpdatePostInput {
    title: String
    body: String
    likeAmount: Int
    Image: String
    slug: String
    excerpt: String
    published: Boolean
    publishedAt: DateTime
    tags: [String!]
    seoTitle: String
    seoDescription: String
    authorName: String
    featured: Boolean
    contentFormat: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvcG9zdHMuc2RsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgUG9zdCB7XG4gICAgaWQ6IEludCFcbiAgICB0aXRsZTogU3RyaW5nIVxuICAgIGJvZHk6IFN0cmluZyFcbiAgICBjcmVhdGVkQXQ6IERhdGVUaW1lIVxuICAgIHVwZGF0ZWRBdDogRGF0ZVRpbWUhXG4gICAgbGlrZUFtb3VudDogSW50IVxuICAgIEltYWdlOiBTdHJpbmdcbiAgICBzbHVnOiBTdHJpbmchXG4gICAgZXhjZXJwdDogU3RyaW5nXG4gICAgcHVibGlzaGVkOiBCb29sZWFuIVxuICAgIHB1Ymxpc2hlZEF0OiBEYXRlVGltZVxuICAgIHRhZ3M6IFtTdHJpbmchXSFcbiAgICBzZW9UaXRsZTogU3RyaW5nXG4gICAgc2VvRGVzY3JpcHRpb246IFN0cmluZ1xuICAgIGF1dGhvck5hbWU6IFN0cmluZ1xuICAgIGxlZ2FjeU5pY29sYVBvc3RJZDogSW50XG4gICAgZmVhdHVyZWQ6IEJvb2xlYW4hXG4gICAgY29udGVudEZvcm1hdDogU3RyaW5nIVxuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgcG9zdHM6IFtQb3N0IV0hIEByZXF1aXJlQXV0aFxuICAgIHBvc3QoaWQ6IEludCEpOiBQb3N0IEByZXF1aXJlQXV0aFxuICB9XG5cbiAgaW5wdXQgQ3JlYXRlUG9zdElucHV0IHtcbiAgICB0aXRsZTogU3RyaW5nIVxuICAgIGJvZHk6IFN0cmluZyFcbiAgICBsaWtlQW1vdW50OiBJbnRcbiAgICBJbWFnZTogU3RyaW5nXG4gICAgc2x1ZzogU3RyaW5nXG4gICAgZXhjZXJwdDogU3RyaW5nXG4gICAgcHVibGlzaGVkOiBCb29sZWFuXG4gICAgcHVibGlzaGVkQXQ6IERhdGVUaW1lXG4gICAgdGFnczogW1N0cmluZyFdXG4gICAgc2VvVGl0bGU6IFN0cmluZ1xuICAgIHNlb0Rlc2NyaXB0aW9uOiBTdHJpbmdcbiAgICBhdXRob3JOYW1lOiBTdHJpbmdcbiAgICBmZWF0dXJlZDogQm9vbGVhblxuICAgIGNvbnRlbnRGb3JtYXQ6IFN0cmluZ1xuICB9XG5cbiAgaW5wdXQgVXBkYXRlUG9zdElucHV0IHtcbiAgICB0aXRsZTogU3RyaW5nXG4gICAgYm9keTogU3RyaW5nXG4gICAgbGlrZUFtb3VudDogSW50XG4gICAgSW1hZ2U6IFN0cmluZ1xuICAgIHNsdWc6IFN0cmluZ1xuICAgIGV4Y2VycHQ6IFN0cmluZ1xuICAgIHB1Ymxpc2hlZDogQm9vbGVhblxuICAgIHB1Ymxpc2hlZEF0OiBEYXRlVGltZVxuICAgIHRhZ3M6IFtTdHJpbmchXVxuICAgIHNlb1RpdGxlOiBTdHJpbmdcbiAgICBzZW9EZXNjcmlwdGlvbjogU3RyaW5nXG4gICAgYXV0aG9yTmFtZTogU3RyaW5nXG4gICAgZmVhdHVyZWQ6IEJvb2xlYW5cbiAgICBjb250ZW50Rm9ybWF0OiBTdHJpbmdcbiAgfVxuXG4gIHR5cGUgTXV0YXRpb24ge1xuICAgIGNyZWF0ZVBvc3QoaW5wdXQ6IENyZWF0ZVBvc3RJbnB1dCEpOiBQb3N0ISBAcmVxdWlyZUF1dGhcbiAgICB1cGRhdGVQb3N0KGlkOiBJbnQhLCBpbnB1dDogVXBkYXRlUG9zdElucHV0ISk6IFBvc3QhIEByZXF1aXJlQXV0aFxuICAgIGRlbGV0ZVBvc3QoaWQ6IEludCEpOiBQb3N0ISBAcmVxdWlyZUF1dGhcbiAgfVxuYFxuIl0sIm1hcHBpbmdzIjoiT0FBc0JBLEdBQUc7QUFBekIsT0FBTyxNQUFNQyxNQUFNLEdBQUdELEdBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMifQ==