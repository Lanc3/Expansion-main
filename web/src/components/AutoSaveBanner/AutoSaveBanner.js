import { AnimatePresence, motion } from 'framer-motion'

const getRelativeTime = (timestamp) => {
  if (!timestamp) return ''
  const seconds = Math.floor((Date.now() - timestamp) / 1000)
  if (seconds < 60) return 'just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

const AutoSaveBanner = ({ hasDraft, timestamp, onRestore, onDiscard }) => {
  return (
    <AnimatePresence>
      {hasDraft && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="glass-panel mb-4 border-l-4 px-4 py-3"
          style={{ borderLeftColor: 'var(--neon-accent)' }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm text-gray-300">
              You have an unsaved draft from{' '}
              <span className="font-medium" style={{ color: 'var(--neon-accent)' }}>
                {getRelativeTime(timestamp)}
              </span>
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={onRestore}
                className="rounded px-3 py-1 text-sm font-medium text-black transition-colors"
                style={{ background: 'var(--neon-primary)' }}
              >
                Restore
              </button>
              <button
                type="button"
                onClick={onDiscard}
                className="px-3 py-1 text-sm text-gray-400 transition-colors hover:text-gray-200"
              >
                Discard
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AutoSaveBanner
