import { MetaTags } from '@redwoodjs/web'

import EditTechnologyAdminCell from 'src/components/Admin/Technology/EditTechnologyAdminCell/EditTechnologyAdminCell'

const EditTechnologyPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Admin — Edit technology" description="Edit technology" />
      <div className="glass-panel rounded-2xl p-6">
        <EditTechnologyAdminCell id={id} />
      </div>
    </>
  )
}

export default EditTechnologyPage
