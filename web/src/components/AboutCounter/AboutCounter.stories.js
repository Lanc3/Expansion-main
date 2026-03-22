// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <AboutCounter {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import AboutCounter from './AboutCounter'

export const generated = () => {
  return <AboutCounter />
}

export default {
  title: 'Components/AboutCounter',
  component: AboutCounter,
}
