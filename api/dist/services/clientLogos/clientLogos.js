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
var clientLogos_exports = {};
__export(clientLogos_exports, {
  clientLogo: () => clientLogo,
  clientLogos: () => clientLogos,
  createClientLogo: () => createClientLogo,
  deleteClientLogo: () => deleteClientLogo,
  updateClientLogo: () => updateClientLogo
});
module.exports = __toCommonJS(clientLogos_exports);
var import_db = require("../../lib/db");
const clientLogos = () => {
  return import_db.db.clientLogo.findMany({
    orderBy: {
      order: "asc"
    }
  });
};
const clientLogo = ({
  id
}) => {
  return import_db.db.clientLogo.findUnique({
    where: {
      id
    }
  });
};
const createClientLogo = ({
  input
}) => {
  return import_db.db.clientLogo.create({
    data: input
  });
};
const updateClientLogo = ({
  id,
  input
}) => {
  return import_db.db.clientLogo.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteClientLogo = ({
  id
}) => {
  return import_db.db.clientLogo.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  clientLogo,
  clientLogos,
  createClientLogo,
  deleteClientLogo,
  updateClientLogo
});
//# sourceMappingURL=clientLogos.js.map
