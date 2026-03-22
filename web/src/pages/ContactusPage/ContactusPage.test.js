import { render } from '@redwoodjs/testing/web'

import ContactusPage from './ContactusPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ContactusPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContactusPage />)
    }).not.toThrow()
  })
})
