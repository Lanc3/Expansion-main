import { render } from '@redwoodjs/testing/web'

import ArticleList from './ArticleList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ArticleList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticleList />)
    }).not.toThrow()
  })
})
