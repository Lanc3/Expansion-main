import gql from "graphql-tag";
export const schema = gql`
  type LegalPage {
    id: Int!
    slug: String!
    title: String!
    body: String!
    isActive: Boolean!
    updatedAt: DateTime!
  }

  type Query {
    legalPages: [LegalPage!]! @requireAuth
    legalPage(id: Int!): LegalPage @requireAuth
    legalPageBySlug(slug: String!): LegalPage @skipAuth
  }

  input CreateLegalPageInput {
    slug: String!
    title: String!
    body: String!
    isActive: Boolean
  }

  input UpdateLegalPageInput {
    slug: String
    title: String
    body: String
    isActive: Boolean
  }

  type Mutation {
    createLegalPage(input: CreateLegalPageInput!): LegalPage! @requireAuth
    updateLegalPage(id: Int!, input: UpdateLegalPageInput!): LegalPage!
      @requireAuth
    deleteLegalPage(id: Int!): LegalPage! @requireAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvbGVnYWxQYWdlcy5zZGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNjaGVtYSA9IGdxbGBcclxuICB0eXBlIExlZ2FsUGFnZSB7XHJcbiAgICBpZDogSW50IVxyXG4gICAgc2x1ZzogU3RyaW5nIVxyXG4gICAgdGl0bGU6IFN0cmluZyFcclxuICAgIGJvZHk6IFN0cmluZyFcclxuICAgIGlzQWN0aXZlOiBCb29sZWFuIVxyXG4gICAgdXBkYXRlZEF0OiBEYXRlVGltZSFcclxuICB9XHJcblxyXG4gIHR5cGUgUXVlcnkge1xyXG4gICAgbGVnYWxQYWdlczogW0xlZ2FsUGFnZSFdISBAcmVxdWlyZUF1dGhcclxuICAgIGxlZ2FsUGFnZShpZDogSW50ISk6IExlZ2FsUGFnZSBAcmVxdWlyZUF1dGhcclxuICAgIGxlZ2FsUGFnZUJ5U2x1ZyhzbHVnOiBTdHJpbmchKTogTGVnYWxQYWdlIEBza2lwQXV0aFxyXG4gIH1cclxuXHJcbiAgaW5wdXQgQ3JlYXRlTGVnYWxQYWdlSW5wdXQge1xyXG4gICAgc2x1ZzogU3RyaW5nIVxyXG4gICAgdGl0bGU6IFN0cmluZyFcclxuICAgIGJvZHk6IFN0cmluZyFcclxuICAgIGlzQWN0aXZlOiBCb29sZWFuXHJcbiAgfVxyXG5cclxuICBpbnB1dCBVcGRhdGVMZWdhbFBhZ2VJbnB1dCB7XHJcbiAgICBzbHVnOiBTdHJpbmdcclxuICAgIHRpdGxlOiBTdHJpbmdcclxuICAgIGJvZHk6IFN0cmluZ1xyXG4gICAgaXNBY3RpdmU6IEJvb2xlYW5cclxuICB9XHJcblxyXG4gIHR5cGUgTXV0YXRpb24ge1xyXG4gICAgY3JlYXRlTGVnYWxQYWdlKGlucHV0OiBDcmVhdGVMZWdhbFBhZ2VJbnB1dCEpOiBMZWdhbFBhZ2UhIEByZXF1aXJlQXV0aFxyXG4gICAgdXBkYXRlTGVnYWxQYWdlKGlkOiBJbnQhLCBpbnB1dDogVXBkYXRlTGVnYWxQYWdlSW5wdXQhKTogTGVnYWxQYWdlIVxyXG4gICAgICBAcmVxdWlyZUF1dGhcclxuICAgIGRlbGV0ZUxlZ2FsUGFnZShpZDogSW50ISk6IExlZ2FsUGFnZSEgQHJlcXVpcmVBdXRoXHJcbiAgfVxyXG5gXHJcbiJdLCJtYXBwaW5ncyI6Ik9BQXNCQSxHQUFHO0FBQXpCLE9BQU8sTUFBTUMsTUFBTSxHQUFHRCxHQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIn0=