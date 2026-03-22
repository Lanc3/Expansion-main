import { motion } from 'framer-motion'
import { Link } from '@redwoodjs/router'

const EmptyState = ({
  title = 'Nothing here yet',
  description,
  icon,
  actionLabel,
  actionTo,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex items-center justify-center py-16 px-4"
    >
      <div
        className="glass-panel rounded-2xl p-10 flex flex-col items-center text-center max-w-md w-full"
        style={{
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
        }}
      >
        {icon ? (
          <div className="mb-6">{icon}</div>
        ) : (
          <div className="relative w-24 h-24 mb-6">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                width: 60,
                height: 60,
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--neon-primary)',
                opacity: 0.12,
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: 48,
                height: 48,
                bottom: 4,
                left: 8,
                background: 'var(--neon-secondary)',
                opacity: 0.1,
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: 40,
                height: 40,
                bottom: 8,
                right: 4,
                background: 'var(--neon-accent)',
                opacity: 0.14,
              }}
            />
            <div
              className="absolute"
              style={{
                width: 20,
                height: 20,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(45deg)',
                border: '2px solid var(--neon-primary)',
                opacity: 0.25,
              }}
            />
          </div>
        )}

        <h3 className="text-xl font-bold text-gray-300 mb-2">{title}</h3>

        {description && (
          <p className="text-sm text-gray-500 mb-4">{description}</p>
        )}

        {actionLabel && actionTo && (
          <Link
            to={actionTo}
            className="mt-2 inline-block rounded-full border border-neon-primary text-neon-primary px-6 py-2 text-sm font-medium transition-colors hover:bg-neon-primary/10"
          >
            {actionLabel}
          </Link>
        )}
      </div>
    </motion.div>
  )
}

export default EmptyState
