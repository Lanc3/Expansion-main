import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PricingTierForm from 'src/components/Admin/PricingTier/PricingTierForm/PricingTierForm'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'

export const QUERY = gql`
  query EditPricingTierAdminQuery($id: Int!) {
    pricingTier: pricingTier(id: $id) {
      id
      name
      description
      features
      price
      unit
      isPopular
      ctaText
      order
      isActive
      createdAt
    }
  }
`

const UPDATE_MUTATION = gql`
  mutation UpdatePricingTierAdmin($id: Int!, $input: UpdatePricingTierInput!) {
    updatePricingTier(id: $id, input: $input) {
      id
      name
      description
      features
      price
      unit
      isPopular
      ctaText
      order
      isActive
      createdAt
    }
  }
`

export const Loading = () => <SkeletonText lines={10} />

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Empty = () => (
  <div className="glass-panel rounded-2xl p-8 text-gray-400">Pricing tier not found.</div>
)

export const Success = ({ pricingTier }) => {
  const [updatePricingTier, { loading, error }] = useMutation(UPDATE_MUTATION, {
    onCompleted: () => {
      toast.success('Pricing tier updated')
      navigate(routes.adminPricingTiers())
    },
    onError: (err) => toast.error(err.message),
  })

  const onSave = (input, id) => {
    updatePricingTier({ variables: { id, input } })
  }

  if (!pricingTier) {
    return <Empty />
  }

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white mb-6">Edit pricing tier #{pricingTier.id}</h2>
      <PricingTierForm pricingTier={pricingTier} onSave={onSave} error={error} loading={loading} />
    </div>
  )
}
