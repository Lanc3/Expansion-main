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
var faqs_exports = {};
__export(faqs_exports, {
  createFaq: () => createFaq,
  deleteFaq: () => deleteFaq,
  faq: () => faq,
  faqs: () => faqs,
  updateFaq: () => updateFaq
});
module.exports = __toCommonJS(faqs_exports);
var import_db = require("../../lib/db");
const faqs = () => {
  return import_db.db.faq.findMany({
    orderBy: {
      order: "asc"
    }
  });
};
const faq = ({
  id
}) => {
  return import_db.db.faq.findUnique({
    where: {
      id
    }
  });
};
const createFaq = ({
  input
}) => {
  return import_db.db.faq.create({
    data: input
  });
};
const updateFaq = ({
  id,
  input
}) => {
  return import_db.db.faq.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteFaq = ({
  id
}) => {
  return import_db.db.faq.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createFaq,
  deleteFaq,
  faq,
  faqs,
  updateFaq
});
//# sourceMappingURL=faqs.js.map
