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
var nicolaPosts_sdl_exports = {};
__export(nicolaPosts_sdl_exports, {
  schema: () => schema
});
module.exports = __toCommonJS(nicolaPosts_sdl_exports);
var import_graphql_tag = __toESM(require("graphql-tag"));
const schema = import_graphql_tag.default`
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  schema
});
//# sourceMappingURL=nicolaPosts.sdl.js.map
