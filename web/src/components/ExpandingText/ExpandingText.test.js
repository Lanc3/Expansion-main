import { render } from '@redwoodjs/testing/web'

import ExpandingText from './ExpandingText'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ExpandingText', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExpandingText />)
    }).not.toThrow()
  })
})
