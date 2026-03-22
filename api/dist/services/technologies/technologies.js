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
var technologies_exports = {};
__export(technologies_exports, {
  createTechnology: () => createTechnology,
  deleteTechnology: () => deleteTechnology,
  technologies: () => technologies,
  technology: () => technology,
  updateTechnology: () => updateTechnology
});
module.exports = __toCommonJS(technologies_exports);
var import_db = require("../../lib/db");
const technologies = () => {
  return import_db.db.technology.findMany({
    orderBy: {
      order: "asc"
    }
  });
};
const technology = ({
  id
}) => {
  return import_db.db.technology.findUnique({
    where: {
      id
    }
  });
};
const createTechnology = ({
  input
}) => {
  return import_db.db.technology.create({
    data: input
  });
};
const updateTechnology = ({
  id,
  input
}) => {
  return import_db.db.technology.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteTechnology = ({
  id
}) => {
  return import_db.db.technology.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createTechnology,
  deleteTechnology,
  technologies,
  technology,
  updateTechnology
});
//# sourceMappingURL=technologies.js.map
