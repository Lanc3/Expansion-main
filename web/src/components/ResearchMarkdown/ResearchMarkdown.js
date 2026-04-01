import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'

import CopyCodeBlock from 'src/components/CopyCodeBlock/CopyCodeBlock'

const proseArticle =
  'prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-a:text-neon-primary prose-strong:text-white prose-code:text-neon-accent prose-pre:bg-transparent prose-pre:p-0'

/**
 * @param {{ content: string, contentFormat?: string }} props
 */
const ResearchMarkdown = ({ content, contentFormat = 'markdown' }) => {
  if (!content) {
    return null
  }

  if (contentFormat === 'legacy_plain') {
    const lines = content.split('\n')
    return (
      <div className="space-y-4 text-gray-300">
        {lines.map((line, i) => (
          <p key={i} className="whitespace-pre-wrap leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    )
  }

  return (
    <div className={proseArticle}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        components={{
          pre({ children }) {
            return <div className="not-prose my-6">{children}</div>
          },
          code({ className, children, ...rest }) {
            const match = /language-(\w+)/.exec(className || '')
            const text = String(children).replace(/\n$/, '')
            if (match) {
              return <CopyCodeBlock code={text} language={match[1]} />
            }
            return (
              <code
                className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-neon-accent"
                {...rest}
              >
                {children}
              </code>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default ResearchMarkdown
