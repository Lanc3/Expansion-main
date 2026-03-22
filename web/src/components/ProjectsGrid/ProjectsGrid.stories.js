// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ProjectsGrid {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ProjectsGrid from './ProjectsGrid'

export const generated = () => {
  return <ProjectsGrid />
}

export default {
  title: 'Components/ProjectsGrid',
  component: ProjectsGrid,
}
