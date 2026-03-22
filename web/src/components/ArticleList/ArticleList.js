import React, { useState, useEffect, useRef, useMemo } from 'react'

import { FiSearch, FiX } from 'react-icons/fi'

import ArticleItem from '../ArticleItem/ArticleItem'
import ExpansionButton from '../ExpansionButton/ExpansionButton'

const CATEGORY_TAGS = [
  { label: 'All', keyword: null },
  { label: 'Development', keyword: 'development' },
  { label: 'Design', keyword: 'design' },
  { label: 'Tutorial', keyword: 'tutorial' },
  { label: 'Game', keyword: 'game' },
  { label: 'Health', keyword: 'health' },
  { label: 'News', keyword: 'news' },
]

const ArticleList = ({ articles }) => {
  const MAX_ARTICLES_PER_PAGE = 3
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [activeTag, setActiveTag] = useState(null)
  const debounceRef = useRef(null)

  useEffect(() => {
    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => setDebouncedSearch(searchTerm), 250)
    return () => clearTimeout(debounceRef.current)
  }, [searchTerm])

  useEffect(() => {
    setCurrentPage(1)
  }, [debouncedSearch, activeTag])

  const filteredArticles = useMemo(() => {
    let result = articles
    if (activeTag) {
      const tag = activeTag.toLowerCase()
      result = result.filter((a) => {
        const text = `${a.title || ''} ${a.body || ''}`.toLowerCase()
        return text.includes(tag)
      })
    }
    if (debouncedSearch.trim()) {
      const q = debouncedSearch.toLowerCase()
      result = result.filter(
        (a) =>
          a.title?.toLowerCase().includes(q) ||
          a.body?.toLowerCase().includes(q)
      )
    }
    return result
  }, [articles, debouncedSearch, activeTag])

  const handleTagClick = (keyword) => {
    setActiveTag(keyword)
  }

  const totalPages = Math.ceil(filteredArticles.length / MAX_ARTICLES_PER_PAGE)
  const startIndex = (currentPage - 1) * MAX_ARTICLES_PER_PAGE
  const endIndex = startIndex + MAX_ARTICLES_PER_PAGE
  const currentArticles = filteredArticles.slice(startIndex, endIndex)

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1)
  }

  return (
    <div>
      <div className="relative mb-6">
        <FiSearch
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search articles..."
          aria-label="Search articles"
          className="w-full glass-panel border border-glass-border rounded-xl pl-11 pr-10 py-3 text-sm font-mono text-white placeholder-gray-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-neon-primary/60 focus:border-neon-primary/40 transition-all"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-neon-primary transition-colors cursor-pointer"
            aria-label="Clear search"
          >
            <FiX size={18} />
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {CATEGORY_TAGS.map((tag) => {
          const isActive = activeTag === tag.keyword
          return (
            <button
              key={tag.label}
              onClick={() => handleTagClick(tag.keyword)}
              className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-200 min-h-[44px] border ${
                isActive
                  ? 'bg-neon-primary/20 text-neon-primary border-neon-primary/40'
                  : 'bg-white/5 text-gray-400 border-glass-border hover:bg-white/10 hover:text-gray-200'
              }`}
            >
              {tag.label}
            </button>
          )
        })}
      </div>

      {activeTag && (
        <div className="flex items-center gap-2 mb-6">
          <span className="text-sm text-gray-400 font-mono">Filtering:</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neon-primary/15 text-neon-primary text-sm font-mono border border-neon-primary/30">
            {CATEGORY_TAGS.find((t) => t.keyword === activeTag)?.label}
            <button
              onClick={() => handleTagClick(null)}
              className="ml-1 hover:text-neon-accent transition-colors"
              aria-label="Clear filter"
            >
              <FiX className="w-3.5 h-3.5" />
            </button>
          </span>
          <span className="text-sm text-gray-500 font-mono">
            {filteredArticles.length} article{filteredArticles.length !== 1 && 's'}
          </span>
        </div>
      )}

      {filteredArticles.length === 0 ? (
        <p className="text-center font-mono text-gray-400 py-12">
          No articles match your search.
        </p>
      ) : (
        <>
          {currentArticles.map((article, index) => (
            <ArticleItem key={article.id} article={article} index={index} />
          ))}
          {filteredArticles.length > MAX_ARTICLES_PER_PAGE && (
            <div className="flex w-full flex-row justify-center items-center gap-4 mt-8">
              <ExpansionButton
                lable="Previous"
                onClickCallback={handlePrevPage}
              />
              <span className="font-mono text-gray-400 min-w-[44px] text-center">
                {currentPage} / {totalPages}
              </span>
              <ExpansionButton
                lable="Next"
                onClickCallback={handleNextPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default ArticleList
