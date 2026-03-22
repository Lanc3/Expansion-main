import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import EditPricingTierAdminCell from 'src/components/Admin/PricingTier/EditPricingTierAdminCell/EditPricingTierAdminCell'

const AdminEditPricingTierPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Edit pricing tier" description="Admin — edit pricing tier" />
      <div className="mb-4">
        <Link
          to={routes.adminPricingTiers()}
          className="text-sm font-mono text-neon-primary hover:underline"
        >
          ← Back to pricing tiers
        </Link>
      </div>
      <EditPricingTierAdminCell id={id} />
    </>
  )
}

export default AdminEditPricingTierPage
