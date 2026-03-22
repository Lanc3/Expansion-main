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
var pricingTiers_exports = {};
__export(pricingTiers_exports, {
  createPricingTier: () => createPricingTier,
  deletePricingTier: () => deletePricingTier,
  pricingTier: () => pricingTier,
  pricingTiers: () => pricingTiers,
  updatePricingTier: () => updatePricingTier
});
module.exports = __toCommonJS(pricingTiers_exports);
var import_db = require("../../lib/db");
const pricingTiers = () => {
  return import_db.db.pricingTier.findMany({
    orderBy: {
      order: "asc"
    }
  });
};
const pricingTier = ({
  id
}) => {
  return import_db.db.pricingTier.findUnique({
    where: {
      id
    }
  });
};
const createPricingTier = ({
  input
}) => {
  return import_db.db.pricingTier.create({
    data: input
  });
};
const updatePricingTier = ({
  id,
  input
}) => {
  return import_db.db.pricingTier.update({
    data: input,
    where: {
      id
    }
  });
};
const deletePricingTier = ({
  id
}) => {
  return import_db.db.pricingTier.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createPricingTier,
  deletePricingTier,
  pricingTier,
  pricingTiers,
  updatePricingTier
});
//# sourceMappingURL=pricingTiers.js.map
