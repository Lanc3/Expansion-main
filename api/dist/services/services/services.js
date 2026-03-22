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
var services_exports = {};
__export(services_exports, {
  activeServices: () => activeServices,
  createService: () => createService,
  deleteService: () => deleteService,
  service: () => service,
  serviceBySlug: () => serviceBySlug,
  services: () => services,
  updateService: () => updateService
});
module.exports = __toCommonJS(services_exports);
var import_db = require("../../lib/db");
const services = () => {
  return import_db.db.service.findMany({
    orderBy: {
      order: "asc"
    }
  });
};
const service = ({
  id
}) => {
  return import_db.db.service.findUnique({
    where: {
      id
    }
  });
};
const serviceBySlug = ({
  slug
}) => {
  return import_db.db.service.findUnique({
    where: {
      slug
    }
  });
};
const activeServices = () => {
  return import_db.db.service.findMany({
    where: {
      isActive: true
    },
    orderBy: {
      order: "asc"
    }
  });
};
const createService = ({
  input
}) => {
  return import_db.db.service.create({
    data: input
  });
};
const updateService = ({
  id,
  input
}) => {
  return import_db.db.service.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteService = ({
  id
}) => {
  return import_db.db.service.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activeServices,
  createService,
  deleteService,
  service,
  serviceBySlug,
  services,
  updateService
});
//# sourceMappingURL=services.js.map
