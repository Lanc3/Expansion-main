// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ProjectSingle {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ProjectSingle from './ProjectSingle'

export const generated = () => {
  return (
    <ProjectSingle
      data={{
        id: 1,
        title: 'test',
        category: 'test',
        createdAt: 'test',
        image: 'test',
        video: 'test',
        clientName: 'test',
        clientWebsite: 'test',
        objective: 'test',
        tools: 'test',
        body: 'test',
        by: 'test',
      }}
    />
  )
}

export default {
  title: 'Components/ProjectSingle',
  component: ProjectSingle,
}
