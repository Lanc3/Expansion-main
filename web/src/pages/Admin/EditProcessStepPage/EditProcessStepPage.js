import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import EditProcessStepAdminCell from 'src/components/Admin/ProcessStep/EditProcessStepAdminCell/EditProcessStepAdminCell'

const AdminEditProcessStepPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Edit process step" description="Admin — edit process step" />
      <div className="mb-4">
        <Link
          to={routes.adminProcessSteps()}
          className="text-sm font-mono text-neon-primary hover:underline"
        >
          ← Back to process steps
        </Link>
      </div>
      <EditProcessStepAdminCell id={id} />
    </>
  )
}

export default AdminEditProcessStepPage
