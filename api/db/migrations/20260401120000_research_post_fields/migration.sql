-- AlterTable: Expansion AI Research Labs — Post editorial fields
-- Run after baselining or use `yarn rw prisma db push` in dev if migrations are not applied.

ALTER TABLE "Post" ADD COLUMN IF NOT EXISTS "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "Post" ADD COLUMN IF NOT EXISTS "slug" TEXT;
ALTER TABLE "Post" ADD COLUMN IF NOT EXISTS "excerpt" TEXT;
ALTER TABLE "Post" ADD COLUMN IF NOT EXISTS "published" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "Post" ADD COLUMN IF NOT EXISTS "publishedAt" TIMESTAMP(3);
ALTER TABLE "Post" ADD COLUMN IF NOT EXISTS "tags" TEXT[] DEFAULT ARRAY[]::TEXT[];
ALTER TABLE "Post" ADD COLUMN IF NOT EXISTS "seoTitle" TEXT;
ALTER TABLE "Post" ADD COLUMN IF NOT EXISTS "seoDescription" TEXT;
ALTER TABLE "Post" ADD COLUMN IF NOT EXISTS "authorName" TEXT;
ALTER TABLE "Post" ADD COLUMN IF NOT EXISTS "legacyNicolaPostId" INTEGER;
ALTER TABLE "Post" ADD COLUMN IF NOT EXISTS "featured" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "Post" ADD COLUMN IF NOT EXISTS "contentFormat" TEXT NOT NULL DEFAULT 'markdown';

UPDATE "Post"
SET
  "slug" = 'article-' || "id"::text,
  "published" = true,
  "publishedAt" = "createdAt",
  "contentFormat" = 'legacy_plain'
WHERE "slug" IS NULL;

ALTER TABLE "Post" ALTER COLUMN "slug" SET NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS "Post_slug_key" ON "Post"("slug");
CREATE UNIQUE INDEX IF NOT EXISTS "Post_legacyNicolaPostId_key" ON "Post"("legacyNicolaPostId");
CREATE INDEX IF NOT EXISTS "Post_published_publishedAt_idx" ON "Post"("published", "publishedAt" DESC);

-- Migrate NicolaPost rows into Post (idempotent: skip if legacy slug exists)
INSERT INTO "Post" (
  "title",
  "body",
  "createdAt",
  "updatedAt",
  "likeAmount",
  "Image",
  "slug",
  "excerpt",
  "published",
  "publishedAt",
  "tags",
  "seoTitle",
  "seoDescription",
  "authorName",
  "legacyNicolaPostId",
  "featured",
  "contentFormat"
)
SELECT
  np."title",
  np."body",
  np."createdAt",
  CURRENT_TIMESTAMP,
  np."likeAmount",
  np."Image",
  'nicola-legacy-' || np."id"::text,
  NULL,
  true,
  np."createdAt",
  ARRAY[]::TEXT[],
  NULL,
  NULL,
  NULL,
  np."id",
  false,
  'legacy_plain'
FROM "NicolaPost" np
WHERE NOT EXISTS (
  SELECT 1 FROM "Post" p WHERE p."legacyNicolaPostId" = np."id"
);
