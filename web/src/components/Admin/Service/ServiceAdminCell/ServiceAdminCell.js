import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { timeTag } from 'src/lib/formatters'

export const QUERY = gql`
  query AdminServiceById($id: Int!) {
    service(id: $id) {
      id
      title
      slug
      shortDescription
      fullDescription
      icon
      image
      order
      isActive
      createdAt
      updatedAt
    }
  }
`

const DELETE_SERVICE_MUTATION = gql`
  mutation AdminDeleteServiceFromDetail($id: Int!) {
    deleteService(id: $id) {
      id
    }
  }
`

export const Loading = () => <SkeletonText lines={6} />

export const Empty = () => <EmptyState title="Service not found" />

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Success = ({ service }) => {
  const [deleteService] = useMutation(DELETE_SERVICE_MUTATION, {
    onCompleted: () => {
      toast.success('Service deleted')
      navigate(routes.adminServices())
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete this service?')) {
      deleteService({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">{service.title}</h2>
        </header>
        <dl>
          <dt className="rw-label">Id</dt>
          <dd style={{ margin: '0 0 1rem' }}>{service.id}</dd>

          <dt className="rw-label">Title</dt>
          <dd style={{ margin: '0 0 1rem' }}>{service.title}</dd>

          <dt className="rw-label">Slug</dt>
          <dd style={{ margin: '0 0 1rem' }}>{service.slug}</dd>

          <dt className="rw-label">Short description</dt>
          <dd style={{ margin: '0 0 1rem' }}>{service.shortDescription}</dd>

          <dt className="rw-label">Full description</dt>
          <dd style={{ margin: '0 0 1rem', whiteSpace: 'pre-wrap' }}>
            {service.fullDescription}
          </dd>

          <dt className="rw-label">Icon</dt>
          <dd style={{ margin: '0 0 1rem' }}>{service.icon}</dd>

          <dt className="rw-label">Image</dt>
          <dd style={{ margin: '0 0 1rem' }}>{service.image ?? '—'}</dd>

          <dt className="rw-label">Order</dt>
          <dd style={{ margin: '0 0 1rem' }}>{service.order}</dd>

          <dt className="rw-label">Active</dt>
          <dd style={{ margin: '0 0 1rem' }}>{service.isActive ? 'yes' : 'no'}</dd>

          <dt className="rw-label">Created at</dt>
          <dd style={{ margin: '0 0 1rem' }}>{timeTag(service.createdAt)}</dd>

          <dt className="rw-label">Updated at</dt>
          <dd style={{ margin: '0 0 1rem' }}>{timeTag(service.updatedAt)}</dd>
        </dl>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditService({ id: service.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(service.id)}
        >
          Delete
        </button>
        <Link to={routes.adminServices()} className="rw-button">
          Back to list
        </Link>
      </nav>
    </>
  )
}
