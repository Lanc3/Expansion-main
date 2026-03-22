import gql from "graphql-tag";
export const schema = gql`
  type ProjectData {
    id: Int!
    title: String!
    category: String!
    createdAt: DateTime!
    image: String!
    video: String!
    clientName: String!
    clientWebsite: String!
    objective: String!
    tools: String!
    body: String!
    by: String!
    challenge: String
    solution: String
    results: String
    metrics: String
    featured: Boolean!
    updatedAt: DateTime!
  }

  type Query {
    projectDatas: [ProjectData!]! @skipAuth
    projectData(id: Int!): ProjectData @requireAuth
  }

  input CreateProjectDataInput {
    title: String!
    category: String!
    image: String!
    video: String!
    clientName: String!
    clientWebsite: String!
    objective: String!
    tools: String!
    body: String!
    by: String!
    challenge: String
    solution: String
    results: String
    metrics: String
    featured: Boolean
  }

  input UpdateProjectDataInput {
    title: String
    category: String
    image: String
    video: String
    clientName: String
    clientWebsite: String
    objective: String
    tools: String
    body: String
    by: String
    challenge: String
    solution: String
    results: String
    metrics: String
    featured: Boolean
  }

  type Mutation {
    createProjectData(input: CreateProjectDataInput!): ProjectData! @requireAuth
    updateProjectData(id: Int!, input: UpdateProjectDataInput!): ProjectData!
      @requireAuth
    deleteProjectData(id: Int!): ProjectData! @requireAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvcHJvamVjdERhdGFzLnNkbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxuICB0eXBlIFByb2plY3REYXRhIHtcbiAgICBpZDogSW50IVxuICAgIHRpdGxlOiBTdHJpbmchXG4gICAgY2F0ZWdvcnk6IFN0cmluZyFcbiAgICBjcmVhdGVkQXQ6IERhdGVUaW1lIVxuICAgIGltYWdlOiBTdHJpbmchXG4gICAgdmlkZW86IFN0cmluZyFcbiAgICBjbGllbnROYW1lOiBTdHJpbmchXG4gICAgY2xpZW50V2Vic2l0ZTogU3RyaW5nIVxuICAgIG9iamVjdGl2ZTogU3RyaW5nIVxuICAgIHRvb2xzOiBTdHJpbmchXG4gICAgYm9keTogU3RyaW5nIVxuICAgIGJ5OiBTdHJpbmchXG4gICAgY2hhbGxlbmdlOiBTdHJpbmdcbiAgICBzb2x1dGlvbjogU3RyaW5nXG4gICAgcmVzdWx0czogU3RyaW5nXG4gICAgbWV0cmljczogU3RyaW5nXG4gICAgZmVhdHVyZWQ6IEJvb2xlYW4hXG4gICAgdXBkYXRlZEF0OiBEYXRlVGltZSFcbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIHByb2plY3REYXRhczogW1Byb2plY3REYXRhIV0hIEBza2lwQXV0aFxuICAgIHByb2plY3REYXRhKGlkOiBJbnQhKTogUHJvamVjdERhdGEgQHJlcXVpcmVBdXRoXG4gIH1cblxuICBpbnB1dCBDcmVhdGVQcm9qZWN0RGF0YUlucHV0IHtcbiAgICB0aXRsZTogU3RyaW5nIVxuICAgIGNhdGVnb3J5OiBTdHJpbmchXG4gICAgaW1hZ2U6IFN0cmluZyFcbiAgICB2aWRlbzogU3RyaW5nIVxuICAgIGNsaWVudE5hbWU6IFN0cmluZyFcbiAgICBjbGllbnRXZWJzaXRlOiBTdHJpbmchXG4gICAgb2JqZWN0aXZlOiBTdHJpbmchXG4gICAgdG9vbHM6IFN0cmluZyFcbiAgICBib2R5OiBTdHJpbmchXG4gICAgYnk6IFN0cmluZyFcbiAgICBjaGFsbGVuZ2U6IFN0cmluZ1xuICAgIHNvbHV0aW9uOiBTdHJpbmdcbiAgICByZXN1bHRzOiBTdHJpbmdcbiAgICBtZXRyaWNzOiBTdHJpbmdcbiAgICBmZWF0dXJlZDogQm9vbGVhblxuICB9XG5cbiAgaW5wdXQgVXBkYXRlUHJvamVjdERhdGFJbnB1dCB7XG4gICAgdGl0bGU6IFN0cmluZ1xuICAgIGNhdGVnb3J5OiBTdHJpbmdcbiAgICBpbWFnZTogU3RyaW5nXG4gICAgdmlkZW86IFN0cmluZ1xuICAgIGNsaWVudE5hbWU6IFN0cmluZ1xuICAgIGNsaWVudFdlYnNpdGU6IFN0cmluZ1xuICAgIG9iamVjdGl2ZTogU3RyaW5nXG4gICAgdG9vbHM6IFN0cmluZ1xuICAgIGJvZHk6IFN0cmluZ1xuICAgIGJ5OiBTdHJpbmdcbiAgICBjaGFsbGVuZ2U6IFN0cmluZ1xuICAgIHNvbHV0aW9uOiBTdHJpbmdcbiAgICByZXN1bHRzOiBTdHJpbmdcbiAgICBtZXRyaWNzOiBTdHJpbmdcbiAgICBmZWF0dXJlZDogQm9vbGVhblxuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgY3JlYXRlUHJvamVjdERhdGEoaW5wdXQ6IENyZWF0ZVByb2plY3REYXRhSW5wdXQhKTogUHJvamVjdERhdGEhIEByZXF1aXJlQXV0aFxuICAgIHVwZGF0ZVByb2plY3REYXRhKGlkOiBJbnQhLCBpbnB1dDogVXBkYXRlUHJvamVjdERhdGFJbnB1dCEpOiBQcm9qZWN0RGF0YSFcbiAgICAgIEByZXF1aXJlQXV0aFxuICAgIGRlbGV0ZVByb2plY3REYXRhKGlkOiBJbnQhKTogUHJvamVjdERhdGEhIEByZXF1aXJlQXV0aFxuICB9XG5gXG4iXSwibWFwcGluZ3MiOiJPQUFzQkEsR0FBRztBQUF6QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyJ9