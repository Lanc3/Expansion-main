import { render } from '@redwoodjs/testing/web'

import AaronSinglePage from './AaronSinglePage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AaronSinglePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AaronSinglePage />)
    }).not.toThrow()
  })
})
