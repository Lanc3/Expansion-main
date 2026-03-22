// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ContactDetails {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ContactDetails from './ContactDetails'
const contacts = [
  {
    id: 1,
    name: 'Tralee, Ireland',
    icon: <FiMapPin />,
  },
  {
    id: 2,
    name: 'aaron.keating.lanc3@gmail.com',
    icon: <FiMail />,
  },
  {
    id: 3,
    name: '083 317 5637',
    icon: <FiPhone />,
  },
]
export const generated = () => {
  return <ContactDetails contacts={contacts} name={'Test'} />
}

export default {
  title: 'Components/ContactDetails',
  component: ContactDetails,
}
