import { MetaTags } from '@redwoodjs/web'

import NewService from 'src/components/Admin/Service/NewService/NewService'

const NewServicePage = () => {
  return (
    <>
      <MetaTags title="Admin — New service" description="Create a service" />
      <div className="glass-panel rounded-2xl p-6">
        <NewService />
      </div>
    </>
  )
}

export default NewServicePage
