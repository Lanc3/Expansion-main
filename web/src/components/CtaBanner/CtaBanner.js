import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const CtaBanner = ({
  heading,
  subtext,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="glass-panel rounded-2xl p-8 text-center sm:p-12 lg:p-16">
        <h2 className="gradient-text text-fluid-3xl font-bold">{heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-fluid-base text-gray-400">
          {subtext}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href={primaryHref}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-neon-primary px-6 py-2.5 font-mono font-bold text-neon-primary transition-colors hover:bg-neon-primary/10"
          >
            {primaryLabel}
          </a>
          <a
            href={secondaryHref}
            className="font-mono text-sm text-gray-400 underline-offset-4 transition-colors hover:text-neon-primary hover:underline"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </motion.div>
  )
}

CtaBanner.propTypes = {
  heading: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
  primaryLabel: PropTypes.string.isRequired,
  primaryHref: PropTypes.string.isRequired,
  secondaryLabel: PropTypes.string.isRequired,
  secondaryHref: PropTypes.string.isRequired,
}

export default CtaBanner
