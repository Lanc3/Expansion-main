import { render } from '@redwoodjs/testing/web'

import NicolasArticlePage from './NicolasArticlePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NicolasArticlePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NicolasArticlePage />)
    }).not.toThrow()
  })
})
