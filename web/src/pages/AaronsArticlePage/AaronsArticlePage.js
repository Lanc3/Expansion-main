import { motion } from 'framer-motion'
import { MetaTags } from '@redwoodjs/web'

import ArticleSingleAaronCell from 'src/components/ArticleSingleAaronCell/ArticleSingleAaronCell'

const AaronsArticlePage = ({ id }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.1 }}
      className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-8 pb-24"
    >
      <MetaTags title="Article" description="Blog article" />
      <ArticleSingleAaronCell id={id} />
    </motion.div>
  )
}

export default AaronsArticlePage
