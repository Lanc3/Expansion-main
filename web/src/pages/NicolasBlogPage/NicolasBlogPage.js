import { motion } from 'framer-motion'

import { MetaTags } from '@redwoodjs/web'

import ExpansionAnimatedAvatar from 'src/components/ExpansionAnimatedAvatar/ExpansionAnimatedAvatar'
import NicolasArticlesCell from 'src/components/NicolasArticlesCell'

import nicola from './nicola.jpg'
const NicolasBlogPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.1,
      }}
      className=" "
    >
      <div className="m-3 flex flex-col items-center justify-center md:flex-row ">
        <ExpansionAnimatedAvatar
          blurb={`Welcome to my blog, where I talk about my navigation through the
          realms of life, game development, web development, and health. Ill
          share my experiences, lessons learned, and valuable insights as I
          navigate the highs and lows of this dynamic landscape. Together, well
          explore the delicate art of balancing work and play, while nurturing
          our physical and mental well-being. Lets embark on this personal and
          professional adventure, embracing growth, creativity, and a fulfilling
          lifestyle.`}
          image={nicola}
        />

        <div className="font-general-regular mx-6 w-full text-left sm:w-full md:w-3/4 md:pl-12 lg:w-3/4">
          <MetaTags title="AaronsBlog" description="AaronsBlog page" />
          <NicolasArticlesCell />
        </div>
      </div>
    </motion.div>
  )
}

export default NicolasBlogPage
