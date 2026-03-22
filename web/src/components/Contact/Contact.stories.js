// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Contact {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Contact from './Contact'

export const generated = () => {
  return <Contact />
}

export default {
  title: 'Components/Contact',
  component: Contact,
}
