// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <PopInArticle {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import PopInArticle from './PopInArticle'
const aboutMeData = [
  {
    id: 2,
    bio: `Welcome to Expansion!

       Expansion was founded by Aaron Keating, a talented software engineer, and Nicola Byrne, a
    creative graphic designer. We created Expansion to work together doing what we love. We are
    a dedicated team focused on empowering businesses to expand into the online world. This
    website is here to showcase our projects and promote us to any potential employers or clients.`,
  },
  {
    id: 3,
    bio: `While we aim to build our client list and continue to grow our business we are also currently
    looking for work within the industry. Why look for employment when we have started our
    business, which we hold so dear? We want to work hard in our respective fields so that we
    ensure that Expansion never has to go anywhere, even if we are not taking on further work at
    any point.`,
  },
  {
    id: 4,
    bio: `We decided to create this space for us to have a shared portfolio as we have worked together
    on multiple projects within Expansion. It just didn’t make sense to us to separate out our
    achievements. We hope you find our website a refreshing example of like minded individuals
    coming together to help expand each other further in the design and development fields.`,
  },
]
export const generated = () => {
  return <PopInArticle textArray={aboutMeData} animateSide={true} />
}

export default {
  title: 'Components/PopInArticle',
  component: PopInArticle,
}
