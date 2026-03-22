import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import EditLegalPageAdminCell from 'src/components/Admin/LegalPage/EditLegalPageAdminCell/EditLegalPageAdminCell'

const AdminEditLegalPagePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Edit legal page" description="Admin — edit legal page" />
      <div className="mb-4">
        <Link
          to={routes.adminLegalPages()}
          className="text-sm font-mono text-neon-primary hover:underline"
        >
          ← Back to legal pages
        </Link>
      </div>
      <EditLegalPageAdminCell id={id} />
    </>
  )
}

export default AdminEditLegalPagePage
