import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PricingTiersAdminCell from 'src/components/Admin/PricingTier/PricingTiersAdminCell/PricingTiersAdminCell'

const AdminPricingTiersPage = () => {
  return (
    <>
      <MetaTags title="Pricing tiers" description="Admin — pricing tiers" />
      <div className="glass-panel rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Pricing tiers</h1>
            <p className="text-gray-400 text-sm">Manage plans shown on the public Pricing page.</p>
          </div>
          <Link to={routes.adminNewPricingTier()} className="rw-button rw-button-blue shrink-0">
            New tier
          </Link>
        </div>
        <PricingTiersAdminCell />
      </div>
    </>
  )
}

export default AdminPricingTiersPage
