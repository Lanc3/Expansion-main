import gql from "graphql-tag";
export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
    likeAmount: Int!
    Image: String
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: Int!): Post @skipAuth
  }

  input CreatePostInput {
    title: String!
    body: String!
    likeAmount: Int!
    Image: String
  }

  input UpdatePostInput {
    title: String
    body: String
    likeAmount: Int
    Image: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvcG9zdHMuc2RsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgUG9zdCB7XG4gICAgaWQ6IEludCFcbiAgICB0aXRsZTogU3RyaW5nIVxuICAgIGJvZHk6IFN0cmluZyFcbiAgICBjcmVhdGVkQXQ6IERhdGVUaW1lIVxuICAgIGxpa2VBbW91bnQ6IEludCFcbiAgICBJbWFnZTogU3RyaW5nXG4gIH1cblxuICB0eXBlIFF1ZXJ5IHtcbiAgICBwb3N0czogW1Bvc3QhXSEgQHNraXBBdXRoXG4gICAgcG9zdChpZDogSW50ISk6IFBvc3QgQHNraXBBdXRoXG4gIH1cblxuICBpbnB1dCBDcmVhdGVQb3N0SW5wdXQge1xuICAgIHRpdGxlOiBTdHJpbmchXG4gICAgYm9keTogU3RyaW5nIVxuICAgIGxpa2VBbW91bnQ6IEludCFcbiAgICBJbWFnZTogU3RyaW5nXG4gIH1cblxuICBpbnB1dCBVcGRhdGVQb3N0SW5wdXQge1xuICAgIHRpdGxlOiBTdHJpbmdcbiAgICBib2R5OiBTdHJpbmdcbiAgICBsaWtlQW1vdW50OiBJbnRcbiAgICBJbWFnZTogU3RyaW5nXG4gIH1cblxuICB0eXBlIE11dGF0aW9uIHtcbiAgICBjcmVhdGVQb3N0KGlucHV0OiBDcmVhdGVQb3N0SW5wdXQhKTogUG9zdCEgQHJlcXVpcmVBdXRoXG4gICAgdXBkYXRlUG9zdChpZDogSW50ISwgaW5wdXQ6IFVwZGF0ZVBvc3RJbnB1dCEpOiBQb3N0ISBAcmVxdWlyZUF1dGhcbiAgICBkZWxldGVQb3N0KGlkOiBJbnQhKTogUG9zdCEgQHJlcXVpcmVBdXRoXG4gIH1cbmBcbiJdLCJtYXBwaW5ncyI6Ik9BQXNCQSxHQUFHO0FBQXpCLE9BQU8sTUFBTUMsTUFBTSxHQUFHRCxHQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMifQ==