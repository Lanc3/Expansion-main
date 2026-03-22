import { useState, useEffect, useRef, useCallback } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import {
  FiHome,
  FiUser,
  FiFileText,
  FiMail,
  FiLogIn,
  FiSettings,
  FiFolder,
  FiLayers,
  FiHelpCircle,
  FiDollarSign,
  FiRepeat,
  FiUsers,
  FiGrid,
  FiCpu,
  FiMessageSquare,
  FiImage,
  FiShield,
  FiInbox,
  FiUserPlus,
} from 'react-icons/fi'

import { navigate } from '@redwoodjs/router'

const BASE_ITEMS = [
  { label: 'Home', description: 'Go to homepage', path: '/', icon: FiHome },
  {
    label: 'About',
    description: 'Learn about Expansion',
    path: '/about',
    icon: FiUser,
  },
  {
    label: 'Blog',
    description: "Read Aaron's articles",
    path: '/aarons-blog',
    icon: FiFileText,
  },
  {
    label: 'Contact',
    description: 'Get in touch',
    path: '/contactus',
    icon: FiMail,
  },
  {
    label: 'Services',
    description: 'Browse our services',
    path: '/services',
    icon: FiLayers,
  },
  {
    label: 'FAQ',
    description: 'Frequently asked questions',
    path: '/faq',
    icon: FiHelpCircle,
  },
  {
    label: 'Pricing',
    description: 'View pricing options',
    path: '/pricing',
    icon: FiDollarSign,
  },
  {
    label: 'Process',
    description: 'How we work',
    path: '/process',
    icon: FiRepeat,
  },
  {
    label: 'Team',
    description: 'Meet the team',
    path: '/team',
    icon: FiUsers,
  },
  {
    label: 'Login',
    description: 'Sign in to your account',
    path: '/login',
    icon: FiLogIn,
  },
]

const ADMIN_ITEMS = [
  {
    label: 'Dashboard',
    description: 'Admin overview',
    path: '/blog-admin',
    icon: FiGrid,
  },
  {
    label: 'Services (admin)',
    description: 'Manage services',
    path: '/admin/services',
    icon: FiLayers,
  },
  {
    label: 'Projects',
    description: 'Manage projects',
    path: '/project-datas',
    icon: FiFolder,
  },
  {
    label: 'Blog posts',
    description: 'Manage blog posts',
    path: '/posts',
    icon: FiFileText,
  },
  {
    label: 'Team members',
    description: 'Manage team',
    path: '/admin/team-members',
    icon: FiUsers,
  },
  {
    label: 'Technologies',
    description: 'Manage technologies',
    path: '/admin/technologies',
    icon: FiCpu,
  },
  {
    label: 'Testimonials',
    description: 'Manage testimonials',
    path: '/admin/testimonials',
    icon: FiMessageSquare,
  },
  {
    label: 'Client logos',
    description: 'Manage client logos',
    path: '/admin/client-logos',
    icon: FiImage,
  },
  {
    label: 'FAQs (admin)',
    description: 'Manage FAQs',
    path: '/admin/faqs',
    icon: FiHelpCircle,
  },
  {
    label: 'Process steps',
    description: 'Manage process steps',
    path: '/admin/process-steps',
    icon: FiRepeat,
  },
  {
    label: 'Pricing tiers',
    description: 'Manage pricing',
    path: '/admin/pricing-tiers',
    icon: FiDollarSign,
  },
  {
    label: 'Legal pages',
    description: 'Manage legal content',
    path: '/admin/legal-pages',
    icon: FiShield,
  },
  {
    label: 'Contact submissions',
    description: 'View form submissions',
    path: '/admin/contact-submissions',
    icon: FiInbox,
  },
  {
    label: 'Newsletter subscribers',
    description: 'Manage subscribers',
    path: '/admin/newsletter-subscribers',
    icon: FiMail,
  },
  {
    label: 'Site settings',
    description: 'Site-wide configuration',
    path: '/admin/site-settings',
    icon: FiSettings,
  },
  {
    label: 'Register user',
    description: 'Create a new user account',
    path: '/signup',
    icon: FiUserPlus,
  },
]

const CommandPalette = ({ isOpen, onClose, isAdmin = false }) => {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)
  const listRef = useRef(null)

  const allItems = isAdmin ? [...BASE_ITEMS, ...ADMIN_ITEMS] : BASE_ITEMS

  const filtered = allItems.filter((item) => {
    const q = query.toLowerCase()
    return (
      item.label.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    )
  })

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIndex(0)
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [isOpen])

  const handleNavigate = useCallback(
    (path) => {
      onClose()
      navigate(path)
    },
    [onClose]
  )

  const handleKeyDown = useCallback(
    (e) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex((prev) =>
            prev < filtered.length - 1 ? prev + 1 : 0
          )
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : filtered.length - 1
          )
          break
        case 'Enter':
          e.preventDefault()
          if (filtered[selectedIndex]) {
            handleNavigate(filtered[selectedIndex].path)
          }
          break
        case 'Escape':
          e.preventDefault()
          onClose()
          break
        default:
          break
      }
    },
    [filtered, selectedIndex, handleNavigate, onClose]
  )

  useEffect(() => {
    const active = listRef.current?.children[selectedIndex]
    active?.scrollIntoView({ block: 'nearest' })
  }, [selectedIndex])

  // Focus trap
  useEffect(() => {
    if (!isOpen) return
    const handleFocusTrap = (e) => {
      if (e.key !== 'Tab') return
      const focusable = inputRef.current
      if (focusable) {
        e.preventDefault()
        focusable.focus()
      }
    }
    document.addEventListener('keydown', handleFocusTrap)
    return () => document.removeEventListener('keydown', handleFocusTrap)
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
          style={{ backdropFilter: 'blur(8px)' }}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="surface-overlay w-full max-w-lg mx-4 rounded-xl overflow-hidden shadow-2xl"
            style={{
              background: 'rgba(15, 5, 0, 0.95)',
              border: '1px solid rgba(255, 92, 0, 0.2)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search input area */}
            <div className="relative flex items-center border-b border-white/10 px-4">
              <div role="combobox" aria-expanded="true" aria-haspopup="listbox" aria-owns="command-palette-list" className="flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command or search..."
                  className="w-full bg-transparent py-4 text-white placeholder-gray-500 font-mono text-sm outline-none"
                  aria-autocomplete="list"
                  aria-controls="command-palette-list"
                  aria-activedescendant={
                    filtered[selectedIndex]
                      ? `command-item-${selectedIndex}`
                      : undefined
                  }
                />
              </div>
              <span className="ml-2 shrink-0 text-xs text-gray-500 border border-gray-700 rounded px-1.5 py-0.5 font-mono select-none">
                ESC
              </span>
            </div>

            {/* Results list */}
            <ul
              id="command-palette-list"
              ref={listRef}
              role="listbox"
              className="max-h-[320px] overflow-y-auto py-2"
            >
              {filtered.length === 0 ? (
                <li className="px-4 py-6 text-center text-gray-500 font-mono text-sm">
                  No results found
                </li>
              ) : (
                filtered.map((item, index) => {
                  const Icon = item.icon
                  const isSelected = index === selectedIndex
                  return (
                    <li
                      key={item.path}
                      id={`command-item-${index}`}
                      role="option"
                      aria-selected={isSelected}
                      className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-neon-primary/10'
                          : 'hover:bg-neon-primary/5'
                      }`}
                      onClick={() => handleNavigate(item.path)}
                      onMouseEnter={() => setSelectedIndex(index)}
                    >
                      <Icon
                        size={18}
                        className={
                          isSelected ? 'text-neon-primary' : 'text-gray-400'
                        }
                      />
                      <div className="flex-1 min-w-0">
                        <span
                          className={`block font-mono text-sm ${
                            isSelected ? 'text-neon-primary' : 'text-white'
                          }`}
                        >
                          {item.label}
                        </span>
                        <span className="block text-xs text-gray-500 truncate">
                          {item.description}
                        </span>
                      </div>
                    </li>
                  )
                })
              )}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CommandPalette
