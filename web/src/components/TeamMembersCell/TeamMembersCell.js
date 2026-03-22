import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query TeamMembersPublicQuery {
    teamMembers {
      id
      name
      role
      bio
      image
      linkedin
      github
      email
      order
      isActive
    }
  }
`

const fadeUpContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
}

const fadeUpItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const socialBtn =
  'min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-lg border border-neon-primary/25 text-gray-400 hover:text-neon-primary hover:border-neon-primary/50 transition-colors'

function imageSrc(image) {
  if (!image) return '/Images/logoNoText.png'
  if (/^https?:\/\//i.test(image)) return image
  return image.startsWith('/') ? image : `/${image}`
}

function externalHref(url) {
  if (!url) return null
  if (/^https?:\/\//i.test(url)) return url
  return `https://${url.replace(/^\/+/, '')}`
}

export const Loading = () => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="glass-panel h-[380px] animate-pulse rounded-2xl bg-white/[0.03] p-8"
      />
    ))}
  </div>
)

export const Empty = () => (
  <EmptyState
    title="No team members"
    description="Team profiles will appear here when added."
  />
)

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Success = ({ teamMembers }) => {
  const members = (teamMembers || [])
    .filter((m) => m.isActive)
    .sort((a, b) => a.order - b.order)

  if (members.length === 0) {
    return (
      <EmptyState
        title="No team members"
        description="Team profiles will appear here when added."
      />
    )
  }

  return (
    <motion.div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
      variants={fadeUpContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {members.map((member) => {
        const linkedinUrl = externalHref(member.linkedin)
        const githubUrl = externalHref(member.github)

        return (
          <motion.article
            key={member.id}
            variants={fadeUpItem}
            className="glass-panel flex h-full flex-col items-center rounded-2xl p-6 text-center sm:p-8"
          >
            <img
              src={imageSrc(member.image)}
              alt={member.name}
              className="mb-5 h-28 w-28 rounded-full border-2 border-neon-primary/30 object-cover sm:h-32 sm:w-32"
            />
            <h3 className="mb-1 text-xl font-bold text-white">{member.name}</h3>
            <p className="mb-4 font-mono text-sm text-neon-primary">
              {member.role}
            </p>
            <p className="mb-6 flex-1 whitespace-pre-line text-sm leading-relaxed text-gray-300">
              {member.bio}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={socialBtn}
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <FiLinkedin size={20} />
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={socialBtn}
                  aria-label={`${member.name} on GitHub`}
                >
                  <FiGithub size={20} />
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className={socialBtn}
                  aria-label={`Email ${member.name}`}
                >
                  <FiMail size={20} />
                </a>
              )}
            </div>
          </motion.article>
        )
      })}
    </motion.div>
  )
}
