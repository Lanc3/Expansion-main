import { motion } from 'framer-motion'

import { MetaTags } from '@redwoodjs/web'

import LegalPageBySlugCell from 'src/components/LegalPageBySlugCell/LegalPageBySlugCell'

const titleFromSlug = (slug) => {
  if (!slug) {
    return 'Legal'
  }
  return slug
    .split('-')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

const LegalPage = ({ slug }) => {
  const pageTitle = titleFromSlug(slug)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-[1400px] px-4 pb-24 pt-8 sm:px-6"
    >
      <MetaTags title={pageTitle} description={`${pageTitle} — Expansion`} />
      <LegalPageBySlugCell slug={slug} />
    </motion.div>
  )
}

export default LegalPage
