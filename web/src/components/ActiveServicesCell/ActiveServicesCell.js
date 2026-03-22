import { motion } from 'framer-motion'
import {
  FiCode,
  FiCpu,
  FiGlobe,
  FiLink,
  FiMonitor,
  FiSmartphone,
  FiZap,
} from 'react-icons/fi'

import { Link, routes } from '@redwoodjs/router'

import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

const ICON_MAP = {
  FiCode,
  FiBrain: FiCpu,
  FiZap,
  FiGlobe,
  FiSmartphone,
  FiMonitor,
  FiLink,
  FiCpu,
}

const getIcon = (key) => ICON_MAP[key] ?? FiCode

export const QUERY = gql`
  query ActiveServicesQuery {
    activeServices {
      id
      title
      slug
      shortDescription
      icon
      order
    }
  }
`

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export const Loading = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
    {Array.from({ length: 6 }).map((_, i) => (
      <div
        key={i}
        className="glass-panel relative overflow-hidden rounded-2xl p-6 sm:p-8"
      >
        <div className="skeleton mb-4 h-10 w-10 rounded-lg" />
        <div className="skeleton mb-3 h-6 w-4/5 rounded" />
        <div className="skeleton mb-2 h-4 w-full rounded" />
        <div className="skeleton h-4 w-2/3 rounded" />
      </div>
    ))}
  </div>
)

export const Empty = () => (
  <EmptyState
    title="No services listed"
    description="Check back soon for what we build."
  />
)

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Success = ({ activeServices }) => {
  const sorted = [...activeServices].sort((a, b) => a.order - b.order)

  return (
    <motion.div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      {sorted.map((service) => {
        const Icon = getIcon(service.icon)
        return (
          <motion.article
            key={service.id}
            variants={fadeUp}
            whileHover={{
              y: -6,
              boxShadow: '0 16px 40px -8px rgba(255, 92, 0, 0.15)',
              borderColor: 'rgba(255, 92, 0, 0.4)',
            }}
            className="glass-panel flex h-full flex-col rounded-2xl p-6 transition-colors sm:p-8"
          >
            <div className="relative z-[3] flex flex-1 flex-col">
              <Icon
                className="mb-4 shrink-0 text-neon-primary"
                size={28}
                aria-hidden
              />
              <h3 className="mb-3 text-fluid-lg font-bold text-white sm:text-fluid-xl">
                {service.title}
              </h3>
              <p className="mb-6 flex-1 text-fluid-sm text-gray-400">
                {service.shortDescription}
              </p>
              <Link
                to={routes.serviceDetail({ slug: service.slug })}
                className="inline-flex w-fit items-center gap-1 font-mono text-fluid-sm text-neon-primary transition-colors hover:text-neon-primary/90"
              >
                Learn More →
              </Link>
            </div>
          </motion.article>
        )
      })}
    </motion.div>
  )
}
