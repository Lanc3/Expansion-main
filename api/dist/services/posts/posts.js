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
var posts_exports = {};
__export(posts_exports, {
  createPost: () => createPost,
  deletePost: () => deletePost,
  post: () => post,
  posts: () => posts,
  updatePost: () => updatePost
});
module.exports = __toCommonJS(posts_exports);
var import_is_array = __toESM(require("@babel/runtime-corejs3/core-js/array/is-array"));
var import_set = __toESM(require("@babel/runtime-corejs3/core-js/set"));
var import_filter = __toESM(require("@babel/runtime-corejs3/core-js/instance/filter"));
var import_map = __toESM(require("@babel/runtime-corejs3/core-js/instance/map"));
var import_trim = __toESM(require("@babel/runtime-corejs3/core-js/instance/trim"));
var import_graphql_server = require("@redwoodjs/graphql-server");
var import_db = require("../../lib/db");
var import_auth = require("../../lib/auth");
var import_researchSlug = require("../../lib/researchSlug");
const nextUniqueSlug = async (base, excludeId) => {
  let candidate = base;
  let counter = 0;
  while (true) {
    const found = await import_db.db.post.findFirst({
      where: excludeId ? {
        slug: candidate,
        NOT: {
          id: excludeId
        }
      } : {
        slug: candidate
      },
      select: {
        id: true
      }
    });
    if (!found) {
      return candidate;
    }
    counter += 1;
    candidate = `${base}-${counter}`;
  }
};
const normalizeTags = (tags) => {
  var _context;
  if (!tags || !(0, import_is_array.default)(tags)) {
    return [];
  }
  return [...new import_set.default((0, import_filter.default)(_context = (0, import_map.default)(tags).call(tags, (t) => {
    var _context2;
    return (0, import_trim.default)(_context2 = String(t)).call(_context2);
  })).call(_context, Boolean))];
};
const posts = () => {
  (0, import_auth.requireAuth)({
    roles: "admin"
  });
  return import_db.db.post.findMany({
    orderBy: [{
      updatedAt: "desc"
    }, {
      id: "desc"
    }]
  });
};
const post = ({
  id
}) => {
  (0, import_auth.requireAuth)({
    roles: "admin"
  });
  return import_db.db.post.findUnique({
    where: {
      id
    }
  });
};
const createPost = async ({
  input
}) => {
  (0, import_auth.requireAuth)({
    roles: "admin"
  });
  let base = input.slug?.trim().toLowerCase() || (0, import_researchSlug.slugifyTitle)(input.title || "article");
  base = (0, import_researchSlug.assertValidSlug)(base);
  const slug = await nextUniqueSlug(base);
  const published = input.published ?? false;
  const publishedAt = published ? input.publishedAt ? new Date(input.publishedAt) : /* @__PURE__ */ new Date() : null;
  if (input.featured) {
    await import_db.db.post.updateMany({
      data: {
        featured: false
      },
      where: {
        featured: true
      }
    });
  }
  return import_db.db.post.create({
    data: {
      title: input.title,
      body: input.body,
      likeAmount: input.likeAmount ?? 0,
      Image: input.Image ?? null,
      slug,
      excerpt: input.excerpt ?? null,
      published,
      publishedAt,
      tags: normalizeTags(input.tags),
      seoTitle: input.seoTitle ?? null,
      seoDescription: input.seoDescription ?? null,
      authorName: input.authorName ?? null,
      featured: input.featured ?? false,
      contentFormat: input.contentFormat || "markdown"
    }
  });
};
const updatePost = async ({
  id,
  input
}) => {
  (0, import_auth.requireAuth)({
    roles: "admin"
  });
  const existing = await import_db.db.post.findUnique({
    where: {
      id
    }
  });
  if (!existing) {
    throw new import_graphql_server.UserInputError("Post not found.");
  }
  const data = {};
  if (input.title !== void 0) {
    data.title = input.title;
  }
  if (input.body !== void 0) {
    data.body = input.body;
  }
  if (input.likeAmount !== void 0) {
    data.likeAmount = input.likeAmount;
  }
  if (input.Image !== void 0) {
    data.Image = input.Image;
  }
  if (input.excerpt !== void 0) {
    data.excerpt = input.excerpt;
  }
  if (input.tags !== void 0) {
    data.tags = normalizeTags(input.tags);
  }
  if (input.seoTitle !== void 0) {
    data.seoTitle = input.seoTitle;
  }
  if (input.seoDescription !== void 0) {
    data.seoDescription = input.seoDescription;
  }
  if (input.authorName !== void 0) {
    data.authorName = input.authorName;
  }
  if (input.featured !== void 0) {
    data.featured = input.featured;
    if (input.featured) {
      await import_db.db.post.updateMany({
        data: {
          featured: false
        },
        where: {
          featured: true,
          NOT: {
            id
          }
        }
      });
    }
  }
  if (input.contentFormat !== void 0) {
    data.contentFormat = input.contentFormat;
  }
  if (input.slug !== void 0 && input.slug !== null) {
    const normalized = (0, import_researchSlug.assertValidSlug)(input.slug);
    if (normalized !== existing.slug) {
      data.slug = await nextUniqueSlug(normalized, id);
    }
  }
  if (input.published !== void 0) {
    data.published = input.published;
    if (!input.published) {
      data.publishedAt = null;
    } else if (input.publishedAt !== void 0 && input.publishedAt !== null) {
      data.publishedAt = new Date(input.publishedAt);
    } else if (!existing.publishedAt) {
      data.publishedAt = /* @__PURE__ */ new Date();
    }
  } else if (input.publishedAt !== void 0 && existing.published) {
    data.publishedAt = input.publishedAt ? new Date(input.publishedAt) : null;
  }
  return import_db.db.post.update({
    data,
    where: {
      id
    }
  });
};
const deletePost = ({
  id
}) => {
  (0, import_auth.requireAuth)({
    roles: "admin"
  });
  return import_db.db.post.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createPost,
  deletePost,
  post,
  posts,
  updatePost
});
//# sourceMappingURL=posts.js.map
