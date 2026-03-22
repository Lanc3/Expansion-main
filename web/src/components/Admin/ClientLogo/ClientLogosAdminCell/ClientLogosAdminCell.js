import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'

export const QUERY = gql`
  query ClientLogosAdminQuery {
    clientLogos {
      id
      name
      logoUrl
      websiteUrl
      order
      isActive
      createdAt
    }
  }
`

const DELETE_MUTATION = gql`
  mutation DeleteClientLogoAdmin($id: Int!) {
    deleteClientLogo(id: $id) {
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

export const Success = ({ clientLogos }) => {
  const [deleteClientLogo, { loading: deleting }] = useMutation(DELETE_MUTATION, {
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
    onCompleted: () => toast.success('Client logo deleted'),
    onError: (err) => toast.error(err.message),
  })

  const handleDelete = (id, name) => {
    if (!window.confirm(`Delete logo “${name || id}”? This cannot be undone.`)) {
      return
    }
    deleteClientLogo({ variables: { id } })
  }

  if (!clientLogos?.length) {
    return (
      <EmptyState
        title="No client logos yet"
        description="Add logos for the homepage / trust section."
        actionLabel="New logo"
        actionTo={routes.adminNewClientLogo()}
      />
    )
  }

  const sorted = [...clientLogos].sort((a, b) => a.order - b.order)

  return (
    <div className="overflow-x-auto -mx-2 sm:mx-0">
      <table className="w-full text-left text-sm border-collapse min-w-[720px]">
        <thead>
          <tr className="border-b border-glass-border text-gray-500 font-mono text-xs uppercase tracking-wide">
            <th className="py-3 pr-4">Order</th>
            <th className="py-3 pr-4">Preview</th>
            <th className="py-3 pr-4">Name</th>
            <th className="py-3 pr-4">Website</th>
            <th className="py-3 pr-4">Active</th>
            <th className="py-3 pr-4">Created</th>
            <th className="py-3 pr-0 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((row) => (
            <tr key={row.id} className="border-b border-glass-border/60 hover:bg-white/5">
              <td className="py-3 pr-4 text-gray-300 font-mono">{row.order}</td>
              <td className="py-3 pr-4">
                <img
                  src={row.logoUrl}
                  alt=""
                  className="h-8 w-auto max-w-[100px] object-contain opacity-90"
                />
              </td>
              <td className="py-3 pr-4 text-white font-medium">{row.name}</td>
              <td className="py-3 pr-4 text-gray-400 text-xs truncate max-w-[160px]">
                {row.websiteUrl || '—'}
              </td>
              <td className="py-3 pr-4 text-gray-400">{row.isActive ? 'Yes' : 'No'}</td>
              <td className="py-3 pr-4 text-gray-400 whitespace-nowrap">{formatDate(row.createdAt)}</td>
              <td className="py-3 pr-0 text-right whitespace-nowrap">
                <Link
                  to={routes.adminClientLogo({ id: row.id })}
                  className="text-neon-primary hover:underline font-mono text-xs mr-3"
                >
                  View
                </Link>
                <Link
                  to={routes.adminEditClientLogo({ id: row.id })}
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
