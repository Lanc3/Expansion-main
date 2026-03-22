import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PricingTierForm from 'src/components/Admin/PricingTier/PricingTierForm/PricingTierForm'

const CREATE_MUTATION = gql`
  mutation CreatePricingTierAdmin($input: CreatePricingTierInput!) {
    createPricingTier(input: $input) {
      id
    }
  }
`

const AdminNewPricingTierPage = () => {
  const [createPricingTier, { loading, error }] = useMutation(CREATE_MUTATION, {
    onCompleted: () => {
      toast.success('Pricing tier created')
      navigate(routes.adminPricingTiers())
    },
    onError: (err) => toast.error(err.message),
  })

  const onSave = (input) => {
    createPricingTier({ variables: { input } })
  }

  return (
    <>
      <MetaTags title="New pricing tier" description="Admin — new pricing tier" />
      <div className="mb-4">
        <Link
          to={routes.adminPricingTiers()}
          className="text-sm font-mono text-neon-primary hover:underline"
        >
          ← Back to pricing tiers
        </Link>
      </div>
      <div className="glass-panel rounded-2xl p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-white mb-6">New pricing tier</h1>
        <PricingTierForm onSave={onSave} error={error} loading={loading} />
      </div>
    </>
  )
}

export default AdminNewPricingTierPage
