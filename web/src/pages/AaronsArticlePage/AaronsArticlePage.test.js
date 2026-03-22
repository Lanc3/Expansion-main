import { render } from '@redwoodjs/testing/web'

import AaronsArticlePage from './AaronsArticlePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AaronsArticlePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AaronsArticlePage />)
    }).not.toThrow()
  })
})
