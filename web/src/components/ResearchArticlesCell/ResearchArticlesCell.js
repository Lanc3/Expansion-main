import { motion } from 'framer-motion'
import { Link, routes } from '@redwoodjs/router'
import { FiBookOpen, FiClock } from 'react-icons/fi'

import { ArticleListSkeleton } from 'src/components/SkeletonLoader/SkeletonLoader'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query ResearchArticlesPublic {
    researchArticles(take: 48, skip: 0) {
      id
      slug
      title
      excerpt
      body
      tags
      publishedAt
      createdAt
      Image
      authorName
      featured
    }
  }
`

export const Loading = () => <ArticleListSkeleton />

export const Empty = () => (
  <EmptyState title="No research articles yet" description="Check back soon." />
)

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

const readingMinutes = (body) => {
  if (!body) {
    return 1
  }
  const words = body.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

const formatDate = (d) => {
  if (!d) {
    return ''
  }
  return new Date(d).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const Success = ({ researchArticles }) => {
  const sorted = [...researchArticles].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  )
  const featured = sorted.find((a) => a.featured)
  const rest = sorted.filter((a) => a.id !== featured?.id)

  return (
    <div className="space-y-12">
      {featured && (
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-2xl border border-glass-border glass-panel"
        >
          {featured.Image && (
            <div className="aspect-[21/9] max-h-[320px] w-full overflow-hidden bg-black/40">
              <img
                src={featured.Image}
                alt=""
                className="h-full w-full object-cover opacity-90"
              />
            </div>
          )}
          <div className="p-6 sm:p-10">
            <span className="mb-3 inline-block rounded-full border border-neon-primary/40 bg-neon-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-neon-primary">
              Featured
            </span>
            <h2 className="mb-4 text-fluid-3xl font-bold tracking-tight text-white sm:text-fluid-4xl">
              <Link
                to={routes.researchArticle({ slug: featured.slug })}
                className="transition-colors hover:text-neon-primary"
              >
                {featured.title}
              </Link>
            </h2>
            <p className="mb-6 max-w-3xl text-gray-300">
              {featured.excerpt ||
                (featured.body
                  ? `${featured.body.slice(0, 220).trim()}…`
                  : '')}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2 font-mono">
                <FiClock className="text-neon-primary" />
                {formatDate(featured.publishedAt || featured.createdAt)}
              </span>
              <span className="flex items-center gap-2 font-mono">
                <FiBookOpen className="text-neon-primary" />
                {readingMinutes(featured.body)} min read
              </span>
            </div>
            <Link
              to={routes.researchArticle({ slug: featured.slug })}
              className="mt-8 inline-flex min-h-[44px] items-center rounded-full border border-neon-primary px-6 py-2 font-mono text-sm font-bold text-neon-primary transition-colors hover:bg-neon-primary/10"
            >
              Read article
            </Link>
          </div>
        </motion.section>
      )}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {rest.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.05 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-glass-border glass-panel"
          >
            {article.Image ? (
              <Link
                to={routes.researchArticle({ slug: article.slug })}
                className="aspect-video w-full overflow-hidden bg-black/30"
              >
                <img
                  src={article.Image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </Link>
            ) : null}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              {article.tags?.length > 0 && (
                <div className="mb-3 flex flex-wrap gap-2">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-neon-primary">
                <Link to={routes.researchArticle({ slug: article.slug })}>
                  {article.title}
                </Link>
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400 line-clamp-3">
                {article.excerpt ||
                  (article.body
                    ? `${article.body.slice(0, 140).trim()}…`
                    : '')}
              </p>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-4 font-mono text-xs text-gray-500">
                <span>{formatDate(article.publishedAt || article.createdAt)}</span>
                <span>{readingMinutes(article.body)} min</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
