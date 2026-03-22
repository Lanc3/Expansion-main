export const schema = gql`
  type NewsletterSubscriber {
    id: Int!
    email: String!
    isActive: Boolean!
    createdAt: DateTime!
  }

  type Query {
    newsletterSubscribers: [NewsletterSubscriber!]! @requireAuth
    newsletterSubscriber(id: Int!): NewsletterSubscriber @requireAuth
  }

  input CreateNewsletterSubscriberInput {
    email: String!
  }

  input UpdateNewsletterSubscriberInput {
    isActive: Boolean
  }

  type Mutation {
    createNewsletterSubscriber(
      input: CreateNewsletterSubscriberInput!
    ): NewsletterSubscriber! @skipAuth
    updateNewsletterSubscriber(
      id: Int!
      input: UpdateNewsletterSubscriberInput!
    ): NewsletterSubscriber! @requireAuth
    deleteNewsletterSubscriber(id: Int!): NewsletterSubscriber! @requireAuth
  }
`
