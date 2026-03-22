import { motion } from 'framer-motion'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PricingTiersCell from 'src/components/PricingTiersCell/PricingTiersCell'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: 'easeOut' },
  }),
}

const PricingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="mx-auto max-w-[1400px] px-4 pb-24 pt-8 sm:px-6"
    >
      <MetaTags
        title="Pricing"
        description="Transparent pricing tiers for Expansion software, AI, and game development services. Need something custom? Let's talk."
      />

      <motion.h1
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="gradient-text mb-4 text-fluid-3xl font-bold tracking-tight sm:text-fluid-4xl"
      >
        Transparent Pricing
      </motion.h1>
      <motion.p
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mb-12 max-w-2xl text-base text-gray-400 sm:text-lg"
      >
        Choose a starting point that fits your scope. Every engagement is scoped
        to outcomes — these tiers keep expectations clear from day one.
      </motion.p>

      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <PricingTiersCell />
      </motion.div>

      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="glass-panel mt-16 rounded-2xl px-6 py-8 sm:px-10 sm:py-10"
      >
        <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl">
          Need something custom?
        </h2>
        <p className="mb-6 max-w-xl text-sm text-gray-400 sm:text-base">
          Retainers, dedicated teams, and complex product builds rarely fit a
          single box. Share your goals and constraints — we&apos;ll propose a
          plan that matches.
        </p>
        <Link
          to={routes.contactus()}
          className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-neon-primary px-8 py-3 font-mono font-bold text-neon-primary transition-colors hover:bg-neon-primary/10"
        >
          Start a conversation
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default PricingPage
