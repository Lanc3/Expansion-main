import { useState, useEffect, useCallback, useRef } from 'react'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { FiMenu, FiX, FiZap } from 'react-icons/fi'

import { Link, routes, useLocation } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import AppFooter from 'src/components/AppFooter/AppFooter'
import CommandPalette from 'src/components/CommandPalette/CommandPalette'
import CookieConsent from 'src/components/CookieConsent/CookieConsent'
import KeyboardShortcutsHelp from 'src/components/KeyboardShortcutsHelp/KeyboardShortcutsHelp'
import PageTransition from 'src/components/PageTransition/PageTransition'
import FloatingCta from 'src/components/FloatingCta/FloatingCta'
import ScrollToTop from 'src/components/ScrollToTop/ScrollToTop'
const logo = '/Images/newLogo.png'

const NAV_ITEMS = [
  { label: '_SERVICES', route: 'services', path: '/services' },
  { label: '_ABOUT', route: 'about', path: '/about' },
  { label: '_CONTACT', route: 'contactus', path: '/contactus' },
  {
    label: '_AI_LABS',
    route: 'researchLabs',
    path: '/research',
  },
]

const HeaderFooterLayout = ({ children }) => {
  const { isAuthenticated, hasRole, logOut } = useAuth()
  const { pathname } = useLocation()
  const prefersReducedMotion = useReducedMotion()
  const [showMenu, setShowMenu] = useState(false)
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)
  const [shortcutsOpen, setShortcutsOpen] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const mainRef = useRef(null)

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  useEffect(() => {
    if (isTouchDevice || prefersReducedMotion) return
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isTouchDevice, prefersReducedMotion])

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    setScrollProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    const handleCommandPalette = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setCommandPaletteOpen((prev) => !prev)
      }
    }
    const handleShortcutsHelp = (e) => {
      if (
        e.key === '?' &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.altKey &&
        !['INPUT', 'TEXTAREA', 'SELECT'].includes(
          document.activeElement?.tagName
        ) &&
        !document.activeElement?.isContentEditable
      ) {
        e.preventDefault()
        setShortcutsOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleCommandPalette)
    window.addEventListener('keydown', handleShortcutsHelp)
    return () => {
      window.removeEventListener('keydown', handleCommandPalette)
      window.removeEventListener('keydown', handleShortcutsHelp)
    }
  }, [])

  useEffect(() => {
    setShowMenu(false)
  }, [pathname])

  const isActive = (path) => pathname === path || pathname.startsWith(path + '/')

  const navLinkClass = (path) =>
    `min-h-[44px] flex items-center px-4 font-mono text-sm transition-colors relative ${
      isActive(path)
        ? 'text-neon-primary'
        : 'text-gray-300 hover:text-neon-primary'
    }`

  const mobileNavLinkClass = (path) =>
    `min-h-[44px] flex items-center px-4 font-mono text-sm transition-colors border-t border-white/10 ${
      isActive(path)
        ? 'text-neon-primary bg-neon-primary/5'
        : 'text-gray-300 hover:text-neon-primary'
    }`

  const connectButtonClass =
    'min-h-[44px] px-6 py-2 rounded-full border border-neon-primary text-neon-primary font-bold font-mono hover:shadow-[0_0_15px_rgba(255,92,0,0.5)] transition-all'

  return (
    <div className="app-wrapper min-h-screen selection:bg-neon-primary selection:text-black">
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollProgress }}
      />

      {/* Cursor aura */}
      {!isTouchDevice && !prefersReducedMotion && (
        <motion.div
          className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full mix-blend-screen pointer-events-none z-0 hidden md:block"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 92, 0, 0.15) 0%, rgba(230, 57, 0, 0.05) 50%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: mousePos.x - 200,
            y: mousePos.y - 200,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
        />
      )}

      <motion.nav
        initial={prefersReducedMotion ? false : { y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 w-full z-50 p-4 sm:p-6"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1400px] mx-auto glass-panel px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <Link to={routes.home()} className="flex items-center gap-2 sm:gap-3">
            <motion.div
              whileHover={prefersReducedMotion ? {} : { rotate: 90 }}
              className="w-8 h-8 rounded  flex items-center justify-center text-black font-bold shrink-0"
            >
              <img src={logo} alt="Expansion.IE" className="w-8 h-8 object-contain" />
            </motion.div>
            <span className="font-bold tracking-widest text-white text-lg sm:text-xl md:text-2xl">
              EXPANSION<span className="text-neon-primary">.IE</span>
            </span>
          </Link>

          <button
            onClick={() => setShowMenu(!showMenu)}
            type="button"
            className="sm:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-300 hover:text-neon-primary transition-colors"
            aria-label="Toggle menu"
            aria-expanded={showMenu}
          >
            {showMenu ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Mobile menu with AnimatePresence */}
          <AnimatePresence>
            {showMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="sm:hidden absolute top-full left-4 right-4 mt-2 glass-panel py-2 flex flex-col"
              >
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.route}
                    to={routes[item.route]()}
                    className={mobileNavLinkClass(item.path)}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
                {hasRole('admin') && (
                  <Link
                    to={routes.blogAdmin()}
                    className={mobileNavLinkClass('/blog-admin')}
                    aria-current={isActive('/blog-admin') ? 'page' : undefined}
                  >
                    _ADMIN
                  </Link>
                )}
                {isAuthenticated ? (
                  <button
                    type="button"
                    onClick={() => logOut()}
                    className="min-h-[44px] flex items-center px-4 font-mono text-sm text-gray-300 hover:text-neon-primary transition-colors border-t border-white/10 w-full text-left"
                  >
                    LOGOUT
                  </button>
                ) : (
                  <Link
                    to={routes.login()}
                    className="min-h-[44px] flex items-center px-4 font-mono text-sm text-gray-300 hover:text-neon-primary transition-colors border-t border-white/10"
                  >
                    CONNECT
                  </Link>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop navigation */}
          <div className="hidden sm:flex items-center gap-4 md:gap-8 font-mono text-sm">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.route}
                to={routes[item.route]()}
                className={navLinkClass(item.path)}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-2 right-2 h-0.5 bg-neon-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            {hasRole('admin') && (
              <Link
                to={routes.blogAdmin()}
                className={navLinkClass('/blog-admin')}
                aria-current={isActive('/blog-admin') ? 'page' : undefined}
              >
                _ADMIN
                {isActive('/blog-admin') && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-2 right-2 h-0.5 bg-neon-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            )}
            <button
              type="button"
              onClick={() => setCommandPaletteOpen(true)}
              className="text-xs text-gray-500 border border-gray-700 rounded px-1.5 py-0.5 font-mono hover:text-neon-primary hover:border-neon-primary/40 transition-colors cursor-pointer"
              aria-label="Open command palette"
            >
              Ctrl+K
            </button>
            {isAuthenticated ? (
              <motion.button
                type="button"
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, boxShadow: '0 0 15px rgba(255, 92, 0, 0.5)' }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                onClick={logOut}
                className={connectButtonClass}
              >
                LOGOUT
              </motion.button>
            ) : (
              <Link to={routes.login()}>
                <motion.button
                  type="button"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05, boxShadow: '0 0 15px rgba(255, 92, 0, 0.5)' }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                  className={connectButtonClass}
                >
                  CONNECT
                </motion.button>
              </Link>
            )}
          </div>
        </div>
      </motion.nav>

      <main id="main-content" ref={mainRef} className="relative z-10 mt-28">
        <PageTransition>{children}</PageTransition>
      </main>

      <AppFooter />

      <Toaster
        toastOptions={{
          className: 'rw-toast',
          duration: 4000,
          style: {
            background: 'rgba(15, 5, 0, 0.95)',
            color: '#fff',
            border: '1px solid rgba(255, 92, 0, 0.3)',
            borderRadius: '0.75rem',
            backdropFilter: 'blur(12px)',
            fontFamily: 'monospace',
          },
        }}
        position="top-right"
      />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        isAdmin={hasRole('admin')}
      />

      <KeyboardShortcutsHelp
        isOpen={shortcutsOpen}
        onClose={() => setShortcutsOpen(false)}
      />

      <ScrollToTop />
      <FloatingCta />
      <CookieConsent />
    </div>
  )
}

export default HeaderFooterLayout
