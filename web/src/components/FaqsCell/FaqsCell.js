import { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query FaqsPublicQuery {
    faqs {
      id
      question
      answer
      category
      order
      isActive
    }
  }
`

const fadeUpContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
}

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

export const Loading = () => (
  <div className="space-y-4">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="glass-panel h-24 animate-pulse rounded-2xl bg-white/[0.03] p-6"
      />
    ))}
  </div>
)

export const Empty = () => (
  <EmptyState
    title="No FAQs yet"
    description="Check back soon for answers to common questions."
  />
)

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Success = ({ faqs }) => {
  const active = (faqs || []).filter((f) => f.isActive)
  const byCategory = active.reduce((acc, f) => {
    const key = f.category?.trim() || 'General'
    if (!acc[key]) acc[key] = []
    acc[key].push(f)
    return acc
  }, {})

  const categories = Object.keys(byCategory).sort((a, b) => {
    const minA = Math.min(...byCategory[a].map((x) => x.order))
    const minB = Math.min(...byCategory[b].map((x) => x.order))
    return minA - minB
  })

  categories.forEach((c) => {
    byCategory[c].sort((x, y) => x.order - y.order)
  })

  const [open, setOpen] = useState({})

  const toggle = (id) => {
    setOpen((o) => ({ ...o, [id]: !o[id] }))
  }

  if (categories.length === 0) {
    return (
      <EmptyState
        title="No FAQs yet"
        description="Check back soon for answers to common questions."
      />
    )
  }

  return (
    <motion.div
      className="space-y-12"
      variants={fadeUpContainer}
      initial="hidden"
      animate="visible"
    >
      {categories.map((category) => (
        <motion.section key={category} variants={fadeUpItem}>
          <h2 className="mb-4 font-mono text-lg font-bold tracking-tight text-white sm:text-xl">
            <span className="text-neon-primary">{'//'}</span> {category}
          </h2>
          <div className="space-y-3">
            {byCategory[category].map((faq) => {
              const isOpen = !!open[faq.id]
              return (
                <motion.div
                  key={faq.id}
                  variants={fadeUpItem}
                  className="glass-panel relative z-0 overflow-hidden rounded-2xl"
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    className="relative z-10 flex min-h-[44px] w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.03] sm:px-6 sm:py-5"
                  >
                    <span className="pr-2 text-base font-bold text-white sm:text-lg">
                      {faq.question}
                    </span>
                    <FiChevronDown
                      className={`shrink-0 text-neon-primary transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      size={22}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 120,
                          damping: 22,
                          mass: 0.85,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/10 px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
                          <p className="whitespace-pre-line pt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </motion.section>
      ))}
    </motion.div>
  )
}
