var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var projectDatas_sdl_exports = {};
__export(projectDatas_sdl_exports, {
  schema: () => schema
});
module.exports = __toCommonJS(projectDatas_sdl_exports);
var import_graphql_tag = __toESM(require("graphql-tag"));
const schema = import_graphql_tag.default`
  type ProjectData {
    id: Int!
    title: String!
    category: String!
    createdAt: DateTime!
    image: String!
    video: String!
    clientName: String!
    clientWebsite: String!
    objective: String!
    tools: String!
    body: String!
    by: String!
    challenge: String
    solution: String
    results: String
    metrics: String
    featured: Boolean!
    updatedAt: DateTime!
  }

  type Query {
    projectDatas: [ProjectData!]! @skipAuth
    projectData(id: Int!): ProjectData @requireAuth
  }

  input CreateProjectDataInput {
    title: String!
    category: String!
    image: String!
    video: String!
    clientName: String!
    clientWebsite: String!
    objective: String!
    tools: String!
    body: String!
    by: String!
    challenge: String
    solution: String
    results: String
    metrics: String
    featured: Boolean
  }

  input UpdateProjectDataInput {
    title: String
    category: String
    image: String
    video: String
    clientName: String
    clientWebsite: String
    objective: String
    tools: String
    body: String
    by: String
    challenge: String
    solution: String
    results: String
    metrics: String
    featured: Boolean
  }

  type Mutation {
    createProjectData(input: CreateProjectDataInput!): ProjectData! @requireAuth
    updateProjectData(id: Int!, input: UpdateProjectDataInput!): ProjectData!
      @requireAuth
    deleteProjectData(id: Int!): ProjectData! @requireAuth
  }
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  schema
});
//# sourceMappingURL=projectDatas.sdl.js.map
