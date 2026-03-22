import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'

export const QUERY = gql`
  query LegalPageAdminQuery($id: Int!) {
    legalPage: legalPage(id: $id) {
      id
      slug
      title
      body
      isActive
      updatedAt
    }
  }
`

const DELETE_MUTATION = gql`
  mutation DeleteLegalPageAdminDetail($id: Int!) {
    deleteLegalPage(id: $id) {
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
  <div className="glass-panel rounded-2xl p-8 text-gray-400">Legal page not found.</div>
)

export const Success = ({ legalPage }) => {
  const [deleteLegalPage] = useMutation(DELETE_MUTATION, {
    onCompleted: () => {
      toast.success('Legal page deleted')
      navigate(routes.adminLegalPages())
    },
    onError: (err) => toast.error(err.message),
  })

  const handleDelete = (id, title) => {
    if (!window.confirm(`Delete “${title || id}”?`)) return
    deleteLegalPage({ variables: { id } })
  }

  if (!legalPage) {
    return <Empty />
  }

  return (
    <div className="space-y-6">
      <div className="glass-panel rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white mb-6">Legal page #{legalPage.id}</h2>
        <dl>
          <DetailRow term="Slug">{legalPage.slug}</DetailRow>
          <DetailRow term="Title">{legalPage.title}</DetailRow>
          <DetailRow term="Body">{legalPage.body}</DetailRow>
          <DetailRow term="Active">{legalPage.isActive ? 'Yes' : 'No'}</DetailRow>
          <DetailRow term="Updated">{formatDateTime(legalPage.updatedAt)}</DetailRow>
        </dl>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditLegalPage({ id: legalPage.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => handleDelete(legalPage.id, legalPage.title)}
        >
          Delete
        </button>
        <Link to={routes.legal({ slug: legalPage.slug })} className="rw-button">
          View on site
        </Link>
        <Link to={routes.adminLegalPages()} className="rw-button">
          Back to list
        </Link>
      </nav>
    </div>
  )
}
