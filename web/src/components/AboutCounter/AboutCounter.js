import { useCountUp } from 'react-countup'

import CounterItem from '../CounterItem/CounterItem'

const AboutCounter = () => {
  useCountUp({ ref: 'experienceCounter', end: 15, duration: 2 })
  useCountUp({ ref: 'githubStarsCounter', end: 4, duration: 2 })
  useCountUp({ ref: 'feedbackCounter', end: 92, duration: 2 })
  useCountUp({ ref: 'projectsCounter', end: 30, duration: 2 })

  return (
    <div className="mt-16 sm:mt-24 glass-panel py-12 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-12 sm:gap-8">
        <CounterItem
          title="Combined Years of experience"
          counter={<span id="experienceCounter" />}
          measurement=""
        />
        <CounterItem
          title="Projects Completed"
          counter={<span id="githubStarsCounter" />}
          measurement=""
        />
        <CounterItem
          title="Positive feedback"
          counter={<span id="feedbackCounter" />}
          measurement="%"
        />
        <CounterItem
          title="Projects we Consulted on"
          counter={<span id="projectsCounter" />}
          measurement=""
        />
      </div>
    </div>
  )
}

export default AboutCounter
