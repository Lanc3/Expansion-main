import { render } from '@redwoodjs/testing/web'

import ContactDetails from './ContactDetails'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ContactDetails', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContactDetails />)
    }).not.toThrow()
  })
})
