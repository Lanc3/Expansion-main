import { useRef } from 'react'

import { motion, useScroll, useTransform } from 'framer-motion'
import {
  FiArrowRight,
  FiCode,
  FiCpu,
  FiZap,
  FiMonitor,
} from 'react-icons/fi'

import { Link, routes } from '@redwoodjs/router'

const logo = '/Images/newLogo.png'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
}

const highlights = [
  { label: 'Custom Software', icon: FiCode },
  { label: 'AI Engineering', icon: FiCpu },
  { label: 'AI Automation', icon: FiZap },
  { label: 'Game Development', icon: FiMonitor },
]

const AppBanner = () => {
  const imageRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [20, -30])

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[50vh] sm:min-h-[60vh]"
    >
      <motion.div variants={itemVariants} className="lg:col-span-7">
        <div className="font-mono text-neon-secondary mb-4 flex items-center gap-2 text-xs sm:text-sm tracking-widest uppercase bg-neon-secondary/10 inline-flex px-3 py-1.5 sm:py-2 rounded-full border border-neon-secondary/30">
          <FiZap size={14} /> Software Engineering Studio
        </div>
        <h1 className="text-fluid-5xl font-bold tracking-tighter leading-none mb-4 sm:mb-6">
          WE ENGINEER <br />
          <span className="gradient-text">SOFTWARE, AI & GAMES.</span>
        </h1>
        <p className="text-fluid-base text-gray-400 max-w-2xl font-light leading-relaxed">
          From AI automation to game development — we build production-grade
          software on any stack. 10+ years of engineering experience, delivered
          with precision.
        </p>

        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 font-mono text-xs sm:text-sm"
        >
          {highlights.map((item) => (
            <span
              key={item.label}
              className="px-3 sm:px-4 py-2 glass-panel rounded-lg text-neon-primary flex items-center gap-2"
            >
              <item.icon size={14} />
              {item.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Link to={routes.contactus()}>
            <motion.button
              type="button"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(255, 92, 0, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
              className="min-h-[44px] flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-neon-primary text-neon-primary font-bold font-mono hover:bg-neon-primary/10 transition-colors"
            >
              Get a Free Quote
              <FiArrowRight size={18} />
            </motion.button>
          </Link>
          <Link
            to={routes.home()}
            className="min-h-[44px] flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-gray-400 font-mono hover:text-neon-primary transition-colors"
          >
            View Our Work
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="lg:col-span-5 hidden lg:flex justify-center"
      >
        <motion.div ref={imageRef} style={{ y: imageY }}>
          <img
            src={logo}
            alt="Expansion.ie"
            className="w-64 h-64 xl:w-80 xl:h-80 object-contain drop-shadow-[0_0_40px_rgba(255,92,0,0.3)]"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default AppBanner
