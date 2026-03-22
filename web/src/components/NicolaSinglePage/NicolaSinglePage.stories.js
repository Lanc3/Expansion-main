// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <NicolaSinglePage {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import NicolaSinglePage from './NicolaSinglePage'

export const generated = () => {
  return (
    <NicolaSinglePage
      article={{
        id: 1,
        title: 'First Post',
        body: `Neutra tacos hot chicken prism raw denim, put
    a bird on it enamel pin post-ironic vape cred
    DIY. Street art next level umami squid.
    Hammock hexagon glossier 8-bit banjo. Neutra
    la croix mixtape echo park four loko semiotics
    kitsch forage chambray. Semiotics salvia
    selfies jianbing hella shaman. Letterpress
    helvetica vaporware cronut, shaman butcher
    YOLO poke fixie hoodie gentrify woke
    heirloom.`,
        createdAt: '2020-01-01T12:34:45Z',
      }}
    />
  )
}

export default {
  title: 'Components/NicolaSinglePage',
  component: NicolaSinglePage,
}
