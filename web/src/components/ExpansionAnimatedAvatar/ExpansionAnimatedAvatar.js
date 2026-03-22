import { motion } from 'framer-motion'

const ExpansionAnimatedAvatar = ({ blurb, image }) => {
  return (
    <div className="m-4 sm:m-8 md:m-12 flex flex-col items-center md:block lg:block">
      <div className="glass-panel p-8 flex flex-col items-center relative">
        <div className="relative flex min-h-[280px] sm:min-h-[360px] items-center justify-center">
          <motion.div
            layout
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute rounded-full border-2 border-neon-primary/30 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72"
          />
          <motion.div
            layout
            initial={{ opacity: 0, scale: 1.3 }}
            animate={{ opacity: 0.2, scale: 0.7 }}
            transition={{ repeat: Infinity, duration: 3, delay: 1 }}
            className="absolute rounded-full border-2 border-neon-primary/20 w-32 h-32 sm:w-40 sm:h-40"
          />
          <img
            src={image}
            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full object-cover border-4 border-neon-primary"
            alt=""
          />
        </div>
        <p className="mt-6 text-center text-gray-400 text-sm sm:text-base max-w-xs">
          {blurb}
        </p>
      </div>
    </div>
  )
}

export default ExpansionAnimatedAvatar
