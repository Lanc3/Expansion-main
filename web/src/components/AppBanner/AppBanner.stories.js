// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <AppBanner {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import AppBanner from './AppBanner'

export const generated = () => {
  return <AppBanner />
}

export default {
  title: 'Components/AppBanner',
  component: AppBanner,
}
