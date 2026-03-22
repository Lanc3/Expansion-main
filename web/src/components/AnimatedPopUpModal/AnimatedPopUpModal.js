import { useEffect, useRef, useCallback, useId } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

const AnimatedPopUpModal = ({ isOpen, onClose, title, children }) => {
  const dialogRef = useRef(null)
  const previousFocusRef = useRef(null)
  const generatedId = useId()
  const titleId = `modal-title-${generatedId}`

  const getFocusableElements = useCallback(() => {
    if (!dialogRef.current) return []
    return Array.from(dialogRef.current.querySelectorAll(FOCUSABLE_SELECTOR))
  }, [])

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement
      const frame = requestAnimationFrame(() => {
        const focusable = getFocusableElements()
        if (focusable.length > 0) {
          focusable[0].focus()
        } else {
          dialogRef.current?.focus()
        }
      })
      return () => cancelAnimationFrame(frame)
    } else if (previousFocusRef.current) {
      previousFocusRef.current.focus()
      previousFocusRef.current = null
    }
  }, [isOpen, getFocusableElements])

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onClose()
        return
      }

      if (e.key === 'Tab') {
        const focusable = getFocusableElements()
        if (focusable.length === 0) {
          e.preventDefault()
          return
        }

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    },
    [onClose, getFocusableElements]
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
            tabIndex={-1}
            onKeyDown={handleKeyDown}
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, scale: { type: 'spring', stiffness: 300, damping: 25 } }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-full sm:max-w-[90%] max-h-[90vh] overflow-auto rounded-2xl bg-[rgba(15,5,0,0.95)] border border-[rgba(255,92,0,0.2)] shadow-2xl outline-none"
          >
            {title && (
              <span id={titleId} className="sr-only">
                {title}
              </span>
            )}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AnimatedPopUpModal
