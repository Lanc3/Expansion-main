import { render } from '@redwoodjs/testing/web'

import ExpansionAnimatedAvatar from './ExpansionAnimatedAvatar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ExpansionAnimatedAvatar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExpansionAnimatedAvatar />)
    }).not.toThrow()
  })
})
