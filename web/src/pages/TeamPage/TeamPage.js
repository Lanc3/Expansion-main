import { motion } from 'framer-motion'

import { MetaTags } from '@redwoodjs/web'

import TeamMembersCell from 'src/components/TeamMembersCell/TeamMembersCell'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: 'easeOut' },
  }),
}

const TeamPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="mx-auto max-w-[1400px] px-4 pb-24 pt-8 sm:px-6"
    >
      <MetaTags
        title="Team"
        description="Meet the Expansion team — engineers and makers behind custom software, AI systems, and games."
      />

      <motion.h1
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="gradient-text mb-4 text-fluid-3xl font-bold tracking-tight sm:text-fluid-4xl"
      >
        Meet the Team
      </motion.h1>
      <motion.p
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mb-12 max-w-2xl text-base text-gray-400 sm:text-lg"
      >
        The people planning, building, and supporting what we ship —
        approachable, technical, and focused on outcomes.
      </motion.p>

      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <TeamMembersCell />
      </motion.div>
    </motion.div>
  )
}

export default TeamPage
