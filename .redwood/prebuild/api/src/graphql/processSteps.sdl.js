import gql from "graphql-tag";
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvcHJvY2Vzc1N0ZXBzLnNkbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxyXG4gIHR5cGUgUHJvY2Vzc1N0ZXAge1xyXG4gICAgaWQ6IEludCFcclxuICAgIHRpdGxlOiBTdHJpbmchXHJcbiAgICBkZXNjcmlwdGlvbjogU3RyaW5nIVxyXG4gICAgaWNvbjogU3RyaW5nIVxyXG4gICAgb3JkZXI6IEludCFcclxuICAgIGlzQWN0aXZlOiBCb29sZWFuIVxyXG4gICAgY3JlYXRlZEF0OiBEYXRlVGltZSFcclxuICB9XHJcblxyXG4gIHR5cGUgUXVlcnkge1xyXG4gICAgcHJvY2Vzc1N0ZXBzOiBbUHJvY2Vzc1N0ZXAhXSEgQHNraXBBdXRoXHJcbiAgICBwcm9jZXNzU3RlcChpZDogSW50ISk6IFByb2Nlc3NTdGVwIEByZXF1aXJlQXV0aFxyXG4gIH1cclxuXHJcbiAgaW5wdXQgQ3JlYXRlUHJvY2Vzc1N0ZXBJbnB1dCB7XHJcbiAgICB0aXRsZTogU3RyaW5nIVxyXG4gICAgZGVzY3JpcHRpb246IFN0cmluZyFcclxuICAgIGljb246IFN0cmluZyFcclxuICAgIG9yZGVyOiBJbnQhXHJcbiAgICBpc0FjdGl2ZTogQm9vbGVhbiFcclxuICB9XHJcblxyXG4gIGlucHV0IFVwZGF0ZVByb2Nlc3NTdGVwSW5wdXQge1xyXG4gICAgdGl0bGU6IFN0cmluZ1xyXG4gICAgZGVzY3JpcHRpb246IFN0cmluZ1xyXG4gICAgaWNvbjogU3RyaW5nXHJcbiAgICBvcmRlcjogSW50XHJcbiAgICBpc0FjdGl2ZTogQm9vbGVhblxyXG4gIH1cclxuXHJcbiAgdHlwZSBNdXRhdGlvbiB7XHJcbiAgICBjcmVhdGVQcm9jZXNzU3RlcChpbnB1dDogQ3JlYXRlUHJvY2Vzc1N0ZXBJbnB1dCEpOiBQcm9jZXNzU3RlcCEgQHJlcXVpcmVBdXRoXHJcbiAgICB1cGRhdGVQcm9jZXNzU3RlcChpZDogSW50ISwgaW5wdXQ6IFVwZGF0ZVByb2Nlc3NTdGVwSW5wdXQhKTogUHJvY2Vzc1N0ZXAhXHJcbiAgICAgIEByZXF1aXJlQXV0aFxyXG4gICAgZGVsZXRlUHJvY2Vzc1N0ZXAoaWQ6IEludCEpOiBQcm9jZXNzU3RlcCEgQHJlcXVpcmVBdXRoXHJcbiAgfVxyXG5gXHJcbiJdLCJtYXBwaW5ncyI6Ik9BQXNCQSxHQUFHO0FBQXpCLE9BQU8sTUFBTUMsTUFBTSxHQUFHRCxHQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyJ9