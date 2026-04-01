import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiGlobe, FiYoutube, FiTerminal } from 'react-icons/fi'

import AppFooterCopyright from '../AppFooterCopyright/AppFooterCopyright'
import NewsletterSignup from '../NewsletterSignup/NewsletterSignup'

const socialLinks = [
  { id: 1, icon: <FiGlobe />, url: 'https://www.expansion.ie/' },
  { id: 2, icon: <FiGithub />, url: 'https://github.com/Lanc3' },
  { id: 3, icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/aaron-keating-a4228985/' },
  { id: 4, icon: <FiYoutube />, url: 'https://www.youtube.com/@AaronKeatingLanc3/' },
]

const siteLinks = [
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Team', to: '/team' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Process', to: '/process' },
  { label: 'Research', to: '/research' },
  { label: 'Contact', to: '/contactus' },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/legal/privacy-policy' },
  { label: 'Terms of Service', to: '/legal/terms-of-service' },
]

const AppFooter = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-24 sm:mt-32 pt-8 sm:pt-12 border-t border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pb-8">
        {/* Newsletter */}
        <div className="max-w-md mx-auto mb-10">
          <p className="text-center font-mono text-sm text-gray-400 mb-3">
            Stay updated with our latest projects and insights
          </p>
          <NewsletterSignup />
        </div>

        {/* Site links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
          {siteLinks.map((link) => (
            <a
              key={link.label}
              href={link.to}
              className="text-sm font-mono text-gray-400 hover:text-neon-primary transition-colors min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social + meta */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-mono">
          <div className="flex items-center gap-2">
            <FiTerminal size={16} className="text-neon-primary" />
            <span>SYSTEM.EXIT(0)</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <ul className="flex gap-4 sm:gap-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-gray-400 hover:text-neon-primary transition-colors"
                  aria-label={`Link to ${link.url}`}
                >
                  <span className="text-xl sm:text-2xl">{link.icon}</span>
                </motion.a>
              ))}
            </ul>
          </div>
          <AppFooterCopyright />
        </div>

        {/* Legal links */}
        <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-white/5">
          {legalLinks.map((link) => (
            <a
              key={link.label}
              href={link.to}
              className="text-xs font-mono text-gray-600 hover:text-gray-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}

export default AppFooter
