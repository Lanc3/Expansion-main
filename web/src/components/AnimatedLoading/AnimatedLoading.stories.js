// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <AnimatedLoading {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import AnimatedLoading from './AnimatedLoading'

export const generated = () => {
  return <AnimatedLoading />
}

export default {
  title: 'Components/AnimatedLoading',
  component: AnimatedLoading,
}
