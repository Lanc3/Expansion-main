export const schema = gql`
  type ProcessStep {
    id: Int!
    title: String!
    description: String!
    icon: String!
    order: Int!
    isActive: Boolean!
    createdAt: DateTime!
  }

  type Query {
    processSteps: [ProcessStep!]! @skipAuth
    processStep(id: Int!): ProcessStep @requireAuth
  }

  input CreateProcessStepInput {
    title: String!
    description: String!
    icon: String!
    order: Int!
    isActive: Boolean!
  }

  input UpdateProcessStepInput {
    title: String
    description: String
    icon: String
    order: Int
    isActive: Boolean
  }

  type Mutation {
    createProcessStep(input: CreateProcessStepInput!): ProcessStep! @requireAuth
    updateProcessStep(id: Int!, input: UpdateProcessStepInput!): ProcessStep!
      @requireAuth
    deleteProcessStep(id: Int!): ProcessStep! @requireAuth
  }
`
