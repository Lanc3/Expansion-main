import { render } from '@redwoodjs/testing/web'

import NicolaSinglePage from './NicolaSinglePage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NicolaSinglePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NicolaSinglePage />)
    }).not.toThrow()
  })
})
