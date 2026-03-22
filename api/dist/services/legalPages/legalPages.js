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
var legalPages_exports = {};
__export(legalPages_exports, {
  createLegalPage: () => createLegalPage,
  deleteLegalPage: () => deleteLegalPage,
  legalPage: () => legalPage,
  legalPageBySlug: () => legalPageBySlug,
  legalPages: () => legalPages,
  updateLegalPage: () => updateLegalPage
});
module.exports = __toCommonJS(legalPages_exports);
var import_db = require("../../lib/db");
const legalPages = () => {
  return import_db.db.legalPage.findMany();
};
const legalPage = ({
  id
}) => {
  return import_db.db.legalPage.findUnique({
    where: {
      id
    }
  });
};
const legalPageBySlug = ({
  slug
}) => import_db.db.legalPage.findUnique({
  where: {
    slug
  }
});
const createLegalPage = ({
  input
}) => {
  return import_db.db.legalPage.create({
    data: input
  });
};
const updateLegalPage = ({
  id,
  input
}) => {
  return import_db.db.legalPage.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteLegalPage = ({
  id
}) => {
  return import_db.db.legalPage.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createLegalPage,
  deleteLegalPage,
  legalPage,
  legalPageBySlug,
  legalPages,
  updateLegalPage
});
//# sourceMappingURL=legalPages.js.map
