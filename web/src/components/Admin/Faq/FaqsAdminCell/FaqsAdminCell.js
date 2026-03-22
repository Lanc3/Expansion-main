import { Link, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import { truncate } from 'src/lib/formatters'

export const QUERY = gql`
  query AdminFaqsList {
    faqs {
      id
      question
      category
      order
      isActive
    }
  }
`

const DELETE_FAQ_MUTATION = gql`
  mutation AdminDeleteFaq($id: Int!) {
    deleteFaq(id: $id) {
      id
    }
  }
`

export const Loading = () => <SkeletonText lines={5} />

export const Empty = () => (
  <EmptyState
    title="No FAQs yet"
    actionLabel="Add FAQ"
    actionTo={routes.adminNewFaq()}
  />
)

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ faqs }) => {
  const [deleteFaq] = useMutation(DELETE_FAQ_MUTATION, {
    onCompleted: () => {
      toast.success('FAQ deleted')
    },
    onError: (err) => {
      toast.error(err.message)
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Delete this FAQ?')) {
      deleteFaq({ variables: { id } })
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="rw-heading rw-heading-secondary">FAQs</h1>
        <Link
          to={routes.adminNewFaq()}
          className="rw-button rw-button-small rw-button-green"
        >
          New FAQ
        </Link>
      </div>

      <div className="rw-segment rw-table-wrapper-responsive">
        <table className="rw-table">
          <thead>
            <tr>
              <th>Question</th>
              <th>Category</th>
              <th>Order</th>
              <th>Active</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {faqs.map((row) => (
              <tr key={row.id}>
                <td>{truncate(row.question)}</td>
                <td>{row.category}</td>
                <td>{row.order}</td>
                <td>{row.isActive ? 'Yes' : 'No'}</td>
                <td>
                  <nav className="rw-table-actions">
                    <Link
                      to={routes.adminFaq({ id: row.id })}
                      className="rw-button rw-button-small"
                    >
                      Show
                    </Link>
                    <Link
                      to={routes.adminEditFaq({ id: row.id })}
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
