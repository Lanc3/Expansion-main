import { motion } from 'framer-motion'
import { MetaTags } from '@redwoodjs/web'

import ResearchArticlesCell from 'src/components/ResearchArticlesCell/ResearchArticlesCell'

const ResearchLabsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.1 }}
      className="mx-auto mt-20 max-w-[1400px] px-4 pb-24 pt-8 sm:px-6 lg:mt-24 lg:pt-12"
    >
      <MetaTags
        title="Expansion AI Research Labs"
        description="Articles on AI, LLMs, and business automation from Expansion."
        ogType="website"
      />
      <header className="mb-12 max-w-3xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-neon-primary">
          Expansion AI Research Labs
        </p>
        <h1 className="gradient-text mb-4 text-fluid-4xl font-bold tracking-tight sm:text-fluid-5xl">
          Research &amp; insights
        </h1>
        <p className="text-lg leading-relaxed text-gray-300">
          Practical notes on using AI and large language models as tools for
          business automation, product delivery, and operations.
        </p>
      </header>
      <ResearchArticlesCell />
    </motion.div>
  )
}

export default ResearchLabsPage
