import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'

export const QUERY = gql`
  query LegalPagesAdminQuery {
    legalPages {
      id
      slug
      title
      isActive
      updatedAt
    }
  }
`

const DELETE_MUTATION = gql`
  mutation DeleteLegalPageAdmin($id: Int!) {
    deleteLegalPage(id: $id) {
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

export const Success = ({ legalPages }) => {
  const [deleteLegalPage, { loading: deleting }] = useMutation(DELETE_MUTATION, {
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
    onCompleted: () => toast.success('Legal page deleted'),
    onError: (err) => toast.error(err.message),
  })

  const handleDelete = (id, title) => {
    if (!window.confirm(`Delete “${title || id}”? This cannot be undone.`)) {
      return
    }
    deleteLegalPage({ variables: { id } })
  }

  if (!legalPages?.length) {
    return (
      <EmptyState
        title="No legal pages yet"
        description="Create pages for Privacy, Terms, and other policies."
        actionLabel="New legal page"
        actionTo={routes.adminNewLegalPage()}
      />
    )
  }

  const sorted = [...legalPages].sort((a, b) => a.slug.localeCompare(b.slug))

  return (
    <div className="overflow-x-auto -mx-2 sm:mx-0">
      <table className="w-full text-left text-sm border-collapse min-w-[640px]">
        <thead>
          <tr className="border-b border-glass-border text-gray-500 font-mono text-xs uppercase tracking-wide">
            <th className="py-3 pr-4">Slug</th>
            <th className="py-3 pr-4">Title</th>
            <th className="py-3 pr-4">Active</th>
            <th className="py-3 pr-4">Updated</th>
            <th className="py-3 pr-0 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((row) => (
            <tr key={row.id} className="border-b border-glass-border/60 hover:bg-white/5">
              <td className="py-3 pr-4 text-neon-primary font-mono text-xs">{row.slug}</td>
              <td className="py-3 pr-4 text-white font-medium">{row.title}</td>
              <td className="py-3 pr-4 text-gray-400">{row.isActive ? 'Yes' : 'No'}</td>
              <td className="py-3 pr-4 text-gray-400 whitespace-nowrap">{formatDate(row.updatedAt)}</td>
              <td className="py-3 pr-0 text-right whitespace-nowrap">
                <Link
                  to={routes.adminLegalPage({ id: row.id })}
                  className="text-neon-primary hover:underline font-mono text-xs mr-3"
                >
                  View
                </Link>
                <Link
                  to={routes.adminEditLegalPage({ id: row.id })}
                  className="text-gray-300 hover:text-white font-mono text-xs mr-3"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  disabled={deleting}
                  onClick={() => handleDelete(row.id, row.title)}
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
