import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import EditClientLogoAdminCell from 'src/components/Admin/ClientLogo/EditClientLogoAdminCell/EditClientLogoAdminCell'

const AdminEditClientLogoPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Edit client logo" description="Admin — edit client logo" />
      <div className="mb-4">
        <Link
          to={routes.adminClientLogos()}
          className="text-sm font-mono text-neon-primary hover:underline"
        >
          ← Back to client logos
        </Link>
      </div>
      <EditClientLogoAdminCell id={id} />
    </>
  )
}

export default AdminEditClientLogoPage
