// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <AnimatedLogo {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import AnimatedLogo from './AnimatedLogo'

export const generated = () => {
  return <AnimatedLogo />
}

export default {
  title: 'Components/AnimatedLogo',
  component: AnimatedLogo,
}
