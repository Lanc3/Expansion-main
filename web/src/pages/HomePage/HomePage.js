import { motion } from 'framer-motion'
import { FiCode, FiLayers, FiAward, FiTrendingUp } from 'react-icons/fi'
import { gql } from 'graphql-tag'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useQuery } from '@redwoodjs/web'

import AppBanner from 'src/components/AppBanner/AppBanner'
import ActiveServicesCell from 'src/components/ActiveServicesCell/ActiveServicesCell'
import ProjectCell from 'src/components/ProjectCell/ProjectCell'
import PricingTiersCell from 'src/components/PricingTiersCell/PricingTiersCell'
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: 'easeOut' },
  }),
}
const TESTIMONIALS_QUERY = gql`
  query HomePageTestimonials {
    testimonials {
      id
      clientName
      clientTitle
      clientCompany
      quote
      rating
    }
  }
`

const TECHNOLOGIES_QUERY = gql`
  query HomePageTechnologies {
    technologies {
      id
      name
      icon
      category
      proficiency
      order
      isActive
    }
  }
`

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  }),
}

const stats = [
  {
    id: 1,
    label: 'Years Experience',
    value: '10+',
    icon: FiAward,
    colSpan: 'lg:col-span-2',
    description: 'Building production-grade software since 2014',
  },
  {
    id: 2,
    label: 'Projects',
    value: '30+',
    icon: FiLayers,
    colSpan: '',
    description: 'Shipped & deployed',
  },
  {
    id: 3,
    label: 'Full Stack',
    value: null,
    icon: FiCode,
    colSpan: '',
    techIcons: ['React', 'Node', 'C++', 'GL'],
  },
  {
    id: 4,
    label: 'Positive Feedback',
    value: '92%',
    icon: FiTrendingUp,
    colSpan: 'lg:col-span-2',
    bar: true,
  },
]

const BentoGrid = () => (
  <section className="my-20 sm:my-28">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.id}
          custom={i}
          variants={cardVariants}
          whileHover={{
            y: -6,
            boxShadow: '0 16px 40px -8px rgba(255, 92, 0, 0.15)',
            borderColor: 'rgba(255, 92, 0, 0.4)',
          }}
          className={`glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[180px] ${stat.colSpan}`}
        >
          <div className="flex items-center justify-between mb-4">
            <stat.icon className="text-neon-primary" size={24} />
            {stat.value && (
              <span className="text-fluid-4xl font-bold tracking-tight gradient-text leading-none">
                {stat.value}
              </span>
            )}
          </div>

          <div>
            <p className="text-sm sm:text-base font-semibold text-white mb-1">
              {stat.value && `${stat.value} `}{stat.label}
            </p>

            {stat.description && (
              <p className="text-xs text-gray-500 font-mono">{stat.description}</p>
            )}

            {stat.techIcons && (
              <div className="flex flex-wrap gap-2 mt-3">
                {stat.techIcons.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-neon-primary/10 text-neon-primary text-[11px] font-mono border border-neon-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {stat.bar && (
              <div className="mt-3 w-full h-2 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-neon-primary to-neon-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: '92%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
                />
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
)

const StarDots = ({ rating }) => (
  <div className="flex gap-1.5" aria-label={`${rating} out of 5`}>
    {Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`h-2 w-2 rounded-full ${
          i < rating ? 'bg-neon-primary' : 'bg-white/15'
        }`}
      />
    ))}
  </div>
)

const HomePage = () => {
  const { data: testimonialData, loading: testimonialsLoading, error: testimonialsError } =
    useQuery(TESTIMONIALS_QUERY)
  const { data: techData, loading: techLoading, error: techError } = useQuery(TECHNOLOGIES_QUERY)

  const testimonials = testimonialData?.testimonials ?? []

  const technologiesByCategory = (() => {
    const list = (techData?.technologies ?? []).filter((t) => t.isActive)
    const map = new Map()
    for (const t of list) {
      if (!map.has(t.category)) map.set(t.category, [])
      map.get(t.category).push(t)
    }
    for (const [, arr] of map) {
      arr.sort((a, b) => a.order - b.order)
    }
    const categories = [...map.keys()].sort((a, b) => {
      const minA = Math.min(...map.get(a).map((x) => x.order))
      const minB = Math.min(...map.get(b).map((x) => x.order))
      return minA - minB || a.localeCompare(b)
    })
    return { categories, map }
  })()

  return (
    <div className="max-w-[1400px] mx-auto pt-32 sm:pt-40 px-4 sm:px-6 relative z-10 pb-24">
      <AppBanner />

      <motion.section
        className="mt-16 sm:mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl sm:text-4xl font-bold font-sans mb-8 sm:mb-10">
          <span className="gradient-text">Our Services</span>
        </h2>
        <ActiveServicesCell />
        <div className="mt-8 text-center sm:text-left">
          <Link
            to={routes.services()}
            className="inline-flex items-center gap-1 font-mono text-sm text-neon-primary transition-colors hover:text-neon-primary/90"
          >
            View All Services →
          </Link>
        </div>
      </motion.section>

      

      <motion.section
        className="mt-4 sm:mt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl sm:text-4xl font-bold font-sans mb-6 sm:mb-8">
          <span className="gradient-text">Our Work</span>
        </h2>
        <div className="[&>div]:!mt-0">
          <ProjectCell />
        </div>
      </motion.section>
      <div className="mt-20 sm:mt-28">
      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <PricingTiersCell />
      </motion.div>
      </div>
      
      <motion.section
        className="mt-20 sm:mt-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl sm:text-4xl font-bold font-sans mb-8 sm:mb-10">
          <span className="gradient-text">Testimonials</span>
        </h2>

        {testimonialsError && (
          <p className="text-sm text-gray-400 font-sans">{testimonialsError.message}</p>
        )}

        {testimonialsLoading && (
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="glass-panel min-w-[280px] sm:min-w-[320px] shrink-0 rounded-2xl p-6 animate-pulse"
              >
                <div className="skeleton mb-4 h-20 w-full rounded-lg" />
                <div className="skeleton mb-2 h-4 w-1/2 rounded" />
                <div className="skeleton h-3 w-2/3 rounded" />
              </div>
            ))}
          </div>
        )}

        {!testimonialsLoading && !testimonialsError && testimonials.length > 0 && (
          <motion.div
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, staggerChildren: 0.08, delayChildren: 0.05 },
              },
            }}
          >
            {testimonials.map((t) => (
              <motion.article
                key={t.id}
                variants={fadeInUp}
                className="glass-panel min-w-[280px] sm:min-w-[340px] shrink-0 snap-start rounded-2xl p-6 sm:p-8 flex flex-col gap-4"
              >
                <StarDots rating={t.rating} />
                <blockquote className="text-gray-300 font-sans italic leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="pt-2 border-t border-white/10">
                  <p className="text-white font-bold font-sans">{t.clientName}</p>
                  <p className="text-gray-500 font-mono text-sm mt-1">
                    {t.clientTitle}
                    {t.clientCompany ? ` · ${t.clientCompany}` : ''}
                  </p>
                </footer>
              </motion.article>
            ))}
          </motion.div>
        )}

        {!testimonialsLoading && !testimonialsError && testimonials.length === 0 && (
          <p className="text-sm text-gray-500 font-sans">Testimonials coming soon.</p>
        )}
      </motion.section>

      <motion.section
        className="mt-20 sm:mt-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl sm:text-4xl font-bold font-sans mb-8 sm:mb-10">
          <span className="gradient-text">Technologies We Use</span>
        </h2>

        {techError && (
          <p className="text-sm text-gray-400 font-sans">{techError.message}</p>
        )}

        {techLoading && (
          <div className="space-y-8">
            {[0, 1].map((i) => (
              <div key={i}>
                <div className="skeleton mb-4 h-4 w-32 rounded" />
                <div className="flex flex-wrap gap-2">
                  {[0, 1, 2, 3].map((j) => (
                    <div key={j} className="skeleton h-10 w-24 rounded-lg" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {!techLoading && !techError && technologiesByCategory.categories.length > 0 && (
          <div className="space-y-10 sm:space-y-12">
            {technologiesByCategory.categories.map((category) => (
              <div key={category}>
                <h3 className="font-mono text-sm text-neon-primary mb-4 tracking-wide uppercase">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {technologiesByCategory.map.get(category).map((tech) => (
                    <span
                      key={tech.id}
                      className="px-3 py-2 glass-panel rounded-lg text-neon-primary font-mono text-sm"
                      title={tech.proficiency}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {!techLoading && !techError && technologiesByCategory.categories.length === 0 && (
          <p className="text-sm text-gray-500 font-sans">Technology stack coming soon.</p>
        )}
      </motion.section>

      <motion.section
        className="mt-20 sm:mt-28 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeInUp}
      >
        <div className="glass-panel rounded-2xl px-6 py-12 sm:px-10 sm:py-14 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans mb-4">
            <span className="gradient-text">Let&apos;s Build Something Great Together</span>
          </h2>
          <p className="text-gray-400 font-sans max-w-2xl mx-auto sm:mx-0 mb-8 text-fluid-base">
            Tell us about your product, timeline, and goals — we&apos;ll map a path from idea to
            production.
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 justify-center sm:justify-start">
            <Link
              to={routes.contactus()}
              className="inline-flex items-center justify-center rounded-lg border-2 border-neon-primary px-6 py-3 font-mono text-sm text-neon-primary transition-colors hover:bg-neon-primary/10 w-full sm:w-auto"
            >
              Get a Free Quote
            </Link>
            <Link
              to={routes.process()}
              className="font-mono text-sm text-gray-400 underline-offset-4 hover:text-neon-primary hover:underline transition-colors"
            >
              View Our Process
            </Link>
          </div>
        </div>
      </motion.section>

      <MetaTags
        title="Expansion.ie — Custom Software, AI & Game Development"
        description="Custom software development, AI engineering, game development, and automation. We build production-grade software on any stack."
      />
    </div>
  )
}

export default HomePage
