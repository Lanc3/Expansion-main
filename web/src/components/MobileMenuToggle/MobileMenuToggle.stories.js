// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <MobileMenuToggle {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import MobileMenuToggle from './MobileMenuToggle'

export const generated = () => {
  return <MobileMenuToggle />
}

export default {
  title: 'Components/MobileMenuToggle',
  component: MobileMenuToggle,
}
