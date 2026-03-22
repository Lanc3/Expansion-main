import { motion } from 'framer-motion'
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi'

import ContactDetails from '../ContactDetails/ContactDetails'

const contacts = [
  { id: 1, name: 'Tralee, Ireland', icon: <FiMapPin /> },
  { id: 2, name: 'aaron.keating.lanc3@gmail.com', icon: <FiMail /> },
  { id: 3, name: '083 317 5637', icon: <FiPhone /> },
]

/* Nicola's contacts - preserved in code, hidden from display
const contactsNicola = [
  { id: 1, name: 'Tralee, Ireland', icon: <FiMapPin /> },
  { id: 2, name: 'nicolab137@gmail.com', icon: <FiMail /> },
  { id: 3, name: '087 137 5876', icon: <FiPhone /> },
]
*/

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const Contact = () => {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center py-8 lg:py-16 px-4"
    >
      <motion.h1
        variants={fadeUp}
        className="gradient-text text-fluid-4xl sm:text-fluid-5xl font-bold tracking-tight text-center"
      >
        LET'S CONNECT
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="text-gray-400 text-fluid-base sm:text-fluid-lg text-center mt-3 mb-10 max-w-lg"
      >
        Have a project in mind or just want to say hello? Reach out anytime.
      </motion.p>

      <motion.div variants={fadeUp}>
        <ContactDetails contacts={contacts} name="Aaron Keating" />
      </motion.div>
    </motion.div>
  )
}

export default Contact
