import { MetaTags } from '@redwoodjs/web'

import ServiceAdminCell from 'src/components/Admin/Service/ServiceAdminCell/ServiceAdminCell'

const ServicePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Admin — Service" description="Service detail" />
      <div className="glass-panel rounded-2xl p-6">
        <ServiceAdminCell id={id} />
      </div>
    </>
  )
}

export default ServicePage
