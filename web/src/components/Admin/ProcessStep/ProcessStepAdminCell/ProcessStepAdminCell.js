import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'

export const QUERY = gql`
  query ProcessStepAdminQuery($id: Int!) {
    processStep: processStep(id: $id) {
      id
      title
      description
      icon
      order
      isActive
      createdAt
    }
  }
`

const DELETE_MUTATION = gql`
  mutation DeleteProcessStepAdminDetail($id: Int!) {
    deleteProcessStep(id: $id) {
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
  <div className="glass-panel rounded-2xl p-8 text-gray-400">Process step not found.</div>
)

export const Success = ({ processStep }) => {
  const [deleteProcessStep] = useMutation(DELETE_MUTATION, {
    onCompleted: () => {
      toast.success('Process step deleted')
      navigate(routes.adminProcessSteps())
    },
    onError: (err) => toast.error(err.message),
  })

  const handleDelete = (id, title) => {
    if (!window.confirm(`Delete step “${title || id}”?`)) return
    deleteProcessStep({ variables: { id } })
  }

  if (!processStep) {
    return <Empty />
  }

  return (
    <div className="space-y-6">
      <div className="glass-panel rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white mb-6">Process step #{processStep.id}</h2>
        <dl>
          <DetailRow term="Title">{processStep.title}</DetailRow>
          <DetailRow term="Description">{processStep.description}</DetailRow>
          <DetailRow term="Icon">{processStep.icon}</DetailRow>
          <DetailRow term="Order">{processStep.order}</DetailRow>
          <DetailRow term="Active">{processStep.isActive ? 'Yes' : 'No'}</DetailRow>
          <DetailRow term="Created">{formatDateTime(processStep.createdAt)}</DetailRow>
        </dl>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditProcessStep({ id: processStep.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => handleDelete(processStep.id, processStep.title)}
        >
          Delete
        </button>
        <Link to={routes.adminProcessSteps()} className="rw-button">
          Back to list
        </Link>
      </nav>
    </div>
  )
}
