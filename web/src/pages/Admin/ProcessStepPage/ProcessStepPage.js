import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ProcessStepAdminCell from 'src/components/Admin/ProcessStep/ProcessStepAdminCell/ProcessStepAdminCell'

const AdminProcessStepPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Process step" description="Admin — process step detail" />
      <div className="mb-4">
        <Link
          to={routes.adminProcessSteps()}
          className="text-sm font-mono text-neon-primary hover:underline"
        >
          ← Back to process steps
        </Link>
      </div>
      <ProcessStepAdminCell id={id} />
    </>
  )
}

export default AdminProcessStepPage
