import { useState, useRef, useCallback, useEffect } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

const SHOW_DELAY = 300
const HIDE_DELAY = 150

const LinkPreview = ({ href, title, preview, date, children }) => {
  const [visible, setVisible] = useState(false)
  const showTimer = useRef(null)
  const hideTimer = useRef(null)
  const triggerRef = useRef(null)

  const clearTimers = useCallback(() => {
    clearTimeout(showTimer.current)
    clearTimeout(hideTimer.current)
  }, [])

  useEffect(() => clearTimers, [clearTimers])

  const handleMouseEnter = useCallback(() => {
    clearTimeout(hideTimer.current)
    showTimer.current = setTimeout(() => setVisible(true), SHOW_DELAY)
  }, [])

  const handleMouseLeave = useCallback(() => {
    clearTimeout(showTimer.current)
    hideTimer.current = setTimeout(() => setVisible(false), HIDE_DELAY)
  }, [])

  return (
    <span
      className="relative inline-block"
      ref={triggerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {children}

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 4 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-[9999] pointer-events-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="glass-panel border border-glass-border rounded-xl p-4 max-w-xs w-64 shadow-lg shadow-black/40">
              {title && (
                <p className="font-bold text-sm text-white truncate mb-1">
                  {title}
                </p>
              )}
              {preview && (
                <p className="text-xs text-gray-400 line-clamp-3 mb-2 leading-relaxed">
                  {preview}
                </p>
              )}
              {date && (
                <p className="text-xs text-gray-500 font-mono">{date}</p>
              )}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 rotate-45 glass-panel border-r border-b border-glass-border" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  )
}

export default LinkPreview
