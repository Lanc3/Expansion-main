// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <CodeRenderer {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import CodeRenderer from './CodeRenderer'

export const generated = () => {
  return <CodeRenderer />
}

export default {
  title: 'Components/CodeRenderer',
  component: CodeRenderer,
}
