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
var teamMembers_exports = {};
__export(teamMembers_exports, {
  createTeamMember: () => createTeamMember,
  deleteTeamMember: () => deleteTeamMember,
  teamMember: () => teamMember,
  teamMembers: () => teamMembers,
  updateTeamMember: () => updateTeamMember
});
module.exports = __toCommonJS(teamMembers_exports);
var import_db = require("../../lib/db");
const teamMembers = () => {
  return import_db.db.teamMember.findMany({
    orderBy: {
      order: "asc"
    }
  });
};
const teamMember = ({
  id
}) => {
  return import_db.db.teamMember.findUnique({
    where: {
      id
    }
  });
};
const createTeamMember = ({
  input
}) => {
  return import_db.db.teamMember.create({
    data: input
  });
};
const updateTeamMember = ({
  id,
  input
}) => {
  return import_db.db.teamMember.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteTeamMember = ({
  id
}) => {
  return import_db.db.teamMember.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createTeamMember,
  deleteTeamMember,
  teamMember,
  teamMembers,
  updateTeamMember
});
//# sourceMappingURL=teamMembers.js.map
