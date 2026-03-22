import { motion, transform } from 'framer-motion'

import styles from './styles.css'
const AnimatedLogo = () => {
  const svgVariants = {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { duration: 1 },
    },
  }

  const pathVariants = {
    initial: { opacity: 0, pathLength: 0 },
    animate: {
      opacity: 1,
      pathLength: 1,
    },
    transition: {
      duration: 1,
      ease: [0, 0.71, 0.2, 1.01],
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 2,
    },
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
  const transition = {
    duration: 2,
    ease: 'easeInOut',
  }

  const animateIn = {
    pathLength: 1,
    pathOffset: 0,
  }
  const animateOut = {
    pathLength: 1,
    pathOffset: 1,
  }

  return (
    <div className="example flex w-full justify-center">
      <h2>{'AnimatedLogo'}</h2>

      <motion.svg
        height="300"
        width="300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 542.03 488.038"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M561.85,484.55l-53,22.72c-102.41-20.58-274.31-57.39-385.49-90.92a195.4,195.4,0,0,1-93.8-61.46C-26.19,287,7.74,196.83,46.06,159c83.87-83.9,302.69-72.81,368.6,19.85,17.93,25.21,21.33,57.92,10.09,86.74-32,82.09-152.14,100.23-209.29,57.94-13.58-10.06-23.28-24.71-26-41.39-7.78-47.61,45.58-79.68,105.12-62.62-74.45-10.63-85.54,97,5.42,96.32,1.67,0,3.39-.06,5.14-.15h.13c20.7-.41,39.61-6.82,42.17-7.73l.3-.1c4.14-1.69,54.57-23,59.53-66.4,2.76-24.24-10-43.42-14.81-50.4,0,0-56.07-76.64-202.6-46.87l-3.4.7-.34.07h0c-38.22,6.9-72.75,23.37-94.89,52.55C69.66,225.94,54.4,273.58,70.56,316.76c22.48,60,95,82.87,275.68,123.67C419.31,456.94,473.62,468.2,561.85,484.55Z"
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{ pathLength: 1, pathOffset: 1 }}
          transition={transition}
        />
        <motion.path
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{ pathLength: 1, pathOffset: 1 }}
          transition={transition}
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#06176d"
          d="M561.85,484.55l-53,22.72c-102.41-20.58-274.31-57.39-385.49-90.92a195.4,195.4,0,0,1-93.8-61.46C-26.19,287,7.74,196.83,46.06,159c83.87-83.9,302.69-72.81,368.6,19.85,17.93,25.21,21.33,57.92,10.09,86.74-32,82.09-152.14,100.23-209.29,57.94-13.58-10.06-23.28-24.71-26-41.39-7.78-47.61,45.58-79.68,105.12-62.62-74.45-10.63-85.54,97,5.42,96.32,1.67,0,3.39-.06,5.14-.15h.13c20.7-.41,39.61-6.82,42.17-7.73l.3-.1c4.14-1.69,54.57-23,59.53-66.4,2.76-24.24-10-43.42-14.81-50.4,0,0-56.07-76.64-202.6-46.87l-3.4.7-.34.07h0c-38.22,6.9-72.75,23.37-94.89,52.55C69.66,225.94,54.4,273.58,70.56,316.76c22.48,60,95,82.87,275.68,123.67C419.31,456.94,473.62,468.2,561.85,484.55Z"
        />
        <motion.path
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{ pathLength: 1, pathOffset: 1 }}
          transition={transition}
          strokeWidth={4}
          fill="#f97e19"
          d="M516.15,348.34c-83.87,83.9-302.69,72.81-368.6-19.85-17.93-25.21-21.33-57.92-10.09-86.74,32-82.09,152.14-100.23,209.29-57.94,13.58,10.06,23.28,24.71,26,41.39,7.78,47.61-45.58,79.68-105.12,62.62,74.45,10.63,85.54-97-5.42-96.32-1.67,0-3.39.06-5.14.15h-.13c-20.7.41-39.61,6.82-42.17,7.73l-.3.1c-4.14,1.69-54.57,23-59.53,66.4-2.77,24.24,10,43.42,14.81,50.4,0,0,56.07,76.64,202.6,46.87l3.4-.7.34-.07h0c38.22-6.9,72.75-23.37,94.89-52.55,21.57-28.43,36.83-76.07,20.67-119.25-22.48-60-95-82.87-275.68-123.67C142.8,50.38,88.45,39.11,0,22.72L53,0C155.37,20.56,327.53,57.42,438.84,91a195.4,195.4,0,0,1,93.8,61.46C588.4,220.31,554.47,310.51,516.15,348.34Z"
        />
      </motion.svg>
      <p>{'Find me in ./web/src/components/AnimatedLogo/AnimatedLogo.js'}</p>
    </div>
  )
}

export default AnimatedLogo
