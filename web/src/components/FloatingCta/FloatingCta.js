import { useState, useEffect } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

const FloatingCta = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          key="floating-cta"
          href="/contactus"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 48 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05 }}
          className="fixed bottom-6 right-6 z-40 rounded-full bg-neon-primary/90 px-6 py-3 font-mono text-sm font-bold text-black shadow-[0_0_20px_rgba(255,92,0,0.4)] backdrop-blur"
        >
          Get a Quote
        </motion.a>
      ) : null}
    </AnimatePresence>
  )
}

export default FloatingCta
