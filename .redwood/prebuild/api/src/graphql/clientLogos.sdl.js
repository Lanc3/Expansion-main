import gql from "graphql-tag";
export const schema = gql`
  type ClientLogo {
    id: Int!
    name: String!
    logoUrl: String!
    websiteUrl: String
    order: Int!
    isActive: Boolean!
    createdAt: DateTime!
  }

  type Query {
    clientLogos: [ClientLogo!]! @skipAuth
    clientLogo(id: Int!): ClientLogo @requireAuth
  }

  input CreateClientLogoInput {
    name: String!
    logoUrl: String!
    websiteUrl: String
    order: Int
    isActive: Boolean
  }

  input UpdateClientLogoInput {
    name: String
    logoUrl: String
    websiteUrl: String
    order: Int
    isActive: Boolean
  }

  type Mutation {
    createClientLogo(input: CreateClientLogoInput!): ClientLogo! @requireAuth
    updateClientLogo(id: Int!, input: UpdateClientLogoInput!): ClientLogo!
      @requireAuth
    deleteClientLogo(id: Int!): ClientLogo! @requireAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvY2xpZW50TG9nb3Muc2RsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXHJcbiAgdHlwZSBDbGllbnRMb2dvIHtcclxuICAgIGlkOiBJbnQhXHJcbiAgICBuYW1lOiBTdHJpbmchXHJcbiAgICBsb2dvVXJsOiBTdHJpbmchXHJcbiAgICB3ZWJzaXRlVXJsOiBTdHJpbmdcclxuICAgIG9yZGVyOiBJbnQhXHJcbiAgICBpc0FjdGl2ZTogQm9vbGVhbiFcclxuICAgIGNyZWF0ZWRBdDogRGF0ZVRpbWUhXHJcbiAgfVxyXG5cclxuICB0eXBlIFF1ZXJ5IHtcclxuICAgIGNsaWVudExvZ29zOiBbQ2xpZW50TG9nbyFdISBAc2tpcEF1dGhcclxuICAgIGNsaWVudExvZ28oaWQ6IEludCEpOiBDbGllbnRMb2dvIEByZXF1aXJlQXV0aFxyXG4gIH1cclxuXHJcbiAgaW5wdXQgQ3JlYXRlQ2xpZW50TG9nb0lucHV0IHtcclxuICAgIG5hbWU6IFN0cmluZyFcclxuICAgIGxvZ29Vcmw6IFN0cmluZyFcclxuICAgIHdlYnNpdGVVcmw6IFN0cmluZ1xyXG4gICAgb3JkZXI6IEludFxyXG4gICAgaXNBY3RpdmU6IEJvb2xlYW5cclxuICB9XHJcblxyXG4gIGlucHV0IFVwZGF0ZUNsaWVudExvZ29JbnB1dCB7XHJcbiAgICBuYW1lOiBTdHJpbmdcclxuICAgIGxvZ29Vcmw6IFN0cmluZ1xyXG4gICAgd2Vic2l0ZVVybDogU3RyaW5nXHJcbiAgICBvcmRlcjogSW50XHJcbiAgICBpc0FjdGl2ZTogQm9vbGVhblxyXG4gIH1cclxuXHJcbiAgdHlwZSBNdXRhdGlvbiB7XHJcbiAgICBjcmVhdGVDbGllbnRMb2dvKGlucHV0OiBDcmVhdGVDbGllbnRMb2dvSW5wdXQhKTogQ2xpZW50TG9nbyEgQHJlcXVpcmVBdXRoXHJcbiAgICB1cGRhdGVDbGllbnRMb2dvKGlkOiBJbnQhLCBpbnB1dDogVXBkYXRlQ2xpZW50TG9nb0lucHV0ISk6IENsaWVudExvZ28hXHJcbiAgICAgIEByZXF1aXJlQXV0aFxyXG4gICAgZGVsZXRlQ2xpZW50TG9nbyhpZDogSW50ISk6IENsaWVudExvZ28hIEByZXF1aXJlQXV0aFxyXG4gIH1cclxuYFxyXG4iXSwibWFwcGluZ3MiOiJPQUFzQkEsR0FBRztBQUF6QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMifQ==