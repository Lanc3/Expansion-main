export const schema = gql`
  type Testimonial {
    id: Int!
    clientName: String!
    clientTitle: String!
    clientCompany: String!
    clientImage: String
    quote: String!
    rating: Int!
    projectUrl: String
    isActive: Boolean!
    order: Int!
    createdAt: DateTime!
  }

  type Query {
    testimonials: [Testimonial!]! @skipAuth
    testimonial(id: Int!): Testimonial @requireAuth
  }

  input CreateTestimonialInput {
    clientName: String!
    clientTitle: String!
    clientCompany: String!
    clientImage: String
    quote: String!
    rating: Int!
    projectUrl: String
    isActive: Boolean!
    order: Int!
  }

  input UpdateTestimonialInput {
    clientName: String
    clientTitle: String
    clientCompany: String
    clientImage: String
    quote: String
    rating: Int
    projectUrl: String
    isActive: Boolean
    order: Int
  }

  type Mutation {
    createTestimonial(input: CreateTestimonialInput!): Testimonial! @requireAuth
    updateTestimonial(id: Int!, input: UpdateTestimonialInput!): Testimonial!
      @requireAuth
    deleteTestimonial(id: Int!): Testimonial! @requireAuth
  }
`
