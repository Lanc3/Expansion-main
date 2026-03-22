import { render } from '@redwoodjs/testing/web'

import ProjectSingle from './ProjectSingle'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProjectSingle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectSingle />)
    }).not.toThrow()
  })
})
