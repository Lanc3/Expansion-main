// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <AppFooter {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import AppFooter from './AppFooter'

export const generated = () => {
  return <AppFooter />
}

export default {
  title: 'Components/AppFooter',
  component: AppFooter,
}
