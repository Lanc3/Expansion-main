import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ClientLogoAdminCell from 'src/components/Admin/ClientLogo/ClientLogoAdminCell/ClientLogoAdminCell'

const AdminClientLogoPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Client logo" description="Admin — client logo detail" />
      <div className="mb-4">
        <Link
          to={routes.adminClientLogos()}
          className="text-sm font-mono text-neon-primary hover:underline"
        >
          ← Back to client logos
        </Link>
      </div>
      <ClientLogoAdminCell id={id} />
    </>
  )
}

export default AdminClientLogoPage
