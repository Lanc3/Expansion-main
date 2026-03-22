import { render } from '@redwoodjs/testing/web'

import AboutCounter from './AboutCounter'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AboutCounter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AboutCounter />)
    }).not.toThrow()
  })
})
