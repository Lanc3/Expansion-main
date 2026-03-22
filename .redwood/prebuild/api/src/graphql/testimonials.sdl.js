import gql from "graphql-tag";
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvdGVzdGltb25pYWxzLnNkbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxyXG4gIHR5cGUgVGVzdGltb25pYWwge1xyXG4gICAgaWQ6IEludCFcclxuICAgIGNsaWVudE5hbWU6IFN0cmluZyFcclxuICAgIGNsaWVudFRpdGxlOiBTdHJpbmchXHJcbiAgICBjbGllbnRDb21wYW55OiBTdHJpbmchXHJcbiAgICBjbGllbnRJbWFnZTogU3RyaW5nXHJcbiAgICBxdW90ZTogU3RyaW5nIVxyXG4gICAgcmF0aW5nOiBJbnQhXHJcbiAgICBwcm9qZWN0VXJsOiBTdHJpbmdcclxuICAgIGlzQWN0aXZlOiBCb29sZWFuIVxyXG4gICAgb3JkZXI6IEludCFcclxuICAgIGNyZWF0ZWRBdDogRGF0ZVRpbWUhXHJcbiAgfVxyXG5cclxuICB0eXBlIFF1ZXJ5IHtcclxuICAgIHRlc3RpbW9uaWFsczogW1Rlc3RpbW9uaWFsIV0hIEBza2lwQXV0aFxyXG4gICAgdGVzdGltb25pYWwoaWQ6IEludCEpOiBUZXN0aW1vbmlhbCBAcmVxdWlyZUF1dGhcclxuICB9XHJcblxyXG4gIGlucHV0IENyZWF0ZVRlc3RpbW9uaWFsSW5wdXQge1xyXG4gICAgY2xpZW50TmFtZTogU3RyaW5nIVxyXG4gICAgY2xpZW50VGl0bGU6IFN0cmluZyFcclxuICAgIGNsaWVudENvbXBhbnk6IFN0cmluZyFcclxuICAgIGNsaWVudEltYWdlOiBTdHJpbmdcclxuICAgIHF1b3RlOiBTdHJpbmchXHJcbiAgICByYXRpbmc6IEludCFcclxuICAgIHByb2plY3RVcmw6IFN0cmluZ1xyXG4gICAgaXNBY3RpdmU6IEJvb2xlYW4hXHJcbiAgICBvcmRlcjogSW50IVxyXG4gIH1cclxuXHJcbiAgaW5wdXQgVXBkYXRlVGVzdGltb25pYWxJbnB1dCB7XHJcbiAgICBjbGllbnROYW1lOiBTdHJpbmdcclxuICAgIGNsaWVudFRpdGxlOiBTdHJpbmdcclxuICAgIGNsaWVudENvbXBhbnk6IFN0cmluZ1xyXG4gICAgY2xpZW50SW1hZ2U6IFN0cmluZ1xyXG4gICAgcXVvdGU6IFN0cmluZ1xyXG4gICAgcmF0aW5nOiBJbnRcclxuICAgIHByb2plY3RVcmw6IFN0cmluZ1xyXG4gICAgaXNBY3RpdmU6IEJvb2xlYW5cclxuICAgIG9yZGVyOiBJbnRcclxuICB9XHJcblxyXG4gIHR5cGUgTXV0YXRpb24ge1xyXG4gICAgY3JlYXRlVGVzdGltb25pYWwoaW5wdXQ6IENyZWF0ZVRlc3RpbW9uaWFsSW5wdXQhKTogVGVzdGltb25pYWwhIEByZXF1aXJlQXV0aFxyXG4gICAgdXBkYXRlVGVzdGltb25pYWwoaWQ6IEludCEsIGlucHV0OiBVcGRhdGVUZXN0aW1vbmlhbElucHV0ISk6IFRlc3RpbW9uaWFsIVxyXG4gICAgICBAcmVxdWlyZUF1dGhcclxuICAgIGRlbGV0ZVRlc3RpbW9uaWFsKGlkOiBJbnQhKTogVGVzdGltb25pYWwhIEByZXF1aXJlQXV0aFxyXG4gIH1cclxuYFxyXG4iXSwibWFwcGluZ3MiOiJPQUFzQkEsR0FBRztBQUF6QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMifQ==