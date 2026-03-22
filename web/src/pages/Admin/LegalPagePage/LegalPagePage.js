import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import LegalPageAdminCell from 'src/components/Admin/LegalPage/LegalPageAdminCell/LegalPageAdminCell'

const AdminLegalPagePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Legal page" description="Admin — legal page detail" />
      <div className="mb-4">
        <Link
          to={routes.adminLegalPages()}
          className="text-sm font-mono text-neon-primary hover:underline"
        >
          ← Back to legal pages
        </Link>
      </div>
      <LegalPageAdminCell id={id} />
    </>
  )
}

export default AdminLegalPagePage
