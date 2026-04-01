import { useCallback, useEffect, useRef, useState } from 'react'

import { FiClock, FiTag, FiUser } from 'react-icons/fi'
import { Head, MetaTags } from '@redwoodjs/web'
import { routes } from '@redwoodjs/router'

import AnimatedBack from 'src/components/AnimatedBack/AnimatedBack'
import RelatedResearchArticlesCell from 'src/components/RelatedResearchArticlesCell/RelatedResearchArticlesCell'
import ResearchMarkdown from 'src/components/ResearchMarkdown/ResearchMarkdown'
import ShareButtons from 'src/components/ShareButtons/ShareButtons'
import { absoluteUrl, getSiteUrl } from 'src/lib/siteUrl'

const ReadingProgress = ({ contentRef }) => {
  const [progress, setProgress] = useState(0)

  const handleScroll = useCallback(() => {
    const el = contentRef.current
    if (!el) {
      return
    }
    const rect = el.getBoundingClientRect()
    const total = el.scrollHeight - window.innerHeight
    const scrolled = -rect.top
    setProgress(Math.min(1, Math.max(0, total > 0 ? scrolled / total : 0)))
  }, [contentRef])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div
      className="fixed top-0 left-0 z-[9998] h-[3px] transition-[width] duration-150 ease-out"
      style={{
        width: `${progress * 100}%`,
        background: 'linear-gradient(90deg, #FF5C00, #FF9500, #E63900)',
      }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      aria-label="Reading progress"
    />
  )
}

const readingMinutes = (body) => {
  if (!body) {
    return 1
  }
  const words = body.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

/**
 * @param {{ article: Record<string, unknown>, draftMode?: boolean }} props
 */
const ResearchArticleLayout = ({ article, draftMode = false }) => {
  const contentRef = useRef(null)
  const pageTitle =
    article.seoTitle || `${article.title} | Expansion AI Research Labs`
  const description =
    article.seoDescription ||
    article.excerpt ||
    (article.body ? String(article.body).slice(0, 160).trim() + '…' : '')
  const canonicalPath = `/research/${article.slug}`
  const canonical = absoluteUrl(canonicalPath)
  const ogImage = article.Image ? absoluteUrl(article.Image) : ''

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: description.replace(/…$/, ''),
    datePublished: article.publishedAt || article.createdAt,
    dateModified: article.updatedAt || article.createdAt,
    author: {
      '@type': 'Person',
      name: article.authorName || 'Expansion AI Research Labs',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Expansion',
      url: getSiteUrl(),
    },
    mainEntityOfPage: canonical,
    image: ogImage ? [ogImage] : undefined,
  }

  return (
    <div>
      <MetaTags
        title={pageTitle}
        description={description}
        ogContentUrl={ogImage || undefined}
        ogUrl={canonical}
        ogType="article"
        author={article.authorName || 'Expansion AI Research Labs'}
        robots={draftMode ? ['noindex', 'nofollow'] : undefined}
      />
      <Head>
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>

      <ReadingProgress contentRef={contentRef} />

      {draftMode && (
        <div className="fixed top-0 left-0 z-[9997] w-full border-b border-neon-accent/40 bg-neon-accent/20 py-2 text-center">
          <span className="font-mono text-sm text-neon-accent">
            DRAFT PREVIEW — Not published
            {!article.published ? '' : ' (article is published)'}
          </span>
        </div>
      )}

      <AnimatedBack route={routes.researchLabs()} />

      <article
        ref={contentRef}
        className="mx-auto max-w-3xl px-4 pb-24 pt-8 sm:px-6 lg:max-w-4xl"
      >
        {article.Image ? (
          <div className="mb-8 overflow-hidden rounded-2xl border border-glass-border bg-black/40">
            <img
              src={article.Image}
              alt=""
              className="max-h-[420px] w-full object-cover"
            />
          </div>
        ) : null}

        <header className="mb-8">
          {article.tags?.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neon-primary/30 bg-neon-primary/10 px-3 py-1 font-mono text-xs text-neon-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="mb-4 text-fluid-3xl font-bold tracking-tight text-white sm:text-fluid-4xl lg:text-fluid-5xl">
            {article.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2 font-mono">
              <FiClock className="text-neon-primary" />
              {new Date(
                article.publishedAt || article.createdAt
              ).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-2 font-mono">
              <FiTag className="text-neon-primary" />
              Expansion AI Research Labs
            </span>
            {article.authorName ? (
              <span className="flex items-center gap-2 font-mono">
                <FiUser className="text-neon-primary" />
                {article.authorName}
              </span>
            ) : null}
            <span className="font-mono text-gray-500">
              {readingMinutes(article.body)} min read
            </span>
          </div>
        </header>

        <ShareButtons title={article.title} url={canonical} />

        <div className="mt-10 rounded-2xl border border-glass-border glass-panel p-6 sm:p-10">
          <ResearchMarkdown
            content={article.body}
            contentFormat={article.contentFormat}
          />
        </div>
      </article>

      {!draftMode && (
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <h2 className="mb-6 text-xl font-bold text-neon-primary">
            More research
          </h2>
          <RelatedResearchArticlesCell currentSlug={article.slug} />
        </section>
      )}
    </div>
  )
}

export default ResearchArticleLayout
