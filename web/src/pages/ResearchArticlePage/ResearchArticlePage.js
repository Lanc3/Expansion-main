import { useLocation } from '@redwoodjs/router'
import { motion } from 'framer-motion'

import { useAuth } from 'src/auth'
import ResearchArticleCell from 'src/components/ResearchArticleCell/ResearchArticleCell'
import ResearchArticleDraftCell from 'src/components/ResearchArticleDraftCell/ResearchArticleDraftCell'

const ResearchArticlePage = ({ slug }) => {
  const { hasRole } = useAuth()
  const { search } = useLocation()
  const isDraftPreview =
    hasRole('admin') && new URLSearchParams(search).get('draft') === '1'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.4 }}
      className="mt-16 sm:mt-20"
    >
      {isDraftPreview ? (
        <ResearchArticleDraftCell slug={slug} />
      ) : (
        <ResearchArticleCell slug={slug} />
      )}
    </motion.div>
  )
}

export default ResearchArticlePage
