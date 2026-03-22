import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { timeTag } from 'src/lib/formatters'

export const QUERY = gql`
  query AdminTechnologyById($id: Int!) {
    technology(id: $id) {
      id
      name
      icon
      category
      proficiency
      order
      isActive
      createdAt
    }
  }
`

const DELETE_TECHNOLOGY_FROM_DETAIL = gql`
  mutation AdminDeleteTechnologyFromDetail($id: Int!) {
    deleteTechnology(id: $id) {
      id
    }
  }
`

export const Loading = () => <SkeletonText lines={6} />

export const Empty = () => <EmptyState title="Technology not found" />

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Success = ({ technology }) => {
  const [deleteTechnology] = useMutation(DELETE_TECHNOLOGY_FROM_DETAIL, {
    onCompleted: () => {
      toast.success('Technology deleted')
      navigate(routes.adminTechnologies())
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete this technology?')) {
      deleteTechnology({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">{technology.name}</h2>
        </header>
        <dl>
          <dt className="rw-label">Id</dt>
          <dd style={{ margin: '0 0 1rem' }}>{technology.id}</dd>

          <dt className="rw-label">Name</dt>
          <dd style={{ margin: '0 0 1rem' }}>{technology.name}</dd>

          <dt className="rw-label">Icon</dt>
          <dd style={{ margin: '0 0 1rem' }}>{technology.icon}</dd>

          <dt className="rw-label">Category</dt>
          <dd style={{ margin: '0 0 1rem' }}>{technology.category}</dd>

          <dt className="rw-label">Proficiency</dt>
          <dd style={{ margin: '0 0 1rem' }}>{technology.proficiency}</dd>

          <dt className="rw-label">Order</dt>
          <dd style={{ margin: '0 0 1rem' }}>{technology.order}</dd>

          <dt className="rw-label">Active</dt>
          <dd style={{ margin: '0 0 1rem' }}>{technology.isActive ? 'yes' : 'no'}</dd>

          <dt className="rw-label">Created at</dt>
          <dd style={{ margin: '0 0 1rem' }}>{timeTag(technology.createdAt)}</dd>
        </dl>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditTechnology({ id: technology.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(technology.id)}
        >
          Delete
        </button>
        <Link to={routes.adminTechnologies()} className="rw-button">
          Back to list
        </Link>
      </nav>
    </>
  )
}
