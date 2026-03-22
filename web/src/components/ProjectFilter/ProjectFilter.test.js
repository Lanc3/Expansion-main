import { render } from '@redwoodjs/testing/web'

import ProjectFilter from './ProjectFilter'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProjectFilter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectFilter />)
    }).not.toThrow()
  })
})
