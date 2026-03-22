import { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { gql } from 'graphql-tag'
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiYoutube,
} from 'react-icons/fi'
import { MetaTags, useMutation } from '@redwoodjs/web'

const CREATE_CONTACT_SUBMISSION = gql`
  mutation CreateContactSubmission($input: CreateContactSubmissionInput!) {
    createContactSubmission(input: $input) {
      id
    }
  }
`

const inputClass =
  'bg-[rgba(15,5,0,0.8)] border border-[rgba(255,92,0,0.15)] text-gray-200 rounded-xl px-4 py-3 focus:border-[#FF5C00] focus:shadow-[0_0_0_3px_rgba(255,92,0,0.2)] outline-none font-sans w-full'

const labelClass = 'text-gray-300 font-mono text-sm mb-2 block'

const submitClass =
  'border-2 border-neon-primary text-neon-primary rounded-full px-8 py-3 font-bold font-mono hover:bg-neon-primary/10 hover:shadow-[0_0_15px_rgba(255,92,0,0.5)] transition-all min-h-[44px]'

const socialLinks = [
  {
    id: 'github',
    icon: FiGithub,
    url: 'https://github.com/Lanc3',
    label: 'GitHub',
  },
  {
    id: 'linkedin',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/aaron-keating-a4228985/',
    label: 'LinkedIn',
  },
  {
    id: 'youtube',
    icon: FiYoutube,
    url: 'https://www.youtube.com/@AaronKeatingLanc3/',
    label: 'YouTube',
  },
]

const initialForm = {
  name: '',
  email: '',
  company: '',
  phone: '',
  serviceInterest: '',
  budget: '',
  timeline: '',
  projectDescription: '',
  howFound: '',
}

const ContactusPage = () => {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const [createContactSubmission, { loading, error }] = useMutation(
    CREATE_CONTACT_SUBMISSION,
    {
      onCompleted: () => {
        setSubmitted(true)
        setForm(initialForm)
      },
    }
  )

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const input = {
      name: form.name.trim(),
      email: form.email.trim(),
      projectDescription: form.projectDescription.trim(),
      company: form.company.trim() || undefined,
      phone: form.phone.trim() || undefined,
      serviceInterest: form.serviceInterest || undefined,
      budget: form.budget || undefined,
      timeline: form.timeline || undefined,
      howFound: form.howFound || undefined,
    }
    createContactSubmission({ variables: { input } })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-[1400px] px-4 pb-24 pt-8 sm:px-6 mt-20"
    >
      <MetaTags
        title="Contact Us"
        description="Get in touch with Expansion. Tell us about your project — we respond within 24 hours."
      />

      <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
        <div className="w-full lg:w-[60%] lg:flex-shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="gradient-text mb-3 text-fluid-3xl font-bold tracking-tight sm:text-fluid-4xl"
          >
            Let&apos;s Build Something Great
          </motion.h1>
          <p className="mb-8 max-w-xl font-sans text-fluid-base text-gray-400">
            Tell us about your project, timeline, and goals — we&apos;ll follow
            up with clear next steps.
          </p>

          <div className="glass-panel rounded-2xl p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  className="rounded-xl border border-neon-primary/30 bg-neon-primary/5 px-6 py-8 text-center"
                >
                  <p className="font-sans text-lg text-gray-100">
                    Thank you! We&apos;ll be in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className={labelClass}>
                        Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={update('name')}
                        className={inputClass}
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={labelClass}>
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={update('email')}
                        className={inputClass}
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-company" className={labelClass}>
                        Company
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={update('company')}
                        className={inputClass}
                        autoComplete="organization"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className={labelClass}>
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={update('phone')}
                        className={inputClass}
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-service" className={labelClass}>
                      Service Interest
                    </label>
                    <select
                      id="contact-service"
                      name="serviceInterest"
                      value={form.serviceInterest}
                      onChange={update('serviceInterest')}
                      className={inputClass}
                    >
                      <option value="">Select a service…</option>
                      <option value="Custom Software Development">
                        Custom Software Development
                      </option>
                      <option value="AI Engineering">AI Engineering</option>
                      <option value="AI Automation">AI Automation</option>
                      <option value="Web Applications">Web Applications</option>
                      <option value="Mobile Applications">
                        Mobile Applications
                      </option>
                      <option value="Game Development">Game Development</option>
                      <option value="API & Integration">
                        API &amp; Integration
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-budget" className={labelClass}>
                        Budget Range
                      </label>
                      <select
                        id="contact-budget"
                        name="budget"
                        value={form.budget}
                        onChange={update('budget')}
                        className={inputClass}
                      >
                        <option value="">Select range…</option>
                        <option value="Under €5,000">Under €5,000</option>
                        <option value="€5,000 - €15,000">
                          €5,000 - €15,000
                        </option>
                        <option value="€15,000 - €50,000">
                          €15,000 - €50,000
                        </option>
                        <option value="€50,000+">€50,000+</option>
                        <option value="Not Sure">Not Sure</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-timeline" className={labelClass}>
                        Timeline
                      </label>
                      <select
                        id="contact-timeline"
                        name="timeline"
                        value={form.timeline}
                        onChange={update('timeline')}
                        className={inputClass}
                      >
                        <option value="">Select timeline…</option>
                        <option value="ASAP">ASAP</option>
                        <option value="1-3 Months">1-3 Months</option>
                        <option value="3-6 Months">3-6 Months</option>
                        <option value="6+ Months">6+ Months</option>
                        <option value="Just Exploring">Just Exploring</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-description" className={labelClass}>
                      Project Description *
                    </label>
                    <textarea
                      id="contact-description"
                      name="projectDescription"
                      required
                      rows={5}
                      value={form.projectDescription}
                      onChange={update('projectDescription')}
                      className={`${inputClass} min-h-[120px] resize-y`}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-howfound" className={labelClass}>
                      How Did You Find Us?
                    </label>
                    <select
                      id="contact-howfound"
                      name="howFound"
                      value={form.howFound}
                      onChange={update('howFound')}
                      className={inputClass}
                    >
                      <option value="">Select…</option>
                      <option value="Google Search">Google Search</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="GitHub">GitHub</option>
                      <option value="Referral">Referral</option>
                      <option value="YouTube">YouTube</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {error && (
                    <p className="font-sans text-sm text-red-400" role="alert">
                      {error.message}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className={`${submitClass} disabled:pointer-events-none disabled:opacity-50`}
                  >
                    {loading ? 'Sending…' : 'Submit inquiry'}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        <aside className="w-full space-y-8 lg:w-[40%] lg:flex-shrink-0">
          <div className="glass-panel rounded-2xl p-6 sm:p-8">
            <h2 className="gradient-text mb-6 font-sans text-xl font-bold">
              Contact
            </h2>
            <ul className="space-y-5 font-sans text-gray-300">
              <li className="flex items-start gap-3">
                <FiMail
                  className="mt-0.5 shrink-0 text-neon-primary"
                  size={20}
                  aria-hidden
                />
                <div>
                  <span className="mb-0.5 block font-mono text-xs text-gray-500">
                    Email
                  </span>
                  <a
                    href="mailto:aaron.keating.lanc3@gmail.com"
                    className="break-all text-gray-200 transition-colors hover:text-neon-primary"
                  >
                    aaron.keating.lanc3@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone
                  className="mt-0.5 shrink-0 text-neon-primary"
                  size={20}
                  aria-hidden
                />
                <div>
                  <span className="mb-0.5 block font-mono text-xs text-gray-500">
                    Phone
                  </span>
                  <a
                    href="tel:+353833175637"
                    className="text-gray-200 transition-colors hover:text-neon-primary"
                  >
                    083 317 5637
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin
                  className="mt-0.5 shrink-0 text-neon-primary"
                  size={20}
                  aria-hidden
                />
                <div>
                  <span className="mb-0.5 block font-mono text-xs text-gray-500">
                    Location
                  </span>
                  <span className="text-gray-200">Carlow, Ireland</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="glass-panel rounded-2xl p-6 sm:p-8">
            <h2 className="gradient-text mb-4 font-sans text-xl font-bold">
              Social
            </h2>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ id, icon: Icon, url, label }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(255,92,0,0.2)] text-neon-primary transition-all hover:bg-neon-primary/10 hover:shadow-[0_0_12px_rgba(255,92,0,0.35)]"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </motion.div>
  )
}

export default ContactusPage
