import { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import {
  FiFileText,
  FiFolder,
  FiUserPlus,
  FiHome,
  FiMenu,
  FiX,
  FiGrid,
  FiLayers,
  FiUsers,
  FiCpu,
  FiMessageSquare,
  FiImage,
  FiHelpCircle,
  FiRepeat,
  FiDollarSign,
  FiShield,
  FiInbox,
  FiMail,
  FiSettings,
} from 'react-icons/fi'

import { Link, routes, useLocation } from '@redwoodjs/router'

const navGroups = [
  {
    title: 'DASHBOARD',
    items: [{ label: 'Dashboard', path: '/blog-admin', icon: FiGrid }],
  },
  {
    title: 'CONTENT',
    items: [
      { label: 'Services', path: '/admin/services', icon: FiLayers },
      { label: 'Projects', path: '/project-datas', icon: FiFolder },
      {
        label: 'Research articles',
        path: '/admin/research-articles',
        icon: FiFileText,
      },
      { label: 'Posts (scaffold)', path: '/posts', icon: FiFileText },
      { label: 'Team', path: '/admin/team-members', icon: FiUsers },
      { label: 'Technologies', path: '/admin/technologies', icon: FiCpu },
    ],
  },
  {
    title: 'SOCIAL PROOF',
    items: [
      { label: 'Testimonials', path: '/admin/testimonials', icon: FiMessageSquare },
      { label: 'Client Logos', path: '/admin/client-logos', icon: FiImage },
    ],
  },
  {
    title: 'PAGES',
    items: [
      { label: 'FAQ', path: '/admin/faqs', icon: FiHelpCircle },
      { label: 'Process', path: '/admin/process-steps', icon: FiRepeat },
      { label: 'Pricing', path: '/admin/pricing-tiers', icon: FiDollarSign },
      { label: 'Legal', path: '/admin/legal-pages', icon: FiShield },
    ],
  },
  {
    title: 'LEADS',
    items: [
      { label: 'Submissions', path: '/admin/contact-submissions', icon: FiInbox },
      { label: 'Newsletter', path: '/admin/newsletter-subscribers', icon: FiMail },
    ],
  },
  {
    title: 'SETTINGS',
    items: [
      { label: 'Site Settings', path: '/admin/site-settings', icon: FiSettings },
      { label: 'Register User', path: '/signup', icon: FiUserPlus },
    ],
  },
  {
    title: 'Back to Site',
    items: [{ label: 'Home', path: '/', icon: FiHome }],
  },
]

const AdminLayout = ({ children }) => {
  const { pathname } = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const isActive = (path) => {
    if (path === '/') return pathname === '/'
    return pathname === path || pathname.startsWith(path + '/')
  }

  const navLinkClass = (path) =>
    `flex rounded-xl px-4 py-3 text-sm font-bold transition-colors min-h-[44px] items-center gap-3 ${
      isActive(path)
        ? 'bg-neon-primary/20 text-neon-primary'
        : 'text-gray-300 hover:bg-neon-primary/10 hover:text-neon-primary'
    }`

  const sidebarContent = (
    <div className="flex h-full flex-col justify-between">
      <div className="flex-grow">
        <div className="border-b border-glass-border px-4 py-6 text-center flex items-center justify-between">
          <h1 className="text-xl font-bold leading-none text-white">
            <span className="text-neon-primary">Admin</span> Panel
          </h1>
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-400 hover:text-neon-primary transition-colors"
            aria-label="Close sidebar"
          >
            <FiX size={20} />
          </button>
        </div>
        <nav className="p-4" role="navigation" aria-label="Admin navigation">
          {navGroups.map((group) => (
            <div key={group.title}>
              <p className="font-mono text-gray-500 text-[10px] tracking-widest px-4 mt-4 mb-2 uppercase">
                {group.title}
              </p>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={`${group.title}-${item.path}-${item.label}`}>
                    <a
                      href={item.path}
                      className={navLinkClass(item.path)}
                      aria-current={isActive(item.path) ? 'page' : undefined}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <item.icon className="text-lg shrink-0" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )

  return (
    <div className="app-wrapper min-h-screen flex flex-col lg:flex-row">
      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-40 bg-[rgba(10,3,0,0.92)] backdrop-blur-xl border-b border-[rgba(255,92,0,0.15)] px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-bold text-white">
          <span className="text-neon-primary">Admin</span>
        </h1>
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-300 hover:text-neon-primary transition-colors"
          aria-label="Open sidebar"
          aria-expanded={sidebarOpen}
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed inset-y-0 left-0 z-50 w-[280px] overflow-y-auto bg-[rgba(10,3,0,0.95)] backdrop-blur-xl border-r border-[rgba(255,92,0,0.15)]"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-60 shrink-0 sticky top-0 h-screen overflow-y-auto bg-[rgba(10,3,0,0.92)] backdrop-blur-xl border-r border-[rgba(255,92,0,0.15)] z-30">
        {sidebarContent}
      </aside>

      {/* Main content */}
      <main className="flex-1 min-h-screen pt-6 lg:pt-8 px-4 lg:px-8 pb-8 text-gray-200">
        {/* Breadcrumb */}
        <div className="mb-6 font-mono text-xs text-gray-500 flex items-center gap-2">
          <Link to={routes.home()} className="hover:text-neon-primary transition-colors">
            HOME
          </Link>
          <span>/</span>
          <span className="text-neon-primary">
            {pathname.split('/').filter(Boolean).map(s => s.toUpperCase().replace(/-/g, ' ')).join(' / ')}
          </span>
        </div>
        {children}
      </main>
    </div>
  )
}

export default AdminLayout
