import { motion } from 'framer-motion'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ActiveServicesCell from 'src/components/ActiveServicesCell/ActiveServicesCell'

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="mx-auto max-w-[1400px] px-4 pb-24 pt-8 sm:px-6 mt-20"
    >
      <MetaTags
        title="Services — What We Build | Expansion"
        description="Custom software, AI, games, web, and mobile — we ship production-grade systems on whatever stack fits your problem."
      />

      <motion.section
        className="mb-12 sm:mb-16"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeUp}
          className="gradient-text mb-4 text-fluid-4xl font-bold sm:mb-6 sm:text-fluid-5xl md:text-fluid-6xl"
        >
          What We Build
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="max-w-3xl text-fluid-base leading-relaxed text-gray-300 sm:text-fluid-lg"
        >
          We engineer end-to-end solutions on any stack — from web platforms and
          APIs to AI pipelines, games, and mobile. Pick a capability below to
          see how we approach it, or reach out and we&apos;ll map the right
          architecture to your goals.
        </motion.p>
      </motion.section>

      <section className="mb-16 sm:mb-20">
        <ActiveServicesCell />
      </section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="glass-panel flex flex-col gap-6 rounded-2xl p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10 md:p-12">
          <div className="relative z-[3]">
            <h2 className="mb-2 text-fluid-2xl font-bold text-white sm:text-fluid-3xl">
              Ready to start?
            </h2>
            <p className="max-w-xl text-fluid-sm text-gray-400 sm:text-fluid-base">
              Book a free consultation — tell us what you&apos;re building and
              we&apos;ll respond with a clear path forward.
            </p>
          </div>
          <div className="relative z-[3] shrink-0">
            <Link
              to={routes.contactus()}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-neon-primary px-6 py-3 font-mono text-sm text-neon-primary transition-colors hover:bg-neon-primary/10"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default ServicesPage
