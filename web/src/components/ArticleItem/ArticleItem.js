import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiClock, FiTag, FiBookOpen } from 'react-icons/fi'

import ExpandingText from '../ExpandingText/ExpandingText'
import LikeButton from '../LikeButton'
import LinkPreview from '../LinkPreview/LinkPreview'

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000

const ArticleItem = ({ article, notAaron, index = 0 }) => {
  const [show, setShow] = useState(false)
  const toggleIcon = (value) => setShow(value)
  const isRecent = Date.now() - new Date(article.createdAt).getTime() < SEVEN_DAYS_MS

  function convertToReadableDate(dateString) {
    const date = new Date(dateString)
    if (isNaN(date)) return null
    return date.toLocaleString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    })
  }

  function getReadingTime(body) {
    if (!body) return 1
    const words = body.trim().split(/\s+/).length
    return Math.max(1, Math.ceil(words / 200))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ boxShadow: '0 0 20px rgba(255, 92, 0, 0.2)' }}
      className="mb-8 glass-panel p-6 sm:p-8 rounded-2xl border border-glass-border relative"
      style={{
        borderLeft: '3px solid transparent',
        borderImage: 'linear-gradient(to bottom, #FF5C00, #FF9500) 1',
        borderImageSlice: 1,
      }}
    >
      {isRecent && (
        <span
          className="absolute top-4 right-4 bg-neon-accent/20 text-neon-accent border border-neon-accent/40 rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase animate-pulse-badge"
          aria-label="Recently published"
        >
          NEW
        </span>
      )}
      <div className="w-full">
        <LinkPreview
          title={article.title}
          preview={
            article.body ? article.body.substring(0, 100) + '…' : ''
          }
          date={convertToReadableDate(article.createdAt)}
        >
          <p className="mb-4 text-2xl sm:text-3xl font-bold text-neon-primary cursor-default">
            {article.title}
          </p>
        </LinkPreview>

        <ExpandingText
          data={article}
          notAaron={notAaron}
          toggleCallback={toggleIcon}
        />

        <div className="flex flex-wrap gap-4 mt-6">
          <div className="flex items-center rounded-lg border border-neon-primary/30 px-3 py-2 min-h-[44px]">
            <FiClock className="text-lg text-neon-primary mr-2" />
            <span className="font-mono text-sm text-gray-300">
              {convertToReadableDate(article.createdAt)}
            </span>
          </div>
          <div className="flex items-center rounded-lg border border-neon-primary/30 px-3 py-2 min-h-[44px]">
            <FiBookOpen className="text-lg text-neon-primary mr-2" />
            <span className="font-mono text-sm text-gray-300">
              {getReadingTime(article.body)} min read
            </span>
          </div>
          <div className="flex items-center rounded-lg border border-neon-primary/30 px-3 py-2 min-h-[44px]">
            <FiTag className="text-lg text-neon-primary mr-2" />
            <span className="font-mono text-sm text-gray-300">Expansion.ie</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ArticleItem
