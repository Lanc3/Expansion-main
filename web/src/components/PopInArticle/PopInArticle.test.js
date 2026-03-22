import { render } from '@redwoodjs/testing/web'

import PopInArticle from './PopInArticle'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PopInArticle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PopInArticle />)
    }).not.toThrow()
  })
})
