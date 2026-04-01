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
var researchSlug_exports = {};
__export(researchSlug_exports, {
  assertValidSlug: () => assertValidSlug,
  slugifyTitle: () => slugifyTitle
});
module.exports = __toCommonJS(researchSlug_exports);
var import_set = __toESM(require("@babel/runtime-corejs3/core-js/set"));
var import_slice = __toESM(require("@babel/runtime-corejs3/core-js/instance/slice"));
var import_trim = __toESM(require("@babel/runtime-corejs3/core-js/instance/trim"));
var import_graphql_server = require("@redwoodjs/graphql-server");
const RESERVED_SLUGS = new import_set.default(["new", "edit", "admin", "api", "rss", "feed", "preview"]);
const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MAX_SLUG_LEN = 120;
const slugifyTitle = (raw) => {
  var _context, _context2;
  if (!raw || typeof raw !== "string") {
    return "article";
  }
  const s = (0, import_slice.default)(_context = (0, import_trim.default)(_context2 = raw.toLowerCase()).call(_context2).replace(/['']/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")).call(_context, 0, MAX_SLUG_LEN);
  return s || "article";
};
const assertValidSlug = (slug) => {
  if (!slug || typeof slug !== "string") {
    throw new import_graphql_server.UserInputError("Slug is required.");
  }
  const trimmed = (0, import_trim.default)(slug).call(slug).toLowerCase();
  if (trimmed.length > MAX_SLUG_LEN) {
    throw new import_graphql_server.UserInputError(`Slug must be at most ${MAX_SLUG_LEN} characters.`);
  }
  if (!SLUG_REGEX.test(trimmed)) {
    throw new import_graphql_server.UserInputError("Slug may only contain lowercase letters, numbers, and hyphens.");
  }
  if (RESERVED_SLUGS.has(trimmed)) {
    throw new import_graphql_server.UserInputError("This slug is reserved. Choose another.");
  }
  return trimmed;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assertValidSlug,
  slugifyTitle
});
//# sourceMappingURL=researchSlug.js.map
