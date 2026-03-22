export const schema = gql`
  type ContactSubmission {
    id: Int!
    name: String!
    email: String!
    company: String
    phone: String
    budget: String
    timeline: String
    projectDescription: String!
    serviceInterest: String
    howFound: String
    status: String!
    notes: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    contactSubmissions: [ContactSubmission!]! @requireAuth
    contactSubmission(id: Int!): ContactSubmission @requireAuth
  }

  input CreateContactSubmissionInput {
    name: String!
    email: String!
    company: String
    phone: String
    budget: String
    timeline: String
    projectDescription: String!
    serviceInterest: String
    howFound: String
  }

  input UpdateContactSubmissionInput {
    status: String
    notes: String
  }

  type Mutation {
    createContactSubmission(
      input: CreateContactSubmissionInput!
    ): ContactSubmission! @skipAuth
    updateContactSubmission(
      id: Int!
      input: UpdateContactSubmissionInput!
    ): ContactSubmission! @requireAuth
    deleteContactSubmission(id: Int!): ContactSubmission! @requireAuth
  }
`
