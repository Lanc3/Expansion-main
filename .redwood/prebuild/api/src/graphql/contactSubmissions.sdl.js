import gql from "graphql-tag";
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvY29udGFjdFN1Ym1pc3Npb25zLnNkbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxyXG4gIHR5cGUgQ29udGFjdFN1Ym1pc3Npb24ge1xyXG4gICAgaWQ6IEludCFcclxuICAgIG5hbWU6IFN0cmluZyFcclxuICAgIGVtYWlsOiBTdHJpbmchXHJcbiAgICBjb21wYW55OiBTdHJpbmdcclxuICAgIHBob25lOiBTdHJpbmdcclxuICAgIGJ1ZGdldDogU3RyaW5nXHJcbiAgICB0aW1lbGluZTogU3RyaW5nXHJcbiAgICBwcm9qZWN0RGVzY3JpcHRpb246IFN0cmluZyFcclxuICAgIHNlcnZpY2VJbnRlcmVzdDogU3RyaW5nXHJcbiAgICBob3dGb3VuZDogU3RyaW5nXHJcbiAgICBzdGF0dXM6IFN0cmluZyFcclxuICAgIG5vdGVzOiBTdHJpbmdcclxuICAgIGNyZWF0ZWRBdDogRGF0ZVRpbWUhXHJcbiAgICB1cGRhdGVkQXQ6IERhdGVUaW1lIVxyXG4gIH1cclxuXHJcbiAgdHlwZSBRdWVyeSB7XHJcbiAgICBjb250YWN0U3VibWlzc2lvbnM6IFtDb250YWN0U3VibWlzc2lvbiFdISBAcmVxdWlyZUF1dGhcclxuICAgIGNvbnRhY3RTdWJtaXNzaW9uKGlkOiBJbnQhKTogQ29udGFjdFN1Ym1pc3Npb24gQHJlcXVpcmVBdXRoXHJcbiAgfVxyXG5cclxuICBpbnB1dCBDcmVhdGVDb250YWN0U3VibWlzc2lvbklucHV0IHtcclxuICAgIG5hbWU6IFN0cmluZyFcclxuICAgIGVtYWlsOiBTdHJpbmchXHJcbiAgICBjb21wYW55OiBTdHJpbmdcclxuICAgIHBob25lOiBTdHJpbmdcclxuICAgIGJ1ZGdldDogU3RyaW5nXHJcbiAgICB0aW1lbGluZTogU3RyaW5nXHJcbiAgICBwcm9qZWN0RGVzY3JpcHRpb246IFN0cmluZyFcclxuICAgIHNlcnZpY2VJbnRlcmVzdDogU3RyaW5nXHJcbiAgICBob3dGb3VuZDogU3RyaW5nXHJcbiAgfVxyXG5cclxuICBpbnB1dCBVcGRhdGVDb250YWN0U3VibWlzc2lvbklucHV0IHtcclxuICAgIHN0YXR1czogU3RyaW5nXHJcbiAgICBub3RlczogU3RyaW5nXHJcbiAgfVxyXG5cclxuICB0eXBlIE11dGF0aW9uIHtcclxuICAgIGNyZWF0ZUNvbnRhY3RTdWJtaXNzaW9uKFxyXG4gICAgICBpbnB1dDogQ3JlYXRlQ29udGFjdFN1Ym1pc3Npb25JbnB1dCFcclxuICAgICk6IENvbnRhY3RTdWJtaXNzaW9uISBAc2tpcEF1dGhcclxuICAgIHVwZGF0ZUNvbnRhY3RTdWJtaXNzaW9uKFxyXG4gICAgICBpZDogSW50IVxyXG4gICAgICBpbnB1dDogVXBkYXRlQ29udGFjdFN1Ym1pc3Npb25JbnB1dCFcclxuICAgICk6IENvbnRhY3RTdWJtaXNzaW9uISBAcmVxdWlyZUF1dGhcclxuICAgIGRlbGV0ZUNvbnRhY3RTdWJtaXNzaW9uKGlkOiBJbnQhKTogQ29udGFjdFN1Ym1pc3Npb24hIEByZXF1aXJlQXV0aFxyXG4gIH1cclxuYFxyXG4iXSwibWFwcGluZ3MiOiJPQUFzQkEsR0FBRztBQUF6QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMifQ==