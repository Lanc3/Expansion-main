import gql from "graphql-tag";
export const schema = gql`
  type NicolaPost {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
    likeAmount: Int!
    Image: String
  }

  type Query {
    nicolaPosts: [NicolaPost!]! @skipAuth
    nicolaPost(id: Int!): NicolaPost @skipAuth
  }

  input CreateNicolaPostInput {
    title: String!
    body: String!
    likeAmount: Int!
    Image: String
  }

  input UpdateNicolaPostInput {
    title: String
    body: String
    likeAmount: Int
    Image: String
  }

  type Mutation {
    createNicolaPost(input: CreateNicolaPostInput!): NicolaPost! @requireAuth
    updateNicolaPost(id: Int!, input: UpdateNicolaPostInput!): NicolaPost!
      @requireAuth
    deleteNicolaPost(id: Int!): NicolaPost! @requireAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvbmljb2xhUG9zdHMuc2RsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgTmljb2xhUG9zdCB7XG4gICAgaWQ6IEludCFcbiAgICB0aXRsZTogU3RyaW5nIVxuICAgIGJvZHk6IFN0cmluZyFcbiAgICBjcmVhdGVkQXQ6IERhdGVUaW1lIVxuICAgIGxpa2VBbW91bnQ6IEludCFcbiAgICBJbWFnZTogU3RyaW5nXG4gIH1cblxuICB0eXBlIFF1ZXJ5IHtcbiAgICBuaWNvbGFQb3N0czogW05pY29sYVBvc3QhXSEgQHNraXBBdXRoXG4gICAgbmljb2xhUG9zdChpZDogSW50ISk6IE5pY29sYVBvc3QgQHNraXBBdXRoXG4gIH1cblxuICBpbnB1dCBDcmVhdGVOaWNvbGFQb3N0SW5wdXQge1xuICAgIHRpdGxlOiBTdHJpbmchXG4gICAgYm9keTogU3RyaW5nIVxuICAgIGxpa2VBbW91bnQ6IEludCFcbiAgICBJbWFnZTogU3RyaW5nXG4gIH1cblxuICBpbnB1dCBVcGRhdGVOaWNvbGFQb3N0SW5wdXQge1xuICAgIHRpdGxlOiBTdHJpbmdcbiAgICBib2R5OiBTdHJpbmdcbiAgICBsaWtlQW1vdW50OiBJbnRcbiAgICBJbWFnZTogU3RyaW5nXG4gIH1cblxuICB0eXBlIE11dGF0aW9uIHtcbiAgICBjcmVhdGVOaWNvbGFQb3N0KGlucHV0OiBDcmVhdGVOaWNvbGFQb3N0SW5wdXQhKTogTmljb2xhUG9zdCEgQHJlcXVpcmVBdXRoXG4gICAgdXBkYXRlTmljb2xhUG9zdChpZDogSW50ISwgaW5wdXQ6IFVwZGF0ZU5pY29sYVBvc3RJbnB1dCEpOiBOaWNvbGFQb3N0IVxuICAgICAgQHJlcXVpcmVBdXRoXG4gICAgZGVsZXRlTmljb2xhUG9zdChpZDogSW50ISk6IE5pY29sYVBvc3QhIEByZXF1aXJlQXV0aFxuICB9XG5gXG4iXSwibWFwcGluZ3MiOiJPQUFzQkEsR0FBRztBQUF6QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMifQ==