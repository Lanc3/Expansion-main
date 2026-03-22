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
var faqs_sdl_exports = {};
__export(faqs_sdl_exports, {
  schema: () => schema
});
module.exports = __toCommonJS(faqs_sdl_exports);
var import_graphql_tag = __toESM(require("graphql-tag"));
const schema = import_graphql_tag.default`
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  schema
});
//# sourceMappingURL=faqs.sdl.js.map
