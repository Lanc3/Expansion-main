import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { truncate } from 'src/lib/formatters'

export const QUERY = gql`
  query AdminServicesList {
    services {
      id
      title
      slug
      shortDescription
      icon
      order
      isActive
      createdAt
    }
  }
`

const DELETE_SERVICE_MUTATION = gql`
  mutation DeleteServiceMutation($id: Int!) {
    deleteService(id: $id) {
      id
    }
  }
`

export const Loading = () => <SkeletonText lines={5} />

export const Empty = () => (
  <EmptyState
    title="No services yet"
    actionLabel="Create one"
    actionTo={routes.adminNewService()}
  />
)

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Success = ({ services }) => {
  const [deleteService] = useMutation(DELETE_SERVICE_MUTATION, {
    onCompleted: () => {
      toast.success('Service deleted')
    },
    onError: (err) => {
      toast.error(err.message)
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete this service?')) {
      deleteService({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Services</h2>
      </div>
      <div className="rw-segment rw-table-wrapper-responsive">
        <table className="rw-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Slug</th>
              <th>Order</th>
              <th>Active</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>
                  <Link
                    to={routes.adminService({ id: service.id })}
                    className="rw-link"
                  >
                    {truncate(service.title)}
                  </Link>
                </td>
                <td>{truncate(service.slug)}</td>
                <td>{service.order}</td>
                <td>{service.isActive ? 'yes' : 'no'}</td>
                <td>
                  <nav className="rw-table-actions">
                    <Link
                      to={routes.adminEditService({ id: service.id })}
                      className="rw-button rw-button-small rw-button-blue"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="rw-button rw-button-small rw-button-red"
                      onClick={() => onDeleteClick(service.id)}
                    >
                      Delete
                    </button>
                  </nav>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rw-button-group mt-4">
        <Link to={routes.adminNewService()} className="rw-button rw-button-green">
          New service
        </Link>
      </div>
    </>
  )
}
