import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'

export const QUERY = gql`
  query LegalPageBySlugQuery($slug: String!) {
    legalPageBySlug(slug: $slug) {
      id
      slug
      title
      body
      isActive
      updatedAt
    }
  }
`

const h2Class = 'text-xl font-bold text-white mt-8 mb-4 first:mt-0 scroll-mt-24'

const renderBody = (body) => {
  if (!body?.trim()) {
    return null
  }

  const blocks = body
    .split(/\n\n+/)
    .map((b) => b.trim())
    .filter(Boolean)
  const out = []
  let key = 0

  for (const block of blocks) {
    const lines = block.split('\n').map((l) => l.trimEnd())
    let i = 0

    while (i < lines.length) {
      const raw = lines[i]
      const line = raw.trim()
      if (!line) {
        i++
        continue
      }

      if (line.startsWith('## ')) {
        out.push(
          <h2 key={`h2-${key++}`} className={h2Class}>
            {line.slice(3)}
          </h2>
        )
        i++
        continue
      }

      if (line.startsWith('- ')) {
        const items = []
        while (i < lines.length) {
          const t = lines[i].trim()
          if (!t.startsWith('- ')) {
            break
          }
          items.push(t.slice(2))
          i++
        }
        out.push(
          <ul
            key={`ul-${key++}`}
            className="my-4 list-inside list-disc space-y-2 font-sans text-gray-300"
          >
            {items.map((text, idx) => (
              <li key={idx}>{text}</li>
            ))}
          </ul>
        )
        continue
      }

      const paraLines = []
      while (i < lines.length) {
        const t = lines[i].trim()
        if (!t || t.startsWith('## ') || t.startsWith('- ')) {
          break
        }
        paraLines.push(t)
        i++
      }
      out.push(
        <p
          key={`p-${key++}`}
          className="my-4 font-sans leading-relaxed text-gray-300"
        >
          {paraLines.join(' ')}
        </p>
      )
    }
  }

  return out
}

export const Loading = () => (
  <div className="mx-auto max-w-3xl px-4 py-12">
    <div className="glass-panel rounded-2xl p-8">
      <div className="skeleton mb-4 h-9 w-2/3 rounded" />
      <div className="skeleton mb-8 h-4 w-40 rounded font-mono" />
      <SkeletonText lines={8} />
    </div>
  </div>
)

export const Empty = () => (
  <div className="mx-auto max-w-3xl px-4 py-12">
    <div className="glass-panel rounded-2xl p-10 text-center">
      <p className="font-sans text-lg text-gray-400">Page not found</p>
    </div>
  </div>
)

export const Failure = ({ error }) => (
  <div className="mx-auto max-w-3xl px-4 py-12">
    <ErrorState message={error?.message} />
  </div>
)

export const Success = ({ legalPageBySlug }) => {
  const updated = new Date(legalPageBySlug.updatedAt).toLocaleDateString(
    'en-IE',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  )

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <div className="glass-panel rounded-2xl p-6 sm:p-10">
        <h1 className="gradient-text mb-2 text-fluid-3xl font-bold tracking-tight sm:text-fluid-4xl">
          {legalPageBySlug.title}
        </h1>
        <p className="mb-8 font-mono text-sm text-gray-500">
          Last updated {updated}
        </p>
        <div className="legal-body">{renderBody(legalPageBySlug.body)}</div>
      </div>
    </article>
  )
}
