import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query RecentPostsQuery {
    posts {
      id
      title
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

export const Success = ({ posts, currentId }) => {
  const related = posts.filter((p) => p.id !== currentId).slice(0, 3)

  if (related.length === 0) return null

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
            to={routes.aaronsArticle({ id: article.id })}
            className="glass-panel group block rounded-xl p-5 transition-shadow hover:shadow-[0_0_20px_rgba(255,92,0,0.15)]"
          >
            <h3 className="mb-2 text-lg font-semibold text-neon-primary line-clamp-2 group-hover:text-neon-accent transition-colors">
              {article.title}
            </h3>

            <p className="mb-3 text-sm text-gray-400 line-clamp-2">
              {article.body?.slice(0, 120)}
              {article.body?.length > 120 ? '…' : ''}
            </p>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <time>
                {new Date(article.createdAt).toLocaleDateString(undefined, {
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
