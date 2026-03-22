import { motion } from 'framer-motion'

import { MetaTags } from '@redwoodjs/web'

import ServiceBySlugCell from 'src/components/ServiceBySlugCell/ServiceBySlugCell'

const ServiceDetailPage = ({ slug }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="mx-auto max-w-[1400px] px-4 pb-24 pt-8 sm:px-6 mt-20"
    >
      <MetaTags
        title="Service | Expansion"
        description="Explore Expansion services — custom software engineering tailored to your stack and constraints."
      />

      <ServiceBySlugCell slug={slug} />
    </motion.div>
  )
}

export default ServiceDetailPage
