import { render } from '@redwoodjs/testing/web'

import ArticleItem from './ArticleItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ArticleItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticleItem />)
    }).not.toThrow()
  })
})
