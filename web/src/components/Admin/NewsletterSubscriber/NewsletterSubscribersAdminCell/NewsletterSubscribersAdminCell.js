import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query NewsletterSubscribersAdminQuery {
    newsletterSubscribers {
      id
      email
      isActive
      createdAt
    }
  }
`

const UPDATE_MUTATION = gql`
  mutation UpdateNewsletterSubscriberAdmin($id: Int!, $input: UpdateNewsletterSubscriberInput!) {
    updateNewsletterSubscriber(id: $id, input: $input) {
      id
      isActive
    }
  }
`

const DELETE_MUTATION = gql`
  mutation DeleteNewsletterSubscriberAdmin($id: Int!) {
    deleteNewsletterSubscriber(id: $id) {
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

export const Empty = () => (
  <EmptyState title="No newsletter subscribers" description="Signups will appear here." />
)

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Success = ({ newsletterSubscribers }) => {
  const [updateNewsletterSubscriber, { loading: updating }] = useMutation(UPDATE_MUTATION, {
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
    onError: (err) => toast.error(err.message),
  })

  const [deleteNewsletterSubscriber, { loading: deleting }] = useMutation(DELETE_MUTATION, {
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
    onCompleted: () => toast.success('Subscriber removed'),
    onError: (err) => toast.error(err.message),
  })

  const toggleActive = (id, isActive) => {
    updateNewsletterSubscriber({
      variables: { id, input: { isActive: !isActive } },
      onCompleted: () => toast.success(isActive ? 'Marked inactive' : 'Marked active'),
    })
  }

  const handleDelete = (id, email) => {
    if (!window.confirm(`Remove ${email} from the newsletter list?`)) {
      return
    }
    deleteNewsletterSubscriber({ variables: { id } })
  }

  const sorted = [...newsletterSubscribers].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  )

  return (
    <div className="overflow-x-auto -mx-2 sm:mx-0">
      <table className="w-full text-left text-sm border-collapse min-w-[520px]">
        <thead>
          <tr className="border-b border-glass-border text-gray-500 font-mono text-xs uppercase tracking-wide">
            <th className="py-3 pr-4">Email</th>
            <th className="py-3 pr-4">Active</th>
            <th className="py-3 pr-4">Subscribed</th>
            <th className="py-3 pr-0 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((row) => (
            <tr key={row.id} className="border-b border-glass-border/60 hover:bg-white/5">
              <td className="py-3 pr-4 text-gray-200">{row.email}</td>
              <td className="py-3 pr-4">
                <button
                  type="button"
                  disabled={updating}
                  onClick={() => toggleActive(row.id, row.isActive)}
                  className={`rounded-full px-3 py-1 text-xs font-mono border transition-colors disabled:opacity-50 ${
                    row.isActive
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30'
                      : 'bg-gray-600/30 text-gray-400 border-gray-600/50 hover:bg-gray-600/40'
                  }`}
                  aria-pressed={row.isActive}
                >
                  {row.isActive ? 'Active' : 'Inactive'}
                </button>
              </td>
              <td className="py-3 pr-4 text-gray-400 whitespace-nowrap">{formatDate(row.createdAt)}</td>
              <td className="py-3 pr-0 text-right">
                <button
                  type="button"
                  disabled={deleting}
                  onClick={() => handleDelete(row.id, row.email)}
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
