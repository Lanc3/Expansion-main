import { useState, useEffect, useRef, useCallback } from 'react'

import { FiClock, FiTag } from 'react-icons/fi'
import { routes } from '@redwoodjs/router'

import AnimatedBack from '../AnimatedBack/AnimatedBack'
import CopyCodeBlock from '../CopyCodeBlock/CopyCodeBlock'
import RelatedArticlesCell from '../RelatedArticlesCell/RelatedArticlesCell'
import ShareButtons from '../ShareButtons/ShareButtons'

const ReadingProgress = ({ contentRef }) => {
  const [progress, setProgress] = useState(0)

  const handleScroll = useCallback(() => {
    const el = contentRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const total = el.scrollHeight - window.innerHeight
    const scrolled = -rect.top
    setProgress(Math.min(1, Math.max(0, scrolled / total)))
  }, [contentRef])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[9998] transition-[width] duration-150 ease-out"
      style={{
        width: `${progress * 100}%`,
        background: 'linear-gradient(90deg, #FF5C00, #FF9500, #E63900)',
      }}
    />
  )
}

const parseBodySections = (body) => {
  if (!body) return []
  const lines = body.split('\n')
  const sections = []
  let i = 0

  while (i < lines.length) {
    if (lines[i].startsWith('```')) {
      const lang = lines[i].slice(3).trim() || 'text'
      const codeLines = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      if (i < lines.length) i++ // skip closing ```
      sections.push({ type: 'code', lang, content: codeLines.join('\n') })
    } else {
      sections.push({ type: 'text', content: lines[i] })
      i++
    }
  }
  return sections
}

const AaronSinglePage = ({ article }) => {
  const contentRef = useRef(null)
  const isPreview =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('preview') === 'true'
  const sections = parseBodySections(article.body)

  function convertToReadableDate(dateString) {
    const date = new Date(dateString)
    if (isNaN(date)) return null
    return date.toLocaleString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    })
  }

  return (
    <div>
      <ReadingProgress contentRef={contentRef} />

      {isPreview && (
        <div className="fixed top-0 left-0 w-full z-[9997] bg-neon-accent/20 border-b border-neon-accent/40 py-2 text-center">
          <span className="font-mono text-sm text-neon-accent">
            PREVIEW MODE — Not Published
          </span>
        </div>
      )}

      <AnimatedBack route={routes.aaronsBlog()} />

      <div ref={contentRef} className="glass-panel p-6 sm:p-8 mb-8 rounded-2xl">
        <p className="mb-6 text-2xl sm:text-3xl font-bold text-neon-primary">
          {article.title}
        </p>

        <ShareButtons title={article.title} />

        <div className="mt-6" />

        {sections.map((section, idx) =>
          section.type === 'code' ? (
            <CopyCodeBlock
              key={idx}
              code={section.content}
              language={section.lang}
            />
          ) : (
            <p key={idx} className="mb-6 text-gray-300">
              {section.content}
            </p>
          )
        )}

        <div className="flex flex-wrap gap-4 mt-6">
          <div className="flex items-center rounded-lg border border-neon-primary/30 px-3 py-2 min-h-[44px]">
            <FiClock className="text-lg text-neon-primary mr-2" />
            <span className="font-mono text-sm text-gray-300">
              {convertToReadableDate(article.createdAt)}
            </span>
          </div>
          <div className="flex items-center rounded-lg border border-neon-primary/30 px-3 py-2 min-h-[44px]">
            <FiTag className="text-lg text-neon-primary mr-2" />
            <span className="font-mono text-sm text-gray-300">Expansion.ie</span>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="mb-6 text-xl font-bold text-neon-primary">
          You might also like
        </h2>
        <RelatedArticlesCell currentId={article.id} />
      </section>
    </div>
  )
}

export default AaronSinglePage
