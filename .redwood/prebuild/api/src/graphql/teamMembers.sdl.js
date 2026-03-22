import gql from "graphql-tag";
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvdGVhbU1lbWJlcnMuc2RsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXHJcbiAgdHlwZSBUZWFtTWVtYmVyIHtcclxuICAgIGlkOiBJbnQhXHJcbiAgICBuYW1lOiBTdHJpbmchXHJcbiAgICByb2xlOiBTdHJpbmchXHJcbiAgICBiaW86IFN0cmluZyFcclxuICAgIGltYWdlOiBTdHJpbmdcclxuICAgIGxpbmtlZGluOiBTdHJpbmdcclxuICAgIGdpdGh1YjogU3RyaW5nXHJcbiAgICBlbWFpbDogU3RyaW5nXHJcbiAgICBvcmRlcjogSW50IVxyXG4gICAgaXNBY3RpdmU6IEJvb2xlYW4hXHJcbiAgICBjcmVhdGVkQXQ6IERhdGVUaW1lIVxyXG4gIH1cclxuXHJcbiAgdHlwZSBRdWVyeSB7XHJcbiAgICB0ZWFtTWVtYmVyczogW1RlYW1NZW1iZXIhXSEgQHNraXBBdXRoXHJcbiAgICB0ZWFtTWVtYmVyKGlkOiBJbnQhKTogVGVhbU1lbWJlciBAcmVxdWlyZUF1dGhcclxuICB9XHJcblxyXG4gIGlucHV0IENyZWF0ZVRlYW1NZW1iZXJJbnB1dCB7XHJcbiAgICBuYW1lOiBTdHJpbmchXHJcbiAgICByb2xlOiBTdHJpbmchXHJcbiAgICBiaW86IFN0cmluZyFcclxuICAgIGltYWdlOiBTdHJpbmdcclxuICAgIGxpbmtlZGluOiBTdHJpbmdcclxuICAgIGdpdGh1YjogU3RyaW5nXHJcbiAgICBlbWFpbDogU3RyaW5nXHJcbiAgICBvcmRlcjogSW50IVxyXG4gICAgaXNBY3RpdmU6IEJvb2xlYW4hXHJcbiAgfVxyXG5cclxuICBpbnB1dCBVcGRhdGVUZWFtTWVtYmVySW5wdXQge1xyXG4gICAgbmFtZTogU3RyaW5nXHJcbiAgICByb2xlOiBTdHJpbmdcclxuICAgIGJpbzogU3RyaW5nXHJcbiAgICBpbWFnZTogU3RyaW5nXHJcbiAgICBsaW5rZWRpbjogU3RyaW5nXHJcbiAgICBnaXRodWI6IFN0cmluZ1xyXG4gICAgZW1haWw6IFN0cmluZ1xyXG4gICAgb3JkZXI6IEludFxyXG4gICAgaXNBY3RpdmU6IEJvb2xlYW5cclxuICB9XHJcblxyXG4gIHR5cGUgTXV0YXRpb24ge1xyXG4gICAgY3JlYXRlVGVhbU1lbWJlcihpbnB1dDogQ3JlYXRlVGVhbU1lbWJlcklucHV0ISk6IFRlYW1NZW1iZXIhIEByZXF1aXJlQXV0aFxyXG4gICAgdXBkYXRlVGVhbU1lbWJlcihpZDogSW50ISwgaW5wdXQ6IFVwZGF0ZVRlYW1NZW1iZXJJbnB1dCEpOiBUZWFtTWVtYmVyIVxyXG4gICAgICBAcmVxdWlyZUF1dGhcclxuICAgIGRlbGV0ZVRlYW1NZW1iZXIoaWQ6IEludCEpOiBUZWFtTWVtYmVyISBAcmVxdWlyZUF1dGhcclxuICB9XHJcbmBcclxuIl0sIm1hcHBpbmdzIjoiT0FBc0JBLEdBQUc7QUFBekIsT0FBTyxNQUFNQyxNQUFNLEdBQUdELEdBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIn0=