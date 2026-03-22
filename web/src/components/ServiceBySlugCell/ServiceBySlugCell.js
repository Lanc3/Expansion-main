import { Fragment } from 'react'

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
import { MetaTags } from '@redwoodjs/web'

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
  query ServiceBySlugQuery($slug: String!) {
    serviceBySlug(slug: $slug) {
      id
      title
      slug
      shortDescription
      fullDescription
      icon
      image
      order
      isActive
      createdAt
      updatedAt
    }
  }
`

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Split on blank lines; within each block, group • lines into ul. */
function renderFullDescription(fullDescription) {
  if (!fullDescription?.trim()) {
    return null
  }

  const blocks = fullDescription.split(/\n\n+/)

  return blocks.map((block, blockIdx) => {
    const rawLines = block.split('\n')
    const segments = []
    let textLines = []
    let bulletLines = []

    const flushText = () => {
      if (!textLines.length) return
      const trimmed = textLines.map((l) => l.trim()).filter(Boolean)
      if (trimmed.length) {
        segments.push({ type: 'text', lines: trimmed })
      }
      textLines = []
    }

    const flushBullets = () => {
      if (!bulletLines.length) return
      segments.push({ type: 'list', items: [...bulletLines] })
      bulletLines = []
    }

    for (const line of rawLines) {
      const t = line.trim()
      if (!t) continue
      if (t.startsWith('•')) {
        flushText()
        bulletLines.push(t.replace(/^•\s*/, ''))
      } else {
        flushBullets()
        textLines.push(line)
      }
    }
    flushText()
    flushBullets()

    return (
      <div key={blockIdx} className="space-y-4">
        {segments.map((seg, segIdx) => {
          if (seg.type === 'text') {
            return (
              <p
                key={segIdx}
                className="text-fluid-sm leading-relaxed text-gray-300 sm:text-fluid-base"
              >
                {seg.lines.map((line, li) => (
                  <Fragment key={li}>
                    {li > 0 && <br />}
                    {line.trim()}
                  </Fragment>
                ))}
              </p>
            )
          }
          return (
            <ul
              key={segIdx}
              className="list-none space-y-2 pl-0 text-fluid-sm text-gray-300 sm:text-fluid-base"
            >
              {seg.items.map((item, ii) => (
                <li key={ii} className="flex gap-2">
                  <span className="shrink-0 font-mono text-neon-primary">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )
        })}
      </div>
    )
  })
}

export const Loading = () => (
  <div className="max-w-3xl">
    <div className="glass-panel rounded-2xl p-6 sm:p-10">
      <div className="skeleton mb-6 h-8 w-32 rounded" />
      <div className="skeleton mb-8 h-12 w-4/5 rounded" />
      <div className="space-y-3">
        <div className="skeleton h-4 w-full rounded" />
        <div className="skeleton h-4 w-full rounded" />
        <div className="skeleton h-4 w-5/6 rounded" />
      </div>
    </div>
  </div>
)

export const Empty = () => (
  <EmptyState
    title="Service not found"
    description="That service doesn’t exist or is no longer available."
  />
)

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Success = ({ serviceBySlug }) => {
  if (!serviceBySlug) {
    return <Empty />
  }

  const Icon = getIcon(serviceBySlug.icon)
  const body = renderFullDescription(serviceBySlug.fullDescription)

  return (
    <>
      <MetaTags
        title={`${serviceBySlug.title} — Services | Expansion`}
        description={serviceBySlug.shortDescription}
      />

      <motion.div
        className="max-w-3xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={fadeUp}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <Icon className="text-neon-primary" size={32} aria-hidden />
          <span className="border-neon-primary/35 rounded-md border bg-neon-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-neon-primary">
            Service
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="gradient-text mb-8 text-fluid-4xl font-bold sm:text-fluid-5xl"
        >
          {serviceBySlug.title}
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="glass-panel relative space-y-6 rounded-2xl p-6 sm:p-10"
        >
          <div className="relative z-[3] space-y-6">{body}</div>

          <div className="relative z-[3] pt-4">
            <Link
              to={routes.contactus()}
              className="inline-flex items-center justify-center rounded-lg border border-neon-primary px-5 py-2.5 font-mono text-sm text-neon-primary transition-colors hover:bg-neon-primary/10"
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
