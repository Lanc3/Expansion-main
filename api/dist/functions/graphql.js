var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var graphql_exports = {};
__export(graphql_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(graphql_exports);
var import_auth_dbauth_api = require("@redwoodjs/auth-dbauth-api");
var import_graphql_server = require("@redwoodjs/graphql-server");
var directives_requireAuth_requireAuth = __toESM(require("../directives/requireAuth/requireAuth"));
var directives_skipAuth_skipAuth = __toESM(require("../directives/skipAuth/skipAuth"));
var sdls_clientLogos_sdl = __toESM(require("../graphql/clientLogos.sdl"));
var sdls_contactSubmissions_sdl = __toESM(require("../graphql/contactSubmissions.sdl"));
var sdls_faqs_sdl = __toESM(require("../graphql/faqs.sdl"));
var sdls_legalPages_sdl = __toESM(require("../graphql/legalPages.sdl"));
var sdls_newsletterSubscribers_sdl = __toESM(require("../graphql/newsletterSubscribers.sdl"));
var sdls_nicolaPosts_sdl = __toESM(require("../graphql/nicolaPosts.sdl"));
var sdls_posts_sdl = __toESM(require("../graphql/posts.sdl"));
var sdls_pricingTiers_sdl = __toESM(require("../graphql/pricingTiers.sdl"));
var sdls_processSteps_sdl = __toESM(require("../graphql/processSteps.sdl"));
var sdls_projectDatas_sdl = __toESM(require("../graphql/projectDatas.sdl"));
var sdls_services_sdl = __toESM(require("../graphql/services.sdl"));
var sdls_siteSettings_sdl = __toESM(require("../graphql/siteSettings.sdl"));
var sdls_teamMembers_sdl = __toESM(require("../graphql/teamMembers.sdl"));
var sdls_technologies_sdl = __toESM(require("../graphql/technologies.sdl"));
var sdls_testimonials_sdl = __toESM(require("../graphql/testimonials.sdl"));
var services_clientLogos_clientLogos = __toESM(require("../services/clientLogos/clientLogos"));
var services_contactSubmissions_contactSubmissions = __toESM(require("../services/contactSubmissions/contactSubmissions"));
var services_faqs_faqs = __toESM(require("../services/faqs/faqs"));
var services_legalPages_legalPages = __toESM(require("../services/legalPages/legalPages"));
var services_newsletterSubscribers_newsletterSubscribers = __toESM(require("../services/newsletterSubscribers/newsletterSubscribers"));
var services_nicolaPosts_nicolaPosts = __toESM(require("../services/nicolaPosts/nicolaPosts"));
var services_posts_posts = __toESM(require("../services/posts/posts"));
var services_pricingTiers_pricingTiers = __toESM(require("../services/pricingTiers/pricingTiers"));
var services_processSteps_processSteps = __toESM(require("../services/processSteps/processSteps"));
var services_projectDatas_projectDatas = __toESM(require("../services/projectDatas/projectDatas"));
var services_services_services = __toESM(require("../services/services/services"));
var services_siteSettings_siteSettings = __toESM(require("../services/siteSettings/siteSettings"));
var services_teamMembers_teamMembers = __toESM(require("../services/teamMembers/teamMembers"));
var services_technologies_technologies = __toESM(require("../services/technologies/technologies"));
var services_testimonials_testimonials = __toESM(require("../services/testimonials/testimonials"));
var import_auth = require("../lib/auth");
var import_db = require("../lib/db");
var import_logger = require("../lib/logger");
let directives = {};
directives.requireAuth_requireAuth = directives_requireAuth_requireAuth;
directives.skipAuth_skipAuth = directives_skipAuth_skipAuth;
let sdls = {};
sdls.clientLogos_sdl = sdls_clientLogos_sdl;
sdls.contactSubmissions_sdl = sdls_contactSubmissions_sdl;
sdls.faqs_sdl = sdls_faqs_sdl;
sdls.legalPages_sdl = sdls_legalPages_sdl;
sdls.newsletterSubscribers_sdl = sdls_newsletterSubscribers_sdl;
sdls.nicolaPosts_sdl = sdls_nicolaPosts_sdl;
sdls.posts_sdl = sdls_posts_sdl;
sdls.pricingTiers_sdl = sdls_pricingTiers_sdl;
sdls.processSteps_sdl = sdls_processSteps_sdl;
sdls.projectDatas_sdl = sdls_projectDatas_sdl;
sdls.services_sdl = sdls_services_sdl;
sdls.siteSettings_sdl = sdls_siteSettings_sdl;
sdls.teamMembers_sdl = sdls_teamMembers_sdl;
sdls.technologies_sdl = sdls_technologies_sdl;
sdls.testimonials_sdl = sdls_testimonials_sdl;
let services = {};
services.clientLogos_clientLogos = services_clientLogos_clientLogos;
services.contactSubmissions_contactSubmissions = services_contactSubmissions_contactSubmissions;
services.faqs_faqs = services_faqs_faqs;
services.legalPages_legalPages = services_legalPages_legalPages;
services.newsletterSubscribers_newsletterSubscribers = services_newsletterSubscribers_newsletterSubscribers;
services.nicolaPosts_nicolaPosts = services_nicolaPosts_nicolaPosts;
services.posts_posts = services_posts_posts;
services.pricingTiers_pricingTiers = services_pricingTiers_pricingTiers;
services.processSteps_processSteps = services_processSteps_processSteps;
services.projectDatas_projectDatas = services_projectDatas_projectDatas;
services.services_services = services_services_services;
services.siteSettings_siteSettings = services_siteSettings_siteSettings;
services.teamMembers_teamMembers = services_teamMembers_teamMembers;
services.technologies_technologies = services_technologies_technologies;
services.testimonials_testimonials = services_testimonials_testimonials;
const handler = (0, import_graphql_server.createGraphQLHandler)({
  authDecoder: import_auth_dbauth_api.authDecoder,
  getCurrentUser: import_auth.getCurrentUser,
  loggerConfig: {
    logger: import_logger.logger,
    options: {}
  },
  directives,
  sdls,
  services,
  onException: () => {
    import_db.db.$disconnect();
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=graphql.js.map
