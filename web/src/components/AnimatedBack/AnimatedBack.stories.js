// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <AnimatedBack {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import AnimatedBack from './AnimatedBack'

export const generated = () => {
  return <AnimatedBack />
}

export default {
  title: 'Components/AnimatedBack',
  component: AnimatedBack,
}
