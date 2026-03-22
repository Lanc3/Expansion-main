import { motion } from 'framer-motion'
import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'
import ExpansionAnimatedAvatar from 'src/components/ExpansionAnimatedAvatar/ExpansionAnimatedAvatar'

import aaron from './profile.png'

const AaronsBlogPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.1 }}
      className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-8 pb-24 mt-20"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <ExpansionAnimatedAvatar
          blurb={`Welcome to my blog, where I talk about my navigation through the
          realms of life, game development, web development, and health. I'll
          share my experiences, lessons learned, and valuable insights as I
          navigate the highs and lows of this dynamic landscape. Together, we'll
          explore the delicate art of balancing work and play, while nurturing
          our physical and mental well-being. Let's embark on this personal and
          professional adventure, embracing growth, creativity, and a fulfilling
          lifestyle.`}
          image={aaron}
        />

        <div className="w-full md:w-3/4 lg:w-3/4 pt-20">
          <MetaTags title="Aaron's Blog" description="Aaron's Blog - Development, design, and life" />
          <ArticlesCell />
        </div>
      </div>
    </motion.div>
  )
}

export default AaronsBlogPage
