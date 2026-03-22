// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <AnimatedPopUpModal {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import AnimatedPopUpModal from './AnimatedPopUpModal'
const child = () => {
  return (
    <div>
      <p>test</p>
    </div>
  )
}
export const generated = () => {
  return <AnimatedPopUpModal isOpen={true} children={child} />
}

export default {
  title: 'Components/AnimatedPopUpModal',
  component: AnimatedPopUpModal,
}
