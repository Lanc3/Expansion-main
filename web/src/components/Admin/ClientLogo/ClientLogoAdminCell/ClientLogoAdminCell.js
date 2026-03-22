import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'

export const QUERY = gql`
  query ClientLogoAdminQuery($id: Int!) {
    clientLogo: clientLogo(id: $id) {
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
  mutation DeleteClientLogoAdminDetail($id: Int!) {
    deleteClientLogo(id: $id) {
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

export const Loading = () => <SkeletonText lines={8} />

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Empty = () => (
  <div className="glass-panel rounded-2xl p-8 text-gray-400">Client logo not found.</div>
)

export const Success = ({ clientLogo }) => {
  const [deleteClientLogo] = useMutation(DELETE_MUTATION, {
    onCompleted: () => {
      toast.success('Client logo deleted')
      navigate(routes.adminClientLogos())
    },
    onError: (err) => toast.error(err.message),
  })

  const handleDelete = (id, name) => {
    if (!window.confirm(`Delete logo “${name || id}”?`)) return
    deleteClientLogo({ variables: { id } })
  }

  if (!clientLogo) {
    return <Empty />
  }

  return (
    <div className="space-y-6">
      <div className="glass-panel rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white mb-6">Client logo #{clientLogo.id}</h2>
        <div className="mb-6">
          <img
            src={clientLogo.logoUrl}
            alt={clientLogo.name}
            className="h-12 w-auto max-w-[200px] object-contain"
          />
        </div>
        <dl>
          <DetailRow term="Name">{clientLogo.name}</DetailRow>
          <DetailRow term="Logo URL">{clientLogo.logoUrl}</DetailRow>
          <DetailRow term="Website">{clientLogo.websiteUrl}</DetailRow>
          <DetailRow term="Order">{clientLogo.order}</DetailRow>
          <DetailRow term="Active">{clientLogo.isActive ? 'Yes' : 'No'}</DetailRow>
          <DetailRow term="Created">{formatDateTime(clientLogo.createdAt)}</DetailRow>
        </dl>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditClientLogo({ id: clientLogo.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => handleDelete(clientLogo.id, clientLogo.name)}
        >
          Delete
        </button>
        <Link to={routes.adminClientLogos()} className="rw-button">
          Back to list
        </Link>
      </nav>
    </div>
  )
}
