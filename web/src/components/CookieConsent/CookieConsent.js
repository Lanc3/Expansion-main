import { useState, useEffect } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'

const STORAGE_KEY = 'expansion_cookie_consent'

const CookieConsent = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, 'dismissed')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50 glass-panel rounded-2xl p-5"
        >
          <button
            type="button"
            onClick={dismiss}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Dismiss"
          >
            <FiX size={16} />
          </button>
          <p className="text-sm text-gray-300 pr-8 mb-4">
            We use cookies to enhance your experience. By continuing to visit
            this site, you agree to our use of cookies.{' '}
            <a
              href="/legal/privacy-policy"
              className="text-neon-primary hover:underline"
            >
              Privacy Policy
            </a>
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={accept}
              className="px-5 py-2 rounded-full border border-neon-primary text-neon-primary font-mono text-sm font-bold hover:bg-neon-primary/10 transition-colors min-h-[44px]"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={dismiss}
              className="px-5 py-2 rounded-full text-gray-500 font-mono text-sm hover:text-gray-300 transition-colors min-h-[44px]"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent
