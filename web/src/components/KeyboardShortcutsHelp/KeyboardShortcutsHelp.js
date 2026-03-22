import { useEffect, useCallback } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'

const SHORTCUT_GROUPS = [
  {
    label: 'Navigation',
    shortcuts: [
      { keys: ['Ctrl', 'K'], description: 'Open command palette' },
      { keys: ['?'], description: 'Show this help' },
    ],
  },
  {
    label: 'General',
    shortcuts: [
      { keys: ['Esc'], description: 'Close dialogs' },
      { keys: ['Home'], description: 'Scroll to top' },
    ],
  },
]

const Kbd = ({ children }) => (
  <kbd className="px-2 py-1 rounded bg-white/10 border border-glass-border text-xs font-mono text-neon-primary min-w-[28px] text-center inline-block">
    {children}
  </kbd>
)

const KeyboardShortcutsHelp = ({ isOpen, onClose }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault()
        onClose()
      }
    },
    [isOpen, onClose]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Keyboard shortcuts"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative surface-overlay glass-panel border border-glass-border rounded-2xl max-w-md w-full p-6 shadow-2xl shadow-black/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-xl text-white">
                Keyboard Shortcuts
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-400 hover:text-neon-primary transition-colors rounded-lg hover:bg-white/5"
                aria-label="Close shortcuts help"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="space-y-6">
              {SHORTCUT_GROUPS.map((group) => (
                <div key={group.label}>
                  <h3 className="text-xs font-mono text-neon-primary uppercase tracking-widest mb-3">
                    {group.label}
                  </h3>
                  <div className="space-y-2">
                    {group.shortcuts.map((shortcut) => (
                      <div
                        key={shortcut.description}
                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center gap-1.5">
                          {shortcut.keys.map((key, i) => (
                            <span key={i} className="flex items-center gap-1">
                              {i > 0 && (
                                <span className="text-gray-600 text-xs">+</span>
                              )}
                              <Kbd>{key}</Kbd>
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-gray-300 ml-4">
                          {shortcut.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default KeyboardShortcutsHelp
