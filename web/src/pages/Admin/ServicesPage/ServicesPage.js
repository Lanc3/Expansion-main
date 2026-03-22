import { MetaTags } from '@redwoodjs/web'

import ServicesAdminCell from 'src/components/Admin/Service/ServicesAdminCell/ServicesAdminCell'

const ServicesPage = () => {
  return (
    <>
      <MetaTags title="Admin — Services" description="Manage services" />
      <div className="glass-panel rounded-2xl p-6">
        <ServicesAdminCell />
      </div>
    </>
  )
}

export default ServicesPage
