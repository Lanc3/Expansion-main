import { motion } from 'framer-motion'
import { FiLinkedin, FiLink } from 'react-icons/fi'

import { toast } from '@redwoodjs/web/toast'

const XIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const glowHover = {
  scale: 1.1,
  boxShadow: '0 0 14px rgba(255,92,0,0.45)',
}

const ShareButtons = ({ title, url }) => {
  const getUrl = () => (typeof window !== 'undefined' ? url || window.location.href : '')

  const shareTwitter = () => {
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(getUrl())}`
    window.open(shareUrl, '_blank', 'noopener,noreferrer')
  }

  const shareLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getUrl())}`
    window.open(shareUrl, '_blank', 'noopener,noreferrer')
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(getUrl())
      toast.success('Link copied!')
    } catch {
      toast.error('Failed to copy link')
    }
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-400">Share</span>

      <motion.button
        whileHover={glowHover}
        whileTap={{ scale: 0.95 }}
        onClick={shareTwitter}
        aria-label="Share on X / Twitter"
        className="glass-panel flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-gray-300 transition-colors hover:text-neon-primary"
      >
        <XIcon className="text-lg" />
      </motion.button>

      <motion.button
        whileHover={glowHover}
        whileTap={{ scale: 0.95 }}
        onClick={shareLinkedIn}
        aria-label="Share on LinkedIn"
        className="glass-panel flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-gray-300 transition-colors hover:text-neon-primary"
      >
        <FiLinkedin className="text-lg" />
      </motion.button>

      <motion.button
        whileHover={glowHover}
        whileTap={{ scale: 0.95 }}
        onClick={copyLink}
        aria-label="Copy link to clipboard"
        className="glass-panel flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-gray-300 transition-colors hover:text-neon-primary"
      >
        <FiLink className="text-lg" />
      </motion.button>
    </div>
  )
}

export default ShareButtons
