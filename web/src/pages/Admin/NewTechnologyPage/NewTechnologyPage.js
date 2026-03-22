import { MetaTags } from '@redwoodjs/web'

import NewTechnology from 'src/components/Admin/Technology/NewTechnology/NewTechnology'

const NewTechnologyPage = () => {
  return (
    <>
      <MetaTags title="Admin — New technology" description="Create a technology" />
      <div className="glass-panel rounded-2xl p-6">
        <NewTechnology />
      </div>
    </>
  )
}

export default NewTechnologyPage
