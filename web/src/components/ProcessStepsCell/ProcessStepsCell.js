import { motion } from 'framer-motion'
import {
  FiActivity,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiCircle,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiGlobe,
  FiLayers,
  FiMessageCircle,
  FiPenTool,
  FiSearch,
  FiSend,
  FiSettings,
  FiTarget,
  FiTerminal,
  FiTool,
  FiUsers,
  FiZap,
} from 'react-icons/fi'

import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query ProcessStepsPublicQuery {
    processSteps {
      id
      title
      description
      icon
      order
      isActive
    }
  }
`

const ICON_MAP = {
  activity: FiActivity,
  award: FiAward,
  bookopen: FiBookOpen,
  book: FiBookOpen,
  briefcase: FiBriefcase,
  checkcircle: FiCheckCircle,
  check: FiCheckCircle,
  code: FiCode,
  cpu: FiCpu,
  database: FiDatabase,
  gitbranch: FiGitBranch,
  git: FiGitBranch,
  globe: FiGlobe,
  layers: FiLayers,
  messagecircle: FiMessageCircle,
  message: FiMessageCircle,
  pentool: FiPenTool,
  design: FiPenTool,
  search: FiSearch,
  send: FiSend,
  settings: FiSettings,
  target: FiTarget,
  terminal: FiTerminal,
  tool: FiTool,
  users: FiUsers,
  team: FiUsers,
  zap: FiZap,
  lightning: FiZap,
}

function iconFor(raw) {
  const key = String(raw || '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
  return ICON_MAP[key] || FiCircle
}

const listContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

const listItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export const Loading = () => (
  <div className="space-y-6">
    {[0, 1, 2, 3].map((i) => (
      <div
        key={i}
        className="glass-panel h-28 animate-pulse rounded-2xl bg-white/[0.03] p-6"
      />
    ))}
  </div>
)

export const Empty = () => (
  <EmptyState
    title="No process steps"
    description="Our workflow will be outlined here soon."
  />
)

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Success = ({ processSteps }) => {
  const steps = (processSteps || [])
    .filter((s) => s.isActive)
    .sort((a, b) => a.order - b.order)

  if (steps.length === 0) {
    return (
      <EmptyState
        title="No process steps"
        description="Our workflow will be outlined here soon."
      />
    )
  }

  return (
    <motion.div
      className="relative mx-auto max-w-3xl"
      variants={listContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {steps.map((step, idx) => {
        const StepIcon = iconFor(step.icon)
        const n = idx + 1
        const isLast = idx === steps.length - 1

        return (
          <motion.div
            key={step.id}
            variants={listItem}
            className="flex gap-4 sm:gap-6"
          >
            <div className="flex w-12 shrink-0 flex-col items-center sm:w-14">
              <div className="z-[1] flex h-12 w-12 items-center justify-center rounded-full border-2 border-neon-primary/80 bg-black/40 font-mono text-sm font-bold text-neon-primary shadow-[0_0_20px_rgba(255,92,0,0.2)] sm:h-14 sm:w-14 sm:text-base">
                {n}
              </div>
              {!isLast && (
                <div
                  className="my-1 min-h-[32px] w-px flex-1 bg-gradient-to-b from-neon-primary/50 to-neon-primary/10"
                  aria-hidden
                />
              )}
            </div>

            <div className="glass-panel relative z-0 mb-6 flex-1 rounded-2xl p-5 sm:mb-8 sm:p-6">
              <div className="mb-3 flex items-start gap-3">
                <StepIcon
                  className="mt-0.5 shrink-0 text-neon-primary"
                  size={22}
                  aria-hidden
                />
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  {step.title}
                </h3>
              </div>
              <p className="whitespace-pre-line pl-0 text-sm leading-relaxed text-gray-300 sm:pl-9 sm:text-base">
                {step.description}
              </p>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
