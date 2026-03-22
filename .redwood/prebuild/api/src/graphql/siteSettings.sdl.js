import gql from "graphql-tag";
export const schema = gql`
  type SiteSetting {
    id: Int!
    key: String!
    value: String!
    group: String!
    label: String!
    fieldType: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    siteSettings: [SiteSetting!]! @requireAuth
    siteSetting(id: Int!): SiteSetting @requireAuth
    siteSettingByKey(key: String!): SiteSetting @skipAuth
  }

  input CreateSiteSettingInput {
    key: String!
    value: String!
    group: String!
    label: String!
    fieldType: String!
  }

  input UpdateSiteSettingInput {
    id: Int
    key: String
    value: String
    group: String
    label: String
    fieldType: String
  }

  type Mutation {
    createSiteSetting(input: CreateSiteSettingInput!): SiteSetting!
      @requireAuth
    updateSiteSetting(id: Int!, input: UpdateSiteSettingInput!): SiteSetting!
      @requireAuth
    deleteSiteSetting(id: Int!): SiteSetting! @requireAuth
    bulkUpdateSiteSettings(input: [UpdateSiteSettingInput!]!): [SiteSetting!]!
      @requireAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvc2l0ZVNldHRpbmdzLnNkbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxyXG4gIHR5cGUgU2l0ZVNldHRpbmcge1xyXG4gICAgaWQ6IEludCFcclxuICAgIGtleTogU3RyaW5nIVxyXG4gICAgdmFsdWU6IFN0cmluZyFcclxuICAgIGdyb3VwOiBTdHJpbmchXHJcbiAgICBsYWJlbDogU3RyaW5nIVxyXG4gICAgZmllbGRUeXBlOiBTdHJpbmchXHJcbiAgICBjcmVhdGVkQXQ6IERhdGVUaW1lIVxyXG4gICAgdXBkYXRlZEF0OiBEYXRlVGltZSFcclxuICB9XHJcblxyXG4gIHR5cGUgUXVlcnkge1xyXG4gICAgc2l0ZVNldHRpbmdzOiBbU2l0ZVNldHRpbmchXSEgQHJlcXVpcmVBdXRoXHJcbiAgICBzaXRlU2V0dGluZyhpZDogSW50ISk6IFNpdGVTZXR0aW5nIEByZXF1aXJlQXV0aFxyXG4gICAgc2l0ZVNldHRpbmdCeUtleShrZXk6IFN0cmluZyEpOiBTaXRlU2V0dGluZyBAc2tpcEF1dGhcclxuICB9XHJcblxyXG4gIGlucHV0IENyZWF0ZVNpdGVTZXR0aW5nSW5wdXQge1xyXG4gICAga2V5OiBTdHJpbmchXHJcbiAgICB2YWx1ZTogU3RyaW5nIVxyXG4gICAgZ3JvdXA6IFN0cmluZyFcclxuICAgIGxhYmVsOiBTdHJpbmchXHJcbiAgICBmaWVsZFR5cGU6IFN0cmluZyFcclxuICB9XHJcblxyXG4gIGlucHV0IFVwZGF0ZVNpdGVTZXR0aW5nSW5wdXQge1xyXG4gICAgaWQ6IEludFxyXG4gICAga2V5OiBTdHJpbmdcclxuICAgIHZhbHVlOiBTdHJpbmdcclxuICAgIGdyb3VwOiBTdHJpbmdcclxuICAgIGxhYmVsOiBTdHJpbmdcclxuICAgIGZpZWxkVHlwZTogU3RyaW5nXHJcbiAgfVxyXG5cclxuICB0eXBlIE11dGF0aW9uIHtcclxuICAgIGNyZWF0ZVNpdGVTZXR0aW5nKGlucHV0OiBDcmVhdGVTaXRlU2V0dGluZ0lucHV0ISk6IFNpdGVTZXR0aW5nIVxyXG4gICAgICBAcmVxdWlyZUF1dGhcclxuICAgIHVwZGF0ZVNpdGVTZXR0aW5nKGlkOiBJbnQhLCBpbnB1dDogVXBkYXRlU2l0ZVNldHRpbmdJbnB1dCEpOiBTaXRlU2V0dGluZyFcclxuICAgICAgQHJlcXVpcmVBdXRoXHJcbiAgICBkZWxldGVTaXRlU2V0dGluZyhpZDogSW50ISk6IFNpdGVTZXR0aW5nISBAcmVxdWlyZUF1dGhcclxuICAgIGJ1bGtVcGRhdGVTaXRlU2V0dGluZ3MoaW5wdXQ6IFtVcGRhdGVTaXRlU2V0dGluZ0lucHV0IV0hKTogW1NpdGVTZXR0aW5nIV0hXHJcbiAgICAgIEByZXF1aXJlQXV0aFxyXG4gIH1cclxuYFxyXG4iXSwibWFwcGluZ3MiOiJPQUFzQkEsR0FBRztBQUF6QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMifQ==