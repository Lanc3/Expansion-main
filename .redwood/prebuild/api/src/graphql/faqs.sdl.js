import gql from "graphql-tag";
export const schema = gql`
  type Faq {
    id: Int!
    question: String!
    answer: String!
    category: String!
    order: Int!
    isActive: Boolean!
    createdAt: DateTime!
  }

  type Query {
    faqs: [Faq!]! @skipAuth
    faq(id: Int!): Faq @requireAuth
  }

  input CreateFaqInput {
    question: String!
    answer: String!
    category: String!
    order: Int!
    isActive: Boolean!
  }

  input UpdateFaqInput {
    question: String
    answer: String
    category: String
    order: Int
    isActive: Boolean
  }

  type Mutation {
    createFaq(input: CreateFaqInput!): Faq! @requireAuth
    updateFaq(id: Int!, input: UpdateFaqInput!): Faq! @requireAuth
    deleteFaq(id: Int!): Faq! @requireAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvZmFxcy5zZGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNjaGVtYSA9IGdxbGBcclxuICB0eXBlIEZhcSB7XHJcbiAgICBpZDogSW50IVxyXG4gICAgcXVlc3Rpb246IFN0cmluZyFcclxuICAgIGFuc3dlcjogU3RyaW5nIVxyXG4gICAgY2F0ZWdvcnk6IFN0cmluZyFcclxuICAgIG9yZGVyOiBJbnQhXHJcbiAgICBpc0FjdGl2ZTogQm9vbGVhbiFcclxuICAgIGNyZWF0ZWRBdDogRGF0ZVRpbWUhXHJcbiAgfVxyXG5cclxuICB0eXBlIFF1ZXJ5IHtcclxuICAgIGZhcXM6IFtGYXEhXSEgQHNraXBBdXRoXHJcbiAgICBmYXEoaWQ6IEludCEpOiBGYXEgQHJlcXVpcmVBdXRoXHJcbiAgfVxyXG5cclxuICBpbnB1dCBDcmVhdGVGYXFJbnB1dCB7XHJcbiAgICBxdWVzdGlvbjogU3RyaW5nIVxyXG4gICAgYW5zd2VyOiBTdHJpbmchXHJcbiAgICBjYXRlZ29yeTogU3RyaW5nIVxyXG4gICAgb3JkZXI6IEludCFcclxuICAgIGlzQWN0aXZlOiBCb29sZWFuIVxyXG4gIH1cclxuXHJcbiAgaW5wdXQgVXBkYXRlRmFxSW5wdXQge1xyXG4gICAgcXVlc3Rpb246IFN0cmluZ1xyXG4gICAgYW5zd2VyOiBTdHJpbmdcclxuICAgIGNhdGVnb3J5OiBTdHJpbmdcclxuICAgIG9yZGVyOiBJbnRcclxuICAgIGlzQWN0aXZlOiBCb29sZWFuXHJcbiAgfVxyXG5cclxuICB0eXBlIE11dGF0aW9uIHtcclxuICAgIGNyZWF0ZUZhcShpbnB1dDogQ3JlYXRlRmFxSW5wdXQhKTogRmFxISBAcmVxdWlyZUF1dGhcclxuICAgIHVwZGF0ZUZhcShpZDogSW50ISwgaW5wdXQ6IFVwZGF0ZUZhcUlucHV0ISk6IEZhcSEgQHJlcXVpcmVBdXRoXHJcbiAgICBkZWxldGVGYXEoaWQ6IEludCEpOiBGYXEhIEByZXF1aXJlQXV0aFxyXG4gIH1cclxuYFxyXG4iXSwibWFwcGluZ3MiOiJPQUFzQkEsR0FBRztBQUF6QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIn0=