import React, { useEffect, useRef, useCallback } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'

const ImageLightbox = ({ isOpen, onClose, src, alt }) => {
  const closeBtnRef = useRef(null)
  const previousFocusRef = useRef(null)

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        e.preventDefault()
        closeBtnRef.current?.focus()
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement
      requestAnimationFrame(() => closeBtnRef.current?.focus())
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      if (!isOpen && previousFocusRef.current) {
        previousFocusRef.current?.focus()
        previousFocusRef.current = null
      }
    }
  }, [isOpen, handleKeyDown])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={alt || 'Image preview'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="absolute top-4 right-4 z-[10000] min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-gray-400 hover:text-neon-primary hover:bg-white/5 transition-colors"
            aria-label="Close image preview"
          >
            <FiX size={28} />
          </button>

          <motion.img
            src={src}
            alt={alt || ''}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ImageLightbox
