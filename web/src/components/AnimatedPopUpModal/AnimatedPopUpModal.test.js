import { render } from '@redwoodjs/testing/web'

import AnimatedPopUpModal from './AnimatedPopUpModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AnimatedPopUpModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnimatedPopUpModal />)
    }).not.toThrow()
  })
})
