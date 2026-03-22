import { MetaTags } from '@redwoodjs/web'

import TechnologiesAdminCell from 'src/components/Admin/Technology/TechnologiesAdminCell/TechnologiesAdminCell'

const TechnologiesPage = () => {
  return (
    <>
      <MetaTags title="Admin — Technologies" description="Manage technologies" />
      <div className="glass-panel rounded-2xl p-6">
        <TechnologiesAdminCell />
      </div>
    </>
  )
}

export default TechnologiesPage
