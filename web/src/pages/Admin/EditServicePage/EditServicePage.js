import { MetaTags } from '@redwoodjs/web'

import EditServiceAdminCell from 'src/components/Admin/Service/EditServiceAdminCell/EditServiceAdminCell'

const EditServicePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Admin — Edit service" description="Edit service" />
      <div className="glass-panel rounded-2xl p-6">
        <EditServiceAdminCell id={id} />
      </div>
    </>
  )
}

export default EditServicePage
