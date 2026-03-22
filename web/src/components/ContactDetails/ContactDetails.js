import { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { FiCopy, FiCheck } from 'react-icons/fi'

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard not available */
    }
  }

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy to clipboard"
      className="relative ml-auto shrink-0 p-1.5 rounded-md text-gray-500 hover:text-neon-primary transition-colors"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.span
            key="check"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="flex items-center gap-1 text-emerald-400 text-xs"
          >
            <FiCheck className="text-sm" />
            Copied!
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
          >
            <FiCopy className="text-sm" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}

const ContactItem = ({ contact }) => {
  const isEmail = contact.name.includes('@')
  const isPhone = /^\d/.test(contact.name.replace(/\s/g, ''))
  const isLocation = !isEmail && !isPhone

  const renderContent = () => {
    if (isEmail) {
      return (
        <a
          href={`mailto:${contact.name}`}
          className="text-base sm:text-lg hover:text-neon-primary transition-colors underline-offset-4 hover:underline"
        >
          {contact.name}
        </a>
      )
    }
    if (isPhone) {
      const tel = contact.name.replace(/\s/g, '')
      return (
        <a
          href={`tel:${tel}`}
          className="text-base sm:text-lg hover:text-neon-primary transition-colors underline-offset-4 hover:underline"
        >
          {contact.name}
        </a>
      )
    }
    return <span className="text-base sm:text-lg">{contact.name}</span>
  }

  return (
    <li className="flex items-center gap-4 text-gray-300 min-h-[44px]">
      <motion.span
        whileHover={{ scale: 1.25 }}
        transition={{ type: 'spring', stiffness: 400, damping: 12 }}
        className="text-2xl text-neon-primary cursor-default"
      >
        {contact.icon}
      </motion.span>

      {renderContent()}

      {!isLocation && <CopyButton text={contact.name} />}
    </li>
  )
}

const ContactDetails = ({ contacts, name }) => {
  return (
    <div className="glass-panel p-8 sm:p-12 w-full max-w-md">
      <h2 className="font-mono mb-8 text-2xl font-bold text-neon-primary text-glow-primary">
        {name}&apos;s Contact details
      </h2>
      <ul className="space-y-6">
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  )
}

export default ContactDetails
