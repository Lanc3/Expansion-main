import { Link, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import { truncate } from 'src/lib/formatters'

export const QUERY = gql`
  query AdminTestimonialsList {
    testimonials {
      id
      clientName
      clientCompany
      rating
      isActive
    }
  }
`

const DELETE_TESTIMONIAL_MUTATION = gql`
  mutation AdminDeleteTestimonial($id: Int!) {
    deleteTestimonial(id: $id) {
      id
    }
  }
`

export const Loading = () => <SkeletonText lines={5} />

export const Empty = () => (
  <EmptyState
    title="No testimonials yet"
    actionLabel="Add testimonial"
    actionTo={routes.adminNewTestimonial()}
  />
)

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ testimonials }) => {
  const [deleteTestimonial] = useMutation(DELETE_TESTIMONIAL_MUTATION, {
    onCompleted: () => {
      toast.success('Testimonial deleted')
    },
    onError: (err) => {
      toast.error(err.message)
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Delete this testimonial?')) {
      deleteTestimonial({ variables: { id } })
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="rw-heading rw-heading-secondary">Testimonials</h1>
        <Link
          to={routes.adminNewTestimonial()}
          className="rw-button rw-button-small rw-button-green"
        >
          New testimonial
        </Link>
      </div>

      <div className="rw-segment rw-table-wrapper-responsive">
        <table className="rw-table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Company</th>
              <th>Rating</th>
              <th>Active</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((row) => (
              <tr key={row.id}>
                <td>{truncate(row.clientName)}</td>
                <td>{truncate(row.clientCompany)}</td>
                <td>{row.rating}</td>
                <td>{row.isActive ? 'Yes' : 'No'}</td>
                <td>
                  <nav className="rw-table-actions">
                    <Link
                      to={routes.adminTestimonial({ id: row.id })}
                      className="rw-button rw-button-small"
                    >
                      Show
                    </Link>
                    <Link
                      to={routes.adminEditTestimonial({ id: row.id })}
                      className="rw-button rw-button-small rw-button-blue"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="rw-button rw-button-small rw-button-red"
                      onClick={() => onDeleteClick(row.id)}
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
    </div>
  )
}
