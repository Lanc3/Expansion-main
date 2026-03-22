import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import LegalPagesAdminCell from 'src/components/Admin/LegalPage/LegalPagesAdminCell/LegalPagesAdminCell'

const AdminLegalPagesPage = () => {
  return (
    <>
      <MetaTags title="Legal pages" description="Admin — legal pages" />
      <div className="glass-panel rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Legal pages</h1>
            <p className="text-gray-400 text-sm">Privacy, terms, and other policy content.</p>
          </div>
          <Link to={routes.adminNewLegalPage()} className="rw-button rw-button-blue shrink-0">
            New page
          </Link>
        </div>
        <LegalPagesAdminCell />
      </div>
    </>
  )
}

export default AdminLegalPagesPage
