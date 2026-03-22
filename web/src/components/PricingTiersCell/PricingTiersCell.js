import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

import { Link, routes } from '@redwoodjs/router'

import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query PricingTiersPublicQuery {
    pricingTiers {
      id
      name
      description
      features
      price
      unit
      isPopular
      ctaText
      order
      isActive
    }
  }
`

const fadeUpContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const fadeUpItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const ghostCta =
  'inline-flex w-full min-h-[44px] items-center justify-center px-6 py-3 rounded-full border border-neon-primary text-neon-primary hover:bg-neon-primary/10 font-mono font-bold transition-colors text-center'

const popularCta =
  'inline-flex w-full min-h-[48px] items-center justify-center px-8 py-3.5 rounded-full bg-neon-primary text-black font-mono font-bold hover:bg-neon-primary/90 transition-colors shadow-[0_0_24px_rgba(255,92,0,0.35)] text-center'

export const Loading = () => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="glass-panel h-[420px] animate-pulse rounded-2xl bg-white/[0.03] p-8"
      />
    ))}
  </div>
)

export const Empty = () => (
  <EmptyState
    title="No pricing tiers"
    description="Pricing will be listed here when available."
  />
)

export const Failure = ({ error }) => <ErrorState message={error?.message} />

function parseFeatures(features) {
  if (!features || typeof features !== 'string') return []
  return features
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

export const Success = ({ pricingTiers }) => {
  const tiers = (pricingTiers || [])
    .filter((t) => t.isActive)
    .sort((a, b) => a.order - b.order)

  if (tiers.length === 0) {
    return (
      <EmptyState
        title="No pricing tiers"
        description="Pricing will be listed here when available."
      />
    )
  }

  return (
    <motion.div
      className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8"
      variants={fadeUpContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {tiers.map((tier) => (
        <motion.article
          key={tier.id}
          variants={fadeUpItem}
          className={`glass-panel relative flex h-full flex-col rounded-2xl p-6 sm:p-8 ${
            tier.isPopular
              ? 'z-[1] border-2 border-neon-primary md:scale-[1.02]'
              : ''
          }`}
        >
          {tier.isPopular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 animate-pulse-badge rounded-full border border-neon-primary/40 bg-neon-primary/20 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-neon-accent">
              MOST POPULAR
            </span>
          )}

          <div className="mb-4 pt-2">
            <h3 className="mb-1 text-xl font-bold text-white sm:text-2xl">
              {tier.name}
            </h3>
            <div className="flex flex-wrap items-baseline gap-1">
              <span className="gradient-text text-3xl font-bold tabular-nums sm:text-4xl">
                {tier.price}
              </span>
              {tier.unit ? (
                <span className="font-mono text-sm text-gray-400">
                  / {tier.unit}
                </span>
              ) : null}
            </div>
          </div>

          <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400">
            {tier.description}
          </p>

          <ul className="mb-8 space-y-3">
            {parseFeatures(tier.features).map((line, idx) => (
              <li
                key={idx}
                className="flex gap-3 text-sm leading-snug text-gray-300"
              >
                <FiCheck
                  className="mt-0.5 shrink-0 text-neon-primary"
                  size={18}
                  aria-hidden
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <Link
            to={routes.contactus()}
            className={tier.isPopular ? popularCta : ghostCta}
          >
            {tier.ctaText || 'Get started'}
          </Link>
        </motion.article>
      ))}
    </motion.div>
  )
}
