import { motion } from 'framer-motion'
import { MetaTags } from '@redwoodjs/web'

import AboutCounter from 'src/components/AboutCounter/AboutCounter'

const logo = '/Images/newLogo.png'
const aaronImage = '/Images/profile.png'

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

const imageSpring = {
  type: 'spring',
  damping: 8,
  stiffness: 100,
  restDelta: 0.001,
}

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.1 }}
      className="flex flex-col justify-center max-w-[1400px] mx-auto px-4 sm:px-6 pt-8 pb-24 mt-20"
    >
      <MetaTags
        title="About"
        description="About Expansion — a software engineering studio founded by Aaron Keating. 10+ years building custom software, AI systems, and games."
      />

      <div className="flex w-full flex-col justify-center gap-6 md:gap-8">
        {/* Hero card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="glass-panel px-6 sm:px-8 md:px-12 lg:px-24 py-6 sm:py-8 md:py-12 lg:py-16"
        >
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ...imageSpring }}
              className="flex-shrink-0"
            >
              <img
                src={logo}
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-contain border-2 border-neon-primary/30 p-4"
                alt="Expansion.ie logo"
              />
            </motion.div>
            <div className="flex flex-col flex-1">
              <p className="mb-6 sm:mb-8 whitespace-pre-line text-base sm:text-lg text-gray-300">
                Expansion is a software engineering studio that builds
                production-grade software for businesses of every size. From AI
                automation systems to custom game engines, we take on the hard
                problems that off-the-shelf solutions can&apos;t solve.
              </p>
              <p className="mb-6 sm:mb-8 whitespace-pre-line text-base sm:text-lg text-gray-300">
                Founded by Aaron Keating, we combine deep technical expertise
                with a client-first approach. Every project starts with
                understanding your business — not just your requirements — so we
                deliver software that creates real, measurable impact.
              </p>
              <p className="whitespace-pre-line text-base sm:text-lg text-gray-300">
                We work across the full technology spectrum: React and Node.js
                for web, C++ and OpenGL for games, Python and LangChain for AI,
                and whatever else the problem demands. The right tool for the
                job, every time.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Aaron + Mission row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="glass-panel px-6 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 flex flex-col items-center gap-6"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ...imageSpring }}
              src={aaronImage}
              className="w-36 h-36 sm:w-48 sm:h-48 rounded-full object-cover border-2 border-neon-primary/30"
              alt="Aaron Keating"
            />
            <h3 className="text-fluid-xl font-bold gradient-text">
              Aaron Keating
            </h3>
            <p className="text-sm font-mono text-neon-primary/80 -mt-4">
              Founder & Lead Engineer
            </p>
            <p className="whitespace-pre-line text-base sm:text-lg text-gray-300">
              Aaron brings over 10 years of software engineering experience to
              every project — from real-time 3D graphics in C++ to production AI
              systems and modern web applications. His passion for
              problem-solving and deep technical knowledge ensure that clients
              receive solutions that are not just functional, but exceptional.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="glass-panel px-6 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 flex flex-col items-center gap-6"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ...imageSpring }}
              src={logo}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-contain border-2 border-neon-primary/30 p-2"
              alt="Expansion.ie logo"
            />
            <h3 className="text-fluid-xl font-bold gradient-text">
              Our Mission
            </h3>
            <p className="whitespace-pre-line text-base sm:text-lg text-gray-300">
              We believe every business deserves software that works as hard as
              they do. Our mission is to make world-class engineering accessible
              — building reliable, scalable, and beautifully crafted software
              that helps our clients compete and grow. We work closely with
              every client, from initial discovery through launch and beyond,
              delivering tailored solutions that align with their goals.
            </p>
          </motion.div>
        </div>

        {/* What sets us apart */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="glass-panel px-6 sm:px-8 md:px-12 lg:px-24 py-6 sm:py-8 md:py-12 lg:py-16"
        >
          <div className="flex flex-col">
            <h3 className="text-fluid-xl font-bold gradient-text mb-6">
              Why Clients Choose Us
            </h3>
            <p className="mb-6 sm:mb-8 whitespace-pre-line text-base sm:text-lg text-gray-300">
              We don&apos;t just write code — we solve problems. Every project
              in our portfolio represents a real business challenge that we
              understood deeply before writing a single line. Browse our case
              studies to see the results.
            </p>
            <p className="whitespace-pre-line text-base sm:text-lg text-gray-300">
              From custom software and AI systems to game engines and mobile
              apps, we bring the same standard of engineering excellence to
              every engagement. No project is too ambitious, no stack is off
              limits.
            </p>
          </div>
        </motion.div>
      </div>

      <AboutCounter />
    </motion.div>
  )
}

export default AboutPage
