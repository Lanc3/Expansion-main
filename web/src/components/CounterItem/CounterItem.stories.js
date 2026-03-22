// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <CounterItem {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import CounterItem from './CounterItem'

export const generated = () => {
  return (
    <CounterItem
      title="Combined Years of experience"
      counter={<span id="experienceCounter" />}
      measurement=""
    />
  )
}

export default {
  title: 'Components/CounterItem',
  component: CounterItem,
}
