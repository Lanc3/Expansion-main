import { motion } from 'framer-motion'

const ExpansionButton = ({ lable, onClickCallback }) => {
  return (
    <motion.button
      type="button"
      onClick={onClickCallback}
      whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255, 92, 0, 0.4)' }}
      whileTap={{ scale: 0.95 }}
      className="min-h-[44px] px-5 py-2.5 rounded-full border border-neon-primary text-neon-primary font-bold font-mono text-sm hover:bg-neon-primary/10 transition-colors"
    >
      {lable}
    </motion.button>
  )
}

export default ExpansionButton
