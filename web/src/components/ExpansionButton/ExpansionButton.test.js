import { render } from '@redwoodjs/testing/web'

import ExpansionButton from './ExpansionButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ExpansionButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExpansionButton />)
    }).not.toThrow()
  })
})
