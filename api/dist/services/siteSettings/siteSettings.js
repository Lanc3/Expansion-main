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
var siteSettings_exports = {};
__export(siteSettings_exports, {
  bulkUpdateSiteSettings: () => bulkUpdateSiteSettings,
  createSiteSetting: () => createSiteSetting,
  deleteSiteSetting: () => deleteSiteSetting,
  siteSetting: () => siteSetting,
  siteSettingByKey: () => siteSettingByKey,
  siteSettings: () => siteSettings,
  updateSiteSetting: () => updateSiteSetting
});
module.exports = __toCommonJS(siteSettings_exports);
var import_db = require("../../lib/db");
const siteSettings = () => {
  return import_db.db.siteSetting.findMany();
};
const siteSetting = ({
  id
}) => {
  return import_db.db.siteSetting.findUnique({
    where: {
      id
    }
  });
};
const siteSettingByKey = ({
  key
}) => import_db.db.siteSetting.findUnique({
  where: {
    key
  }
});
const bulkUpdateSiteSettings = async ({
  input
}) => {
  const results = [];
  for (const item of input) {
    const updated = await import_db.db.siteSetting.update({
      where: {
        id: item.id
      },
      data: {
        value: item.value
      }
    });
    results.push(updated);
  }
  return results;
};
const createSiteSetting = ({
  input
}) => {
  return import_db.db.siteSetting.create({
    data: input
  });
};
const updateSiteSetting = ({
  id,
  input
}) => {
  return import_db.db.siteSetting.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteSiteSetting = ({
  id
}) => {
  return import_db.db.siteSetting.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  bulkUpdateSiteSettings,
  createSiteSetting,
  deleteSiteSetting,
  siteSetting,
  siteSettingByKey,
  siteSettings,
  updateSiteSetting
});
//# sourceMappingURL=siteSettings.js.map
