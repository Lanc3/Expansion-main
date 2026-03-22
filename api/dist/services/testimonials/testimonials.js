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
var testimonials_exports = {};
__export(testimonials_exports, {
  createTestimonial: () => createTestimonial,
  deleteTestimonial: () => deleteTestimonial,
  testimonial: () => testimonial,
  testimonials: () => testimonials,
  updateTestimonial: () => updateTestimonial
});
module.exports = __toCommonJS(testimonials_exports);
var import_db = require("../../lib/db");
const testimonials = () => {
  return import_db.db.testimonial.findMany({
    orderBy: {
      order: "asc"
    }
  });
};
const testimonial = ({
  id
}) => {
  return import_db.db.testimonial.findUnique({
    where: {
      id
    }
  });
};
const createTestimonial = ({
  input
}) => {
  return import_db.db.testimonial.create({
    data: input
  });
};
const updateTestimonial = ({
  id,
  input
}) => {
  return import_db.db.testimonial.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteTestimonial = ({
  id
}) => {
  return import_db.db.testimonial.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createTestimonial,
  deleteTestimonial,
  testimonial,
  testimonials,
  updateTestimonial
});
//# sourceMappingURL=testimonials.js.map
