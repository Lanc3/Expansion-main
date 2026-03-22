import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { truncate } from 'src/lib/formatters'

export const QUERY = gql`
  query AdminTechnologiesList {
    technologies {
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

const DELETE_TECHNOLOGY_MUTATION = gql`
  mutation DeleteTechnologyMutation($id: Int!) {
    deleteTechnology(id: $id) {
      id
    }
  }
`

export const Loading = () => <SkeletonText lines={5} />

export const Empty = () => (
  <EmptyState
    title="No technologies yet"
    actionLabel="Create one"
    actionTo={routes.adminNewTechnology()}
  />
)

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Success = ({ technologies }) => {
  const [deleteTechnology] = useMutation(DELETE_TECHNOLOGY_MUTATION, {
    onCompleted: () => {
      toast.success('Technology deleted')
    },
    onError: (err) => {
      toast.error(err.message)
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete this technology?')) {
      deleteTechnology({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Technologies</h2>
      </div>
      <div className="rw-segment rw-table-wrapper-responsive">
        <table className="rw-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Order</th>
              <th>Active</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {technologies.map((technology) => (
              <tr key={technology.id}>
                <td>
                  <Link
                    to={routes.adminTechnology({ id: technology.id })}
                    className="rw-link"
                  >
                    {truncate(technology.name)}
                  </Link>
                </td>
                <td>{truncate(technology.category)}</td>
                <td>{technology.order}</td>
                <td>{technology.isActive ? 'yes' : 'no'}</td>
                <td>
                  <nav className="rw-table-actions">
                    <Link
                      to={routes.adminEditTechnology({ id: technology.id })}
                      className="rw-button rw-button-small rw-button-blue"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="rw-button rw-button-small rw-button-red"
                      onClick={() => onDeleteClick(technology.id)}
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
        <Link
          to={routes.adminNewTechnology()}
          className="rw-button rw-button-green"
        >
          New technology
        </Link>
      </div>
    </>
  )
}
