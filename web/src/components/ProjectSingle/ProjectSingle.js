import React, { useState, useRef } from 'react'

import { motion } from 'framer-motion'
import { FiExternalLink, FiPlay, FiX } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'
import ReactPlayer from 'react-player'

import AnimatedPopUpModal from '../AnimatedPopUpModal/AnimatedPopUpModal'
import ImageLightbox from '../ImageLightbox/ImageLightbox'

const TILT_MAX = 4
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000

const ProjectSingle = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxSrc, setLightboxSrc] = useState('')
  const cardRef = useRef(null)
  const { ref: videoRef, inView: videoInView } = useInView({
    rootMargin: '200px',
    triggerOnce: true,
  })
  const {
    id,
    title,
    category,
    image,
    video,
    by,
    body,
    clientName,
    objective,
    clientWebsite,
    tools,
    createdAt,
  } = data
  const isRecent = createdAt && Date.now() - new Date(createdAt).getTime() < SEVEN_DAYS_MS
  const paragraphs = body ? body.split('\n') : []

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const projectIndex = String(id).padStart(2, '0')

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setTilt({
      rotateY: (x - 0.5) * TILT_MAX * 2,
      rotateX: (0.5 - y) * TILT_MAX * 2,
    })
  }

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 })
  }

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.7,
          delay: 0.15,
        }}
        whileHover={{
          scale: 1.03,
          y: -10,
          boxShadow: '0 20px 40px -10px rgba(255, 92, 0, 0.2)',
          borderColor: 'rgba(255, 92, 0, 0.5)',
        }}
        onClick={openModal}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 800,
          transformStyle: 'preserve-3d',
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
        }}
        className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col h-full cursor-pointer group relative"
      >
        {isRecent && (
          <span
            className="absolute top-4 right-4 z-10 bg-neon-accent/20 text-neon-accent border border-neon-accent/40 rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase animate-pulse-badge"
            aria-label="Recently published"
          >
            NEW
          </span>
        )}
        <div className="flex justify-between items-start mb-6 sm:mb-8">
          <span className="font-mono text-2xl sm:text-4xl text-white/10 font-bold group-hover:text-neon-primary/20 transition-colors">
            {projectIndex}
          </span>
          <motion.div
            whileHover={{ rotate: 45 }}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neon-primary shrink-0"
          >
            <FiExternalLink size={18} />
          </motion.div>
        </div>

        <div className="flex-1 min-h-0">
          {video ? (
            <div
              ref={videoRef}
              className="flex h-48 sm:h-64 rounded-xl overflow-hidden mb-4"
            >
              {videoInView ? (
                <ReactPlayer
                  controls={false}
                  loop
                  playing
                  volume={0}
                  url={video}
                  width="100%"
                  height="100%"
                />
              ) : (
                <div className="w-full h-full bg-glass-bg flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <FiPlay size={40} className="text-neon-primary relative z-10" />
                </div>
              )}
            </div>
          ) : (
            <div className="flex w-full justify-center rounded-xl overflow-hidden mb-4">
              <img
                src={image}
                className="w-full h-48 sm:h-64 object-cover"
                alt={title}
              />
            </div>
          )}

          <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 text-sm mb-4 flex-grow">{category}</p>
        </div>

        <div className="flex gap-2 font-mono text-[10px] uppercase flex-wrap">
          <span className="px-3 py-1 rounded-full bg-neon-secondary/10 text-neon-secondary border border-neon-secondary/20">
            {category}
          </span>
          {by && (
            <span className="px-3 py-1 rounded-full bg-neon-secondary/10 text-neon-secondary border border-neon-secondary/20">
              {by}
            </span>
          )}
        </div>
      </motion.div>

      <AnimatedPopUpModal isOpen={isOpen} onClose={closeModal}>
        <div className="relative p-4 sm:p-6">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-gray-400 hover:text-neon-primary hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <FiX size={24} />
          </button>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10">
            <div>
              <p className="font-bold mb-4 text-2xl sm:text-3xl text-neon-primary">{title}</p>
              <div className="mb-6 flex justify-center">
                {video ? (
                  <div className="w-full rounded-xl overflow-hidden">
                    <ReactPlayer
                      controls
                      loop
                      url={video}
                      width="100%"
                    />
                  </div>
                ) : (
                  <img
                    src={image}
                    className="rounded-xl shadow-lg max-w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                    alt={title}
                    onClick={() => {
                      setLightboxSrc(image)
                      setLightboxOpen(true)
                    }}
                  />
                )}
              </div>
              <div className="mb-6 flex flex-col items-center">
                <p className="font-mono mb-2 text-lg font-semibold text-gray-400">Client</p>
                <a
                  href={clientWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-primary hover:underline"
                >
                  {clientName}
                </a>
              </div>
              <div className="mb-6">
                <p className="font-mono mb-2 text-lg font-semibold text-gray-400">
                  Our Objectives
                </p>
                <p className="text-gray-300">{objective}</p>
              </div>
              <div>
                <p className="font-mono mb-2 text-lg font-semibold text-gray-400">
                  Tools and Technologies
                </p>
                <p className="text-gray-300">{tools}</p>
              </div>
            </div>
            <div>
              <p className="font-bold mb-4 text-xl text-gray-200">{title}</p>
              {paragraphs.map((section, idx) => (
                <p key={idx} className="mb-4 text-gray-300">
                  {section}
                </p>
              ))}
            </div>
          </div>
        </div>
      </AnimatedPopUpModal>

      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        src={lightboxSrc}
        alt={title}
      />
    </>
  )
}

export default ProjectSingle
