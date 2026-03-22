export const schema = gql`
  type TeamMember {
    id: Int!
    name: String!
    role: String!
    bio: String!
    image: String
    linkedin: String
    github: String
    email: String
    order: Int!
    isActive: Boolean!
    createdAt: DateTime!
  }

  type Query {
    teamMembers: [TeamMember!]! @skipAuth
    teamMember(id: Int!): TeamMember @requireAuth
  }

  input CreateTeamMemberInput {
    name: String!
    role: String!
    bio: String!
    image: String
    linkedin: String
    github: String
    email: String
    order: Int!
    isActive: Boolean!
  }

  input UpdateTeamMemberInput {
    name: String
    role: String
    bio: String
    image: String
    linkedin: String
    github: String
    email: String
    order: Int
    isActive: Boolean
  }

  type Mutation {
    createTeamMember(input: CreateTeamMemberInput!): TeamMember! @requireAuth
    updateTeamMember(id: Int!, input: UpdateTeamMemberInput!): TeamMember!
      @requireAuth
    deleteTeamMember(id: Int!): TeamMember! @requireAuth
  }
`
