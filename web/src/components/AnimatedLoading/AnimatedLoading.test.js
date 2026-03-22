import { render } from '@redwoodjs/testing/web'

import AnimatedLoading from './AnimatedLoading'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AnimatedLoading', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnimatedLoading />)
    }).not.toThrow()
  })
})
