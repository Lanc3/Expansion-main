// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ExpansionAnimatedAvatar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ExpansionAnimatedAvatar from './ExpansionAnimatedAvatar'

export const generated = () => {
  return <ExpansionAnimatedAvatar />
}

export default {
  title: 'Components/ExpansionAnimatedAvatar',
  component: ExpansionAnimatedAvatar,
}
