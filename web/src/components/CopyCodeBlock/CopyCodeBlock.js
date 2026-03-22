import { useState, useCallback, useRef } from 'react'

import { FiCopy, FiCheck } from 'react-icons/fi'

const CopyCodeBlock = ({ code, language = 'text' }) => {
  const [copied, setCopied] = useState(false)
  const codeRef = useRef(null)

  const handleCopy = useCallback(async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(code)
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = code
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* silently fail */
    }
  }, [code])

  return (
    <div className="mb-6 rounded-lg overflow-hidden border border-glass-border">
      <div className="flex justify-between items-center bg-white/5 rounded-t-lg px-4 py-2">
        <span className="font-mono text-xs text-gray-500">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-neon-primary transition-colors min-h-[32px] px-2"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <FiCheck size={14} />
              <span className="font-mono">Copied!</span>
            </>
          ) : (
            <>
              <FiCopy size={14} />
              <span className="font-mono">Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="bg-black/40 rounded-b-lg px-4 py-3 overflow-x-auto">
        <pre ref={codeRef}>
          <code className="font-mono text-sm text-gray-300">{code}</code>
        </pre>
      </div>
    </div>
  )
}

export default CopyCodeBlock
