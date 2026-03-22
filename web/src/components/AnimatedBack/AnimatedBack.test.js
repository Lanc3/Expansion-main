import { render } from '@redwoodjs/testing/web'

import AnimatedBack from './AnimatedBack'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AnimatedBack', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnimatedBack />)
    }).not.toThrow()
  })
})
