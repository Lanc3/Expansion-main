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
var newsletterSubscribers_exports = {};
__export(newsletterSubscribers_exports, {
  createNewsletterSubscriber: () => createNewsletterSubscriber,
  deleteNewsletterSubscriber: () => deleteNewsletterSubscriber,
  newsletterSubscriber: () => newsletterSubscriber,
  newsletterSubscribers: () => newsletterSubscribers,
  updateNewsletterSubscriber: () => updateNewsletterSubscriber
});
module.exports = __toCommonJS(newsletterSubscribers_exports);
var import_db = require("../../lib/db");
const newsletterSubscribers = () => {
  return import_db.db.newsletterSubscriber.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });
};
const newsletterSubscriber = ({
  id
}) => {
  return import_db.db.newsletterSubscriber.findUnique({
    where: {
      id
    }
  });
};
const createNewsletterSubscriber = async ({
  input
}) => {
  const existing = await import_db.db.newsletterSubscriber.findUnique({
    where: {
      email: input.email
    }
  });
  if (existing) {
    return existing;
  }
  return import_db.db.newsletterSubscriber.create({
    data: input
  });
};
const updateNewsletterSubscriber = ({
  id,
  input
}) => {
  return import_db.db.newsletterSubscriber.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteNewsletterSubscriber = ({
  id
}) => {
  return import_db.db.newsletterSubscriber.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createNewsletterSubscriber,
  deleteNewsletterSubscriber,
  newsletterSubscriber,
  newsletterSubscribers,
  updateNewsletterSubscriber
});
//# sourceMappingURL=newsletterSubscribers.js.map
