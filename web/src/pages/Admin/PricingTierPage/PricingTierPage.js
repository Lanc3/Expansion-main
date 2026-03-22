import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PricingTierAdminCell from 'src/components/Admin/PricingTier/PricingTierAdminCell/PricingTierAdminCell'

const AdminPricingTierPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Pricing tier" description="Admin — pricing tier detail" />
      <div className="mb-4">
        <Link
          to={routes.adminPricingTiers()}
          className="text-sm font-mono text-neon-primary hover:underline"
        >
          ← Back to pricing tiers
        </Link>
      </div>
      <PricingTierAdminCell id={id} />
    </>
  )
}

export default AdminPricingTierPage
