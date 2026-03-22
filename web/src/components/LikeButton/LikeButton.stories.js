// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <LikeButton {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import LikeButton from './LikeButton'

export const generated = () => {
  return <LikeButton />
}

export default {
  title: 'Components/LikeButton',
  component: LikeButton,
}
