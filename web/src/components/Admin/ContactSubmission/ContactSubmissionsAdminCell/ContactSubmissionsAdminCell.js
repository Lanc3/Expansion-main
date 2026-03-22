import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query ContactSubmissionsAdminQuery {
    contactSubmissions {
      id
      name
      email
      company
      serviceInterest
      status
      createdAt
    }
  }
`

const DELETE_MUTATION = gql`
  mutation DeleteContactSubmissionAdmin($id: Int!) {
    deleteContactSubmission(id: $id) {
      id
    }
  }
`

function statusBadgeClass(status) {
  const s = (status || '').toLowerCase()
  if (s === 'new') return 'bg-orange-500/20 text-orange-300 border-orange-500/40'
  if (s === 'contacted') return 'bg-blue-500/20 text-blue-300 border-blue-500/40'
  if (s === 'qualified') return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
  if (s.startsWith('closed')) return 'bg-gray-500/20 text-gray-300 border-gray-500/40'
  if (s === 'proposal_sent') return 'bg-violet-500/20 text-violet-300 border-violet-500/40'
  return 'bg-gray-600/30 text-gray-400 border-gray-600/50'
}

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

export const Empty = () => (
  <EmptyState title="No contact submissions yet" description="Submissions from the contact form will appear here." />
)

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Success = ({ contactSubmissions }) => {
  const [deleteContactSubmission, { loading: deleting }] = useMutation(DELETE_MUTATION, {
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
    onCompleted: () => toast.success('Submission deleted'),
    onError: (err) => toast.error(err.message),
  })

  const handleDelete = (id, name) => {
    if (!window.confirm(`Delete submission from ${name || 'this contact'}? This cannot be undone.`)) {
      return
    }
    deleteContactSubmission({ variables: { id } })
  }

  const sorted = [...contactSubmissions].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  )

  return (
    <div className="overflow-x-auto -mx-2 sm:mx-0">
      <table className="w-full text-left text-sm border-collapse min-w-[640px]">
        <thead>
          <tr className="border-b border-glass-border text-gray-500 font-mono text-xs uppercase tracking-wide">
            <th className="py-3 pr-4">Name</th>
            <th className="py-3 pr-4">Email</th>
            <th className="py-3 pr-4">Service</th>
            <th className="py-3 pr-4">Status</th>
            <th className="py-3 pr-4">Date</th>
            <th className="py-3 pr-0 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((row) => (
            <tr key={row.id} className="border-b border-glass-border/60 hover:bg-white/5">
              <td className="py-3 pr-4 text-white font-medium">{row.name}</td>
              <td className="py-3 pr-4 text-gray-300">{row.email}</td>
              <td className="py-3 pr-4 text-gray-400">{row.serviceInterest || '—'}</td>
              <td className="py-3 pr-4">
                <span
                  className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-mono ${statusBadgeClass(row.status)}`}
                >
                  {row.status || '—'}
                </span>
              </td>
              <td className="py-3 pr-4 text-gray-400 whitespace-nowrap">{formatDate(row.createdAt)}</td>
              <td className="py-3 pr-0 text-right whitespace-nowrap">
                <Link
                  to={routes.adminContactSubmission({ id: row.id })}
                  className="text-neon-primary hover:underline font-mono text-xs mr-3"
                >
                  View
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
