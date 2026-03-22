var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var nicolaPosts_exports = {};
__export(nicolaPosts_exports, {
  createNicolaPost: () => createNicolaPost,
  deleteNicolaPost: () => deleteNicolaPost,
  nicolaPost: () => nicolaPost,
  nicolaPosts: () => nicolaPosts,
  updateNicolaPost: () => updateNicolaPost
});
module.exports = __toCommonJS(nicolaPosts_exports);
var import_db = require("../../lib/db");
const nicolaPosts = () => {
  return import_db.db.nicolaPost.findMany();
};
const nicolaPost = ({
  id
}) => {
  return import_db.db.nicolaPost.findUnique({
    where: {
      id
    }
  });
};
const createNicolaPost = ({
  input
}) => {
  return import_db.db.nicolaPost.create({
    data: input
  });
};
const updateNicolaPost = ({
  id,
  input
}) => {
  return import_db.db.nicolaPost.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteNicolaPost = ({
  id
}) => {
  return import_db.db.nicolaPost.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createNicolaPost,
  deleteNicolaPost,
  nicolaPost,
  nicolaPosts,
  updateNicolaPost
});
//# sourceMappingURL=nicolaPosts.js.map
