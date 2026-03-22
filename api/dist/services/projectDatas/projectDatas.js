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
var projectDatas_exports = {};
__export(projectDatas_exports, {
  createProjectData: () => createProjectData,
  deleteProjectData: () => deleteProjectData,
  projectData: () => projectData,
  projectDatas: () => projectDatas,
  updateProjectData: () => updateProjectData
});
module.exports = __toCommonJS(projectDatas_exports);
var import_db = require("../../lib/db");
const projectDatas = () => {
  return import_db.db.projectData.findMany();
};
const projectData = ({
  id
}) => {
  return import_db.db.projectData.findUnique({
    where: {
      id
    }
  });
};
const createProjectData = ({
  input
}) => {
  return import_db.db.projectData.create({
    data: input
  });
};
const updateProjectData = ({
  id,
  input
}) => {
  return import_db.db.projectData.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteProjectData = ({
  id
}) => {
  return import_db.db.projectData.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createProjectData,
  deleteProjectData,
  projectData,
  projectDatas,
  updateProjectData
});
//# sourceMappingURL=projectDatas.js.map
