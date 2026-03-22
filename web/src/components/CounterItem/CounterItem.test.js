import { render } from '@redwoodjs/testing/web'

import CounterItem from './CounterItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CounterItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CounterItem />)
    }).not.toThrow()
  })
})
