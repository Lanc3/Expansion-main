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
var contactSubmissions_exports = {};
__export(contactSubmissions_exports, {
  contactSubmission: () => contactSubmission,
  contactSubmissions: () => contactSubmissions,
  createContactSubmission: () => createContactSubmission,
  deleteContactSubmission: () => deleteContactSubmission,
  updateContactSubmission: () => updateContactSubmission
});
module.exports = __toCommonJS(contactSubmissions_exports);
var import_api = require("@redwoodjs/api");
var import_db = require("../../lib/db");
var import_email = require("../../lib/email");
const contactSubmissions = () => {
  return import_db.db.contactSubmission.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });
};
const contactSubmission = ({
  id
}) => {
  return import_db.db.contactSubmission.findUnique({
    where: {
      id
    }
  });
};
const createContactSubmission = async ({
  input
}) => {
  (0, import_api.validate)(input.email, "Email", {
    format: {
      pattern: /@/,
      message: "Email must contain @"
    }
  });
  (0, import_api.validate)(input.name, "Name", {
    presence: true
  });
  (0, import_api.validate)(input.projectDescription, "Project description", {
    presence: true
  });
  const submission = await import_db.db.contactSubmission.create({
    data: input
  });
  try {
    await (0, import_email.sendAdminNotification)(input);
    await (0, import_email.sendAutoReply)(input);
  } catch (emailError) {
    console.error("[Email] Failed to send notification:", emailError);
  }
  return submission;
};
const updateContactSubmission = ({
  id,
  input
}) => {
  const data = {};
  if (input.status !== void 0) {
    data.status = input.status;
  }
  if (input.notes !== void 0) {
    data.notes = input.notes;
  }
  return import_db.db.contactSubmission.update({
    data,
    where: {
      id
    }
  });
};
const deleteContactSubmission = ({
  id
}) => {
  return import_db.db.contactSubmission.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  contactSubmission,
  contactSubmissions,
  createContactSubmission,
  deleteContactSubmission,
  updateContactSubmission
});
//# sourceMappingURL=contactSubmissions.js.map
