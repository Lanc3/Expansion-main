import { motion } from 'framer-motion'
import { FiAlertTriangle } from 'react-icons/fi'

const ErrorState = ({ message, onRetry }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex items-center justify-center py-16 px-4"
    >
      <div
        className="glass-panel rounded-2xl p-10 flex flex-col items-center text-center max-w-md w-full"
        style={{
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
        }}
      >
        <FiAlertTriangle
          size={40}
          className="text-neon-secondary mb-4"
        />

        <h3 className="text-xl font-bold text-gray-300 mb-2">
          Something went wrong
        </h3>

        {message && (
          <p className="text-sm text-gray-400 mb-4">{message}</p>
        )}

        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-2 rounded-full border border-neon-secondary text-neon-secondary px-6 py-2 text-sm font-medium bg-transparent transition-colors hover:bg-neon-secondary/10 cursor-pointer"
          >
            Try Again
          </button>
        )}
      </div>
    </motion.div>
  )
}

export default ErrorState
