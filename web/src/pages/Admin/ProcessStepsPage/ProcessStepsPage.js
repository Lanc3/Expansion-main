import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ProcessStepsAdminCell from 'src/components/Admin/ProcessStep/ProcessStepsAdminCell/ProcessStepsAdminCell'

const AdminProcessStepsPage = () => {
  return (
    <>
      <MetaTags title="Process steps" description="Admin — process steps" />
      <div className="glass-panel rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Process steps</h1>
            <p className="text-gray-400 text-sm">
              Manage the steps shown on the public Process page.
            </p>
          </div>
          <Link to={routes.adminNewProcessStep()} className="rw-button rw-button-blue shrink-0">
            New step
          </Link>
        </div>
        <ProcessStepsAdminCell />
      </div>
    </>
  )
}

export default AdminProcessStepsPage
