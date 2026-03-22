// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ExpansionButton {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ExpansionButton from './ExpansionButton'

export const generated = () => {
  return <ExpansionButton lable={'TEst'} />
}

export default {
  title: 'Components/ExpansionButton',
  component: ExpansionButton,
}
