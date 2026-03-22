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
var processSteps_exports = {};
__export(processSteps_exports, {
  createProcessStep: () => createProcessStep,
  deleteProcessStep: () => deleteProcessStep,
  processStep: () => processStep,
  processSteps: () => processSteps,
  updateProcessStep: () => updateProcessStep
});
module.exports = __toCommonJS(processSteps_exports);
var import_db = require("../../lib/db");
const processSteps = () => {
  return import_db.db.processStep.findMany({
    orderBy: {
      order: "asc"
    }
  });
};
const processStep = ({
  id
}) => {
  return import_db.db.processStep.findUnique({
    where: {
      id
    }
  });
};
const createProcessStep = ({
  input
}) => {
  return import_db.db.processStep.create({
    data: input
  });
};
const updateProcessStep = ({
  id,
  input
}) => {
  return import_db.db.processStep.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteProcessStep = ({
  id
}) => {
  return import_db.db.processStep.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createProcessStep,
  deleteProcessStep,
  processStep,
  processSteps,
  updateProcessStep
});
//# sourceMappingURL=processSteps.js.map
