import { Link, navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'

export const QUERY = gql`
  query AdminFaqDetail($id: Int!) {
    faq: faq(id: $id) {
      id
      question
      answer
      category
      order
      isActive
      createdAt
    }
  }
`

const DELETE_FAQ_MUTATION = gql`
  mutation AdminDeleteFaqDetail($id: Int!) {
    deleteFaq(id: $id) {
      id
    }
  }
`

export const Loading = () => <SkeletonText lines={6} />

export const Empty = () => <EmptyState title="FAQ not found" />

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ faq }) => {
  const [deleteFaq, { loading: deleting }] = useMutation(DELETE_FAQ_MUTATION, {
    onCompleted: () => {
      toast.success('FAQ deleted')
      navigate(routes.adminFaqs())
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })

  if (!faq) {
    return <EmptyState title="FAQ not found" />
  }

  const onDelete = () => {
    if (confirm('Delete this FAQ?')) {
      deleteFaq({ variables: { id: faq.id } })
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="rw-heading rw-heading-secondary">FAQ #{faq.id}</h1>
        <nav className="rw-table-actions">
          <Link to={routes.adminFaqs()} className="rw-button rw-button-small">
            Back to list
          </Link>
          <Link
            to={routes.adminEditFaq({ id: faq.id })}
            className="rw-button rw-button-small rw-button-blue"
          >
            Edit
          </Link>
          <button
            type="button"
            disabled={deleting}
            className="rw-button rw-button-small rw-button-red"
            onClick={onDelete}
          >
            Delete
          </button>
        </nav>
      </div>

      <dl className="rw-segment rw-text-sm space-y-2">
        <div>
          <dt className="text-sm font-medium opacity-70">Question</dt>
          <dd>{faq.question}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium opacity-70">Answer</dt>
          <dd className="whitespace-pre-wrap">{faq.answer}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium opacity-70">Category</dt>
          <dd>{faq.category}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium opacity-70">Order</dt>
          <dd>{faq.order}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium opacity-70">Active</dt>
          <dd>{faq.isActive ? 'Yes' : 'No'}</dd>
        </div>
      </dl>
    </div>
  )
}
