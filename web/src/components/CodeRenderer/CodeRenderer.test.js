import { render } from '@redwoodjs/testing/web'

import CodeRenderer from './CodeRenderer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CodeRenderer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CodeRenderer />)
    }).not.toThrow()
  })
})
