import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ClientLogosAdminCell from 'src/components/Admin/ClientLogo/ClientLogosAdminCell/ClientLogosAdminCell'

const AdminClientLogosPage = () => {
  return (
    <>
      <MetaTags title="Client logos" description="Admin — client logos" />
      <div className="glass-panel rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Client logos</h1>
            <p className="text-gray-400 text-sm">Manage partner / client logos on the site.</p>
          </div>
          <Link to={routes.adminNewClientLogo()} className="rw-button rw-button-blue shrink-0">
            New logo
          </Link>
        </div>
        <ClientLogosAdminCell />
      </div>
    </>
  )
}

export default AdminClientLogosPage
