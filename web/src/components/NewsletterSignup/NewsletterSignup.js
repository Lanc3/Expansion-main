import { useState } from 'react'

import { gql } from 'graphql-tag'

import { useMutation } from '@redwoodjs/web'

const CREATE_NEWSLETTER_SUBSCRIBER = gql`
  mutation CreateNewsletterSubscriber(
    $input: CreateNewsletterSubscriberInput!
  ) {
    createNewsletterSubscriber(input: $input) {
      id
      email
    }
  }
`

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  const [createSubscriber, { loading, error, reset }] = useMutation(
    CREATE_NEWSLETTER_SUBSCRIBER,
    {
      onCompleted: () => {
        setSuccess(true)
        setEmail('')
      },
    }
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed || loading) return
    createSubscriber({
      variables: { input: { email: trimmed } },
    })
  }

  return (
    <div className="glass-panel rounded-2xl p-3 sm:p-4">
      {success ? (
        <p className="font-mono text-sm text-emerald-400">
          You&apos;re subscribed!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex flex-row flex-wrap items-stretch gap-3">
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (error) reset()
              }}
              disabled={loading}
              className="min-w-0 flex-1 rounded-xl border border-[rgba(255,92,0,0.15)] bg-[rgba(15,5,0,0.8)] px-4 py-3 text-gray-200 outline-none focus:border-[#FF5C00] disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading}
              className="min-h-[44px] shrink-0 rounded-full border border-neon-primary px-6 py-2.5 font-mono font-bold text-neon-primary transition-colors hover:bg-neon-primary/10 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? '...' : 'Subscribe'}
            </button>
          </div>
          {error ? (
            <p className="font-mono text-sm text-red-400">{error.message}</p>
          ) : null}
        </form>
      )}
    </div>
  )
}

export default NewsletterSignup
