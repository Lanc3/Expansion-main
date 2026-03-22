import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'

export const QUERY = gql`
  query PricingTierAdminQuery($id: Int!) {
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

const DELETE_MUTATION = gql`
  mutation DeletePricingTierAdminDetail($id: Int!) {
    deletePricingTier(id: $id) {
      id
    }
  }
`

function formatDateTime(iso) {
  if (!iso) return '—'
  try {
    return new Date(iso).toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    })
  } catch {
    return iso
  }
}

function DetailRow({ term, children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[minmax(8rem,12rem)_1fr] gap-1 sm:gap-4 py-3 border-b border-glass-border/60 last:border-0">
      <dt className="font-mono text-xs text-gray-500 uppercase tracking-wide shrink-0">{term}</dt>
      <dd className="text-gray-200 whitespace-pre-wrap break-words">{children ?? '—'}</dd>
    </div>
  )
}

export const Loading = () => <SkeletonText lines={10} />

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Empty = () => (
  <div className="glass-panel rounded-2xl p-8 text-gray-400">Pricing tier not found.</div>
)

export const Success = ({ pricingTier }) => {
  const [deletePricingTier] = useMutation(DELETE_MUTATION, {
    onCompleted: () => {
      toast.success('Pricing tier deleted')
      navigate(routes.adminPricingTiers())
    },
    onError: (err) => toast.error(err.message),
  })

  const handleDelete = (id, name) => {
    if (!window.confirm(`Delete tier “${name || id}”?`)) return
    deletePricingTier({ variables: { id } })
  }

  if (!pricingTier) {
    return <Empty />
  }

  return (
    <div className="space-y-6">
      <div className="glass-panel rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white mb-6">Pricing tier #{pricingTier.id}</h2>
        <dl>
          <DetailRow term="Name">{pricingTier.name}</DetailRow>
          <DetailRow term="Description">{pricingTier.description}</DetailRow>
          <DetailRow term="Features">{pricingTier.features}</DetailRow>
          <DetailRow term="Price">{pricingTier.price}</DetailRow>
          <DetailRow term="Unit">{pricingTier.unit}</DetailRow>
          <DetailRow term="CTA">{pricingTier.ctaText}</DetailRow>
          <DetailRow term="Order">{pricingTier.order}</DetailRow>
          <DetailRow term="Popular">{pricingTier.isPopular ? 'Yes' : 'No'}</DetailRow>
          <DetailRow term="Active">{pricingTier.isActive ? 'Yes' : 'No'}</DetailRow>
          <DetailRow term="Created">{formatDateTime(pricingTier.createdAt)}</DetailRow>
        </dl>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditPricingTier({ id: pricingTier.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => handleDelete(pricingTier.id, pricingTier.name)}
        >
          Delete
        </button>
        <Link to={routes.adminPricingTiers()} className="rw-button">
          Back to list
        </Link>
      </nav>
    </div>
  )
}
