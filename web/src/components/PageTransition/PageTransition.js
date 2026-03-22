import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

import { useLocation } from '@redwoodjs/router'

const variants = {
  initial: { opacity: 0, y: 12 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

const reducedVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

const PageTransition = ({ children }) => {
  const { pathname } = useLocation()
  const prefersReducedMotion = useReducedMotion()

  const activeVariants = prefersReducedMotion ? reducedVariants : variants

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={activeVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
