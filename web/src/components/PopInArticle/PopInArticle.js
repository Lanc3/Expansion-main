import { useEffect } from 'react'

import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const PopInArticle = ({ image, textArray, animateSide, alt = '' }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0 },
  }
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      },
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="glass-panel mt-6 grid grid-cols-1 py-6 sm:py-8 md:px-12 md:py-12 lg:px-24 lg:py-16 px-6 sm:px-8"
    >
      {image ? (
        <div className="display-linebreak flex flex-col justify-center sm:flex-row md:flex-row lg:flex-row gap-8">
          {animateSide ? (
            <motion.div variants={variants} className="flex justify-center">
              <img
                src={image}
                className="mb-7 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover border-2 border-neon-primary/30"
                alt={alt}
              />
            </motion.div>
          ) : null}

          <div className="flex flex-col flex-1">
            {textArray.map((bio) => (
              <p
                className="mb-6 sm:mb-12 whitespace-pre-line text-base sm:text-lg text-gray-300"
                key={bio.id}
              >
                {bio.bio}
              </p>
            ))}
          </div>
          {!animateSide ? (
            <motion.div variants={variants} className="flex justify-center sm:justify-end">
              <img
                src={image}
                className="mb-7 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover border-2 border-neon-primary/30 sm:ml-24"
                alt={alt}
              />
            </motion.div>
          ) : null}
        </div>
      ) : (
        <div className="display-linebreak flex flex-col">
          {textArray.map((bio) => (
            <p
              className="display-linebreak mb-6 sm:mb-12 whitespace-pre-line text-base sm:text-lg text-gray-300"
              key={bio.id}
            >
              {bio.bio}
            </p>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default PopInArticle
