import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, routes } from '@redwoodjs/router'

import ExpansionButton from '../ExpansionButton/ExpansionButton'

const buttonClass =
  'min-h-[44px] px-5 py-2.5 rounded-full border border-neon-primary text-neon-primary font-bold font-mono text-sm hover:bg-neon-primary/10 transition-colors inline-flex items-center justify-center'

import animation from './upAnimation.json'

const ExpandingText = ({ data, toggleCallback, notAaron }) => {
  const [expanded, setExpanded] = useState(false)
  const paragraphs = data.body ? data.body.split('\n') : []

  const toggleExpand = () => {
    setExpanded(!expanded)
    toggleCallback(!expanded)
  }

  const renderText = () => {
    if (expanded) return data.body
    const lines = data.body.split('\n')
    return lines.slice(0, 3).join('\n')
  }

  return (
    <div className="article">
      {expanded && (
        <div
          className="-mt-12 mb-6 flex w-full justify-end cursor-pointer"
          onClick={toggleExpand}
        >
          <Player
            autoplay
            speed={1.5}
            loop
            src={animation}
            style={{ height: '60px', width: '60px' }}
          />
        </div>
      )}
      <AnimatePresence>
        {!expanded && (
          <p className="mb-6 text-gray-300">{renderText()}</p>
        )}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, mass: 0.8 }}
          >
            {paragraphs.map((section, idx) => (
              <p key={idx} className="mb-6 text-gray-300">
                {section}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-wrap gap-2 items-center justify-center mt-4">
        {expanded ? (
          <ExpansionButton lable="Collapse" onClickCallback={toggleExpand} />
        ) : (
          <>
            <ExpansionButton lable="Quick View" onClickCallback={toggleExpand} />
            <Link
              to={
                data.slug
                  ? routes.researchArticle({ slug: data.slug })
                  : !notAaron
                    ? routes.aaronsArticle({ id: data.id })
                    : routes.nicolasArticle({ id: data.id })
              }
              className={buttonClass}
            >
              Full Article
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default ExpandingText
