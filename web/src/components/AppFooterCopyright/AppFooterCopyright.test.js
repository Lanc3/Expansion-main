import { render } from '@redwoodjs/testing/web'

import AppFooterCopyright from './AppFooterCopyright'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AppFooterCopyright', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AppFooterCopyright />)
    }).not.toThrow()
  })
})
