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
`
