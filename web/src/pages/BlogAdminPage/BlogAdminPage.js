import { motion } from 'framer-motion'
import { gql } from 'graphql-tag'
import {
  FiBriefcase,
  FiCpu,
  FiDollarSign,
  FiFileText,
  FiFolder,
  FiGitBranch,
  FiHelpCircle,
  FiImage,
  FiInbox,
  FiLayers,
  FiMail,
  FiShield,
  FiSliders,
  FiStar,
  FiUsers,
} from 'react-icons/fi'

import { Link } from '@redwoodjs/router'
import { MetaTags, useQuery } from '@redwoodjs/web'

const STATS_QUERY = gql`
  query DashboardStats {
    projectDatas {
      id
    }
    posts {
      id
    }
    contactSubmissions {
      id
    }
    newsletterSubscribers {
      id
    }
  }
`

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      type: 'spring',
      stiffness: 120,
      damping: 18,
    },
  }),
}

const statCards = [
  {
    key: 'projects',
    label: 'TOTAL PROJECTS',
    icon: FiLayers,
    iconClass: 'text-neon-primary',
    getCount: (data) => data?.projectDatas?.length,
  },
  {
    key: 'posts',
    label: 'TOTAL BLOG POSTS',
    icon: FiFileText,
    iconClass: 'text-neon-accent',
    getCount: (data) => data?.posts?.length,
  },
  {
    key: 'contact',
    label: 'CONTACT SUBMISSIONS',
    icon: FiMail,
    iconClass: 'text-neon-secondary',
    getCount: (data) => data?.contactSubmissions?.length,
  },
  {
    key: 'newsletter',
    label: 'NEWSLETTER SUBSCRIBERS',
    icon: FiUsers,
    iconClass: 'text-neon-primary',
    getCount: (data) => data?.newsletterSubscribers?.length,
  },
]

const quickLinks = [
  {
    to: '/admin/services',
    title: 'Services',
    description: 'Manage service offerings and copy.',
    icon: FiBriefcase,
    accent: 'text-neon-primary',
  },
  {
    to: '/project-datas',
    title: 'Projects',
    description: 'Portfolio entries and case studies.',
    icon: FiFolder,
    accent: 'text-neon-accent',
  },
  {
    to: '/posts',
    title: 'Blog Posts',
    description: 'Articles, drafts, and publishing.',
    icon: FiFileText,
    accent: 'text-neon-secondary',
  },
  {
    to: '/admin/team-members',
    title: 'Team Members',
    description: 'People and roles on the site.',
    icon: FiUsers,
    accent: 'text-neon-primary',
  },
  {
    to: '/admin/testimonials',
    title: 'Testimonials',
    description: 'Client quotes and social proof.',
    icon: FiStar,
    accent: 'text-neon-accent',
  },
  {
    to: '/admin/technologies',
    title: 'Technologies',
    description: 'Stacks, tools, and tags.',
    icon: FiCpu,
    accent: 'text-neon-secondary',
  },
  {
    to: '/admin/faqs',
    title: 'FAQ',
    description: 'Questions and answers.',
    icon: FiHelpCircle,
    accent: 'text-neon-primary',
  },
  {
    to: '/admin/process-steps',
    title: 'Process Steps',
    description: 'How you work with clients.',
    icon: FiGitBranch,
    accent: 'text-neon-accent',
  },
  {
    to: '/admin/pricing-tiers',
    title: 'Pricing',
    description: 'Plans and tier content.',
    icon: FiDollarSign,
    accent: 'text-neon-secondary',
  },
  {
    to: '/admin/client-logos',
    title: 'Client Logos',
    description: 'Logo grid and partners.',
    icon: FiImage,
    accent: 'text-neon-primary',
  },
  {
    to: '/admin/legal-pages',
    title: 'Legal Pages',
    description: 'Privacy, terms, and policies.',
    icon: FiShield,
    accent: 'text-neon-accent',
  },
  {
    to: '/admin/site-settings',
    title: 'Site Settings',
    description: 'Global site configuration.',
    icon: FiSliders,
    accent: 'text-neon-secondary',
  },
  {
    to: '/admin/contact-submissions',
    title: 'Contact Submissions',
    description: 'Inbound messages and leads.',
    icon: FiInbox,
    accent: 'text-neon-primary',
  },
  {
    to: '/admin/newsletter-subscribers',
    title: 'Newsletter',
    description: 'Subscriber list and growth.',
    icon: FiMail,
    accent: 'text-neon-accent',
  },
]

const BlogAdminPage = () => {
  const { data, loading, error } = useQuery(STATS_QUERY)

  const formatCount = (n) => {
    if (loading) {
      return '—'
    }
    if (error || n === undefined || n === null) {
      return '—'
    }
    return n
  }

  return (
    <>
      <MetaTags
        title="Admin Dashboard"
        description="Admin dashboard overview"
      />

      <div className="mx-auto max-w-6xl">
        <h1 className="gradient-text mb-2 text-fluid-3xl font-bold tracking-tight sm:text-fluid-4xl">
          Dashboard
        </h1>
        <p className="mb-8 max-w-2xl font-sans text-sm text-gray-300">
          Overview of your content and quick access to admin sections.
        </p>

        {error && (
          <p
            className="mb-6 font-mono text-xs text-neon-secondary/90"
            role="alert"
          >
            Stats could not be loaded. You may need to sign in for protected
            fields.
          </p>
        )}

        <motion.div
          initial="hidden"
          animate="visible"
          className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {statCards.map((stat, i) => {
            const Icon = stat.icon
            const count = formatCount(stat.getCount(data))
            return (
              <motion.div
                key={stat.key}
                custom={i}
                variants={fadeUp}
                className="glass-panel flex min-h-[120px] flex-col justify-between rounded-2xl p-5 sm:p-6"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <Icon
                    className={`shrink-0 ${stat.iconClass}`}
                    size={26}
                    aria-hidden
                  />
                  <span
                    className={`gradient-text text-fluid-3xl font-bold tabular-nums leading-none tracking-tight sm:text-fluid-4xl ${
                      loading ? 'animate-pulse opacity-60' : ''
                    }`}
                  >
                    {count}
                  </span>
                </div>
                <p className="font-mono text-xs tracking-wide text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <h2 className="mb-1 text-lg font-bold text-white sm:text-xl">
          Quick links
        </h2>
        <p className="mb-6 font-mono text-xs uppercase tracking-wider text-gray-400">
          Jump to a section
        </p>

        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {quickLinks.map((item, i) => {
            const Icon = item.icon
            const index = i + statCards.length
            return (
              <motion.div key={item.to} custom={index} variants={fadeUp}>
                <Link
                  to={item.to}
                  className="glass-panel hover:border-neon-primary/35 flex h-full min-h-[44px] flex-col gap-2 rounded-2xl border border-transparent p-5 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-neon-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  <div className="flex min-h-[44px] items-center gap-3">
                    <span
                      className={`flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl bg-white/5 ${item.accent}`}
                    >
                      <Icon size={22} aria-hidden />
                    </span>
                    <span className="text-base font-bold text-white">
                      {item.title}
                    </span>
                  </div>
                  <p className="pl-[56px] font-sans text-sm leading-snug text-gray-300">
                    {item.description}
                  </p>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </>
  )
}

export default BlogAdminPage
