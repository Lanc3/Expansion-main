import { motion } from 'framer-motion'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import FaqsCell from 'src/components/FaqsCell/FaqsCell'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: 'easeOut' },
  }),
}

const FaqPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="mx-auto max-w-[1400px] px-4 pb-24 pt-8 sm:px-6"
    >
      <MetaTags
        title="FAQ"
        description="Frequently asked questions about Expansion — services, process, pricing, and how we work with clients."
      />

      <motion.h1
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="gradient-text mb-4 text-fluid-3xl font-bold tracking-tight sm:text-fluid-4xl"
      >
        Frequently Asked Questions
      </motion.h1>
      <motion.p
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mb-10 max-w-2xl text-base text-gray-400 sm:text-lg"
      >
        Straight answers about how we build software, what to expect, and how to
        get started.
      </motion.p>

      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <FaqsCell />
      </motion.div>

      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="glass-panel mt-16 rounded-2xl px-6 py-8 text-center sm:px-10 sm:py-10"
      >
        <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl">
          Still have questions?
        </h2>
        <p className="mx-auto mb-6 max-w-md text-sm text-gray-400 sm:text-base">
          Tell us about your project — we&apos;ll get back with clear next
          steps.
        </p>
        <Link
          to={routes.contactus()}
          className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-neon-primary px-8 py-3 font-mono font-bold text-neon-primary transition-colors hover:bg-neon-primary/10"
        >
          Contact us
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default FaqPage
