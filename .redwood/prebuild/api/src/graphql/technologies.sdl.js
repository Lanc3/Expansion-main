import gql from "graphql-tag";
export const schema = gql`
  type Technology {
    id: Int!
    name: String!
    icon: String!
    category: String!
    proficiency: String!
    order: Int!
    isActive: Boolean!
    createdAt: DateTime!
  }

  type Query {
    technologies: [Technology!]! @skipAuth
    technology(id: Int!): Technology @requireAuth
  }

  input CreateTechnologyInput {
    name: String!
    icon: String!
    category: String!
    proficiency: String!
    order: Int
    isActive: Boolean
  }

  input UpdateTechnologyInput {
    name: String
    icon: String
    category: String
    proficiency: String
    order: Int
    isActive: Boolean
  }

  type Mutation {
    createTechnology(input: CreateTechnologyInput!): Technology! @requireAuth
    updateTechnology(id: Int!, input: UpdateTechnologyInput!): Technology!
      @requireAuth
    deleteTechnology(id: Int!): Technology! @requireAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvdGVjaG5vbG9naWVzLnNkbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxyXG4gIHR5cGUgVGVjaG5vbG9neSB7XHJcbiAgICBpZDogSW50IVxyXG4gICAgbmFtZTogU3RyaW5nIVxyXG4gICAgaWNvbjogU3RyaW5nIVxyXG4gICAgY2F0ZWdvcnk6IFN0cmluZyFcclxuICAgIHByb2ZpY2llbmN5OiBTdHJpbmchXHJcbiAgICBvcmRlcjogSW50IVxyXG4gICAgaXNBY3RpdmU6IEJvb2xlYW4hXHJcbiAgICBjcmVhdGVkQXQ6IERhdGVUaW1lIVxyXG4gIH1cclxuXHJcbiAgdHlwZSBRdWVyeSB7XHJcbiAgICB0ZWNobm9sb2dpZXM6IFtUZWNobm9sb2d5IV0hIEBza2lwQXV0aFxyXG4gICAgdGVjaG5vbG9neShpZDogSW50ISk6IFRlY2hub2xvZ3kgQHJlcXVpcmVBdXRoXHJcbiAgfVxyXG5cclxuICBpbnB1dCBDcmVhdGVUZWNobm9sb2d5SW5wdXQge1xyXG4gICAgbmFtZTogU3RyaW5nIVxyXG4gICAgaWNvbjogU3RyaW5nIVxyXG4gICAgY2F0ZWdvcnk6IFN0cmluZyFcclxuICAgIHByb2ZpY2llbmN5OiBTdHJpbmchXHJcbiAgICBvcmRlcjogSW50XHJcbiAgICBpc0FjdGl2ZTogQm9vbGVhblxyXG4gIH1cclxuXHJcbiAgaW5wdXQgVXBkYXRlVGVjaG5vbG9neUlucHV0IHtcclxuICAgIG5hbWU6IFN0cmluZ1xyXG4gICAgaWNvbjogU3RyaW5nXHJcbiAgICBjYXRlZ29yeTogU3RyaW5nXHJcbiAgICBwcm9maWNpZW5jeTogU3RyaW5nXHJcbiAgICBvcmRlcjogSW50XHJcbiAgICBpc0FjdGl2ZTogQm9vbGVhblxyXG4gIH1cclxuXHJcbiAgdHlwZSBNdXRhdGlvbiB7XHJcbiAgICBjcmVhdGVUZWNobm9sb2d5KGlucHV0OiBDcmVhdGVUZWNobm9sb2d5SW5wdXQhKTogVGVjaG5vbG9neSEgQHJlcXVpcmVBdXRoXHJcbiAgICB1cGRhdGVUZWNobm9sb2d5KGlkOiBJbnQhLCBpbnB1dDogVXBkYXRlVGVjaG5vbG9neUlucHV0ISk6IFRlY2hub2xvZ3khXHJcbiAgICAgIEByZXF1aXJlQXV0aFxyXG4gICAgZGVsZXRlVGVjaG5vbG9neShpZDogSW50ISk6IFRlY2hub2xvZ3khIEByZXF1aXJlQXV0aFxyXG4gIH1cclxuYFxyXG4iXSwibWFwcGluZ3MiOiJPQUFzQkEsR0FBRztBQUF6QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMifQ==