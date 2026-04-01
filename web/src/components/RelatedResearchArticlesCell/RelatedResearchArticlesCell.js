import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query RelatedResearchArticles {
    researchArticles(take: 12, skip: 0) {
      id
      slug
      title
      publishedAt
      createdAt
      body
    }
  }
`

export const Loading = () => null
export const Empty = () => null
export const Failure = () => null

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.45, ease: 'easeOut' },
  }),
}

export const Success = ({ researchArticles, currentSlug }) => {
  const related = researchArticles
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 3)

  if (related.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {related.map((article, i) => (
        <motion.div
          key={article.id}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <Link
            to={routes.researchArticle({ slug: article.slug })}
            className="glass-panel group block rounded-xl p-5 transition-shadow hover:shadow-[0_0_20px_rgba(255,92,0,0.15)]"
          >
            <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-neon-primary transition-colors group-hover:text-neon-accent">
              {article.title}
            </h3>

            <p className="mb-3 line-clamp-2 text-sm text-gray-400">
              {article.body?.slice(0, 120)}
              {article.body?.length > 120 ? '…' : ''}
            </p>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <time dateTime={article.publishedAt || article.createdAt}>
                {new Date(
                  article.publishedAt || article.createdAt
                ).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
              <span className="flex items-center gap-1 text-neon-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read more <FiArrowRight className="text-sm" />
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
