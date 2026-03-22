import { render } from '@redwoodjs/testing/web'

import NicolasBlogPage from './NicolasBlogPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NicolasBlogPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NicolasBlogPage />)
    }).not.toThrow()
  })
})
