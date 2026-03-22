import { render } from '@redwoodjs/testing/web'

import MobileMenuToggle from './MobileMenuToggle'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MobileMenuToggle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MobileMenuToggle />)
    }).not.toThrow()
  })
})
