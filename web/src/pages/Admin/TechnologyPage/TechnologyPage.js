import { MetaTags } from '@redwoodjs/web'

import TechnologyAdminCell from 'src/components/Admin/Technology/TechnologyAdminCell/TechnologyAdminCell'

const TechnologyPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Admin — Technology" description="Technology detail" />
      <div className="glass-panel rounded-2xl p-6">
        <TechnologyAdminCell id={id} />
      </div>
    </>
  )
}

export default TechnologyPage
