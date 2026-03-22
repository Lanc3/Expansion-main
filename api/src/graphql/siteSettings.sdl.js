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
`
