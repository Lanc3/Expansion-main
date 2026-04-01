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
var researchArticles_exports = {};
__export(researchArticles_exports, {
  publishedNicolaLegacySlug: () => publishedNicolaLegacySlug,
  publishedPostSlugById: () => publishedPostSlugById,
  researchArticle: () => researchArticle,
  researchArticleDraft: () => researchArticleDraft,
  researchArticles: () => researchArticles
});
module.exports = __toCommonJS(researchArticles_exports);
var import_db = require("../../lib/db");
var import_auth = require("../../lib/auth");
const MAX_TAKE = 100;
const researchArticles = ({
  take,
  skip
}) => {
  const t = Math.min(Math.max(take ?? 24, 1), MAX_TAKE);
  const s = Math.max(skip ?? 0, 0);
  return import_db.db.post.findMany({
    where: {
      published: true
    },
    orderBy: [{
      publishedAt: "desc"
    }, {
      createdAt: "desc"
    }],
    take: t,
    skip: s
  });
};
const researchArticle = ({
  slug
}) => {
  const normalized = slug?.trim().toLowerCase();
  if (!normalized) {
    return null;
  }
  return import_db.db.post.findFirst({
    where: {
      slug: normalized,
      published: true
    }
  });
};
const publishedPostSlugById = async ({
  id
}) => {
  const row = await import_db.db.post.findFirst({
    where: {
      id,
      published: true
    },
    select: {
      slug: true
    }
  });
  return row?.slug ?? null;
};
const publishedNicolaLegacySlug = async ({
  legacyId
}) => {
  const row = await import_db.db.post.findFirst({
    where: {
      legacyNicolaPostId: legacyId,
      published: true
    },
    select: {
      slug: true
    }
  });
  return row?.slug ?? null;
};
const researchArticleDraft = ({
  slug
}) => {
  (0, import_auth.requireAuth)({
    roles: "admin"
  });
  const normalized = slug?.trim().toLowerCase();
  if (!normalized) {
    return null;
  }
  return import_db.db.post.findFirst({
    where: {
      slug: normalized
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  publishedNicolaLegacySlug,
  publishedPostSlugById,
  researchArticle,
  researchArticleDraft,
  researchArticles
});
//# sourceMappingURL=researchArticles.js.map
