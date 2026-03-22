import { render } from '@redwoodjs/testing/web'

import AaronsBlogPage from './AaronsBlogPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AaronsBlogPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AaronsBlogPage />)
    }).not.toThrow()
  })
})
