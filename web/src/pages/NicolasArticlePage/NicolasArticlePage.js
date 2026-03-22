import { MetaTags } from '@redwoodjs/web'

import ArticleSingleNicolaCell from 'src/components/ArticleSingleNicolaCell/ArticleSingleNicolaCell'

import { motion, useScroll } from 'framer-motion'

const NicolasArticlePage = ({ id }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.1,
      }}
      className="mx-2 flex flex-col justify-center"
    >
      <ArticleSingleNicolaCell id={id} />
    </motion.div>
  )
}

export default NicolasArticlePage
