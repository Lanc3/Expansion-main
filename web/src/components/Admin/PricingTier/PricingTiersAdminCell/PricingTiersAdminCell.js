import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'

export const QUERY = gql`
  query PricingTiersAdminQuery {
    pricingTiers {
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
  mutation DeletePricingTierAdmin($id: Int!) {
    deletePricingTier(id: $id) {
      id
    }
  }
`

function formatDate(iso) {
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

export const Loading = () => <SkeletonText lines={6} />

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Success = ({ pricingTiers }) => {
  const [deletePricingTier, { loading: deleting }] = useMutation(DELETE_MUTATION, {
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
    onCompleted: () => toast.success('Pricing tier deleted'),
    onError: (err) => toast.error(err.message),
  })

  const handleDelete = (id, name) => {
    if (!window.confirm(`Delete tier “${name || id}”? This cannot be undone.`)) {
      return
    }
    deletePricingTier({ variables: { id } })
  }

  if (!pricingTiers?.length) {
    return (
      <EmptyState
        title="No pricing tiers yet"
        description="Add tiers for the public Pricing page."
        actionLabel="New tier"
        actionTo={routes.adminNewPricingTier()}
      />
    )
  }

  const sorted = [...pricingTiers].sort((a, b) => a.order - b.order)

  return (
    <div className="overflow-x-auto -mx-2 sm:mx-0">
      <table className="w-full text-left text-sm border-collapse min-w-[800px]">
        <thead>
          <tr className="border-b border-glass-border text-gray-500 font-mono text-xs uppercase tracking-wide">
            <th className="py-3 pr-4">Order</th>
            <th className="py-3 pr-4">Name</th>
            <th className="py-3 pr-4">Price</th>
            <th className="py-3 pr-4">Popular</th>
            <th className="py-3 pr-4">Active</th>
            <th className="py-3 pr-4">Created</th>
            <th className="py-3 pr-0 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((row) => (
            <tr key={row.id} className="border-b border-glass-border/60 hover:bg-white/5">
              <td className="py-3 pr-4 text-gray-300 font-mono">{row.order}</td>
              <td className="py-3 pr-4 text-white font-medium">{row.name}</td>
              <td className="py-3 pr-4 text-gray-300">
                {row.price}
                <span className="text-gray-500">{row.unit}</span>
              </td>
              <td className="py-3 pr-4 text-gray-400">{row.isPopular ? 'Yes' : 'No'}</td>
              <td className="py-3 pr-4 text-gray-400">{row.isActive ? 'Yes' : 'No'}</td>
              <td className="py-3 pr-4 text-gray-400 whitespace-nowrap">{formatDate(row.createdAt)}</td>
              <td className="py-3 pr-0 text-right whitespace-nowrap">
                <Link
                  to={routes.adminPricingTier({ id: row.id })}
                  className="text-neon-primary hover:underline font-mono text-xs mr-3"
                >
                  View
                </Link>
                <Link
                  to={routes.adminEditPricingTier({ id: row.id })}
                  className="text-gray-300 hover:text-white font-mono text-xs mr-3"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  disabled={deleting}
                  onClick={() => handleDelete(row.id, row.name)}
                  className="text-red-400 hover:text-red-300 font-mono text-xs disabled:opacity-50"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
