import { Link, navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'

export const QUERY = gql`
  query AdminTestimonialDetail($id: Int!) {
    testimonial: testimonial(id: $id) {
      id
      clientName
      clientTitle
      clientCompany
      clientImage
      quote
      rating
      projectUrl
      order
      isActive
      createdAt
    }
  }
`

const DELETE_TESTIMONIAL_MUTATION = gql`
  mutation AdminDeleteTestimonialDetail($id: Int!) {
    deleteTestimonial(id: $id) {
      id
    }
  }
`

export const Loading = () => <SkeletonText lines={6} />

export const Empty = () => <EmptyState title="Testimonial not found" />

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ testimonial }) => {
  const [deleteTestimonial, { loading: deleting }] = useMutation(
    DELETE_TESTIMONIAL_MUTATION,
    {
      onCompleted: () => {
        toast.success('Testimonial deleted')
        navigate(routes.adminTestimonials())
      },
      onError: (err) => {
        toast.error(err.message)
      },
    }
  )

  if (!testimonial) {
    return <EmptyState title="Testimonial not found" />
  }

  const onDelete = () => {
    if (confirm('Delete this testimonial?')) {
      deleteTestimonial({ variables: { id: testimonial.id } })
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="rw-heading rw-heading-secondary">
          Testimonial #{testimonial.id}
        </h1>
        <nav className="rw-table-actions">
          <Link
            to={routes.adminTestimonials()}
            className="rw-button rw-button-small"
          >
            Back to list
          </Link>
          <Link
            to={routes.adminEditTestimonial({ id: testimonial.id })}
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
          <dt className="text-sm font-medium opacity-70">Client name</dt>
          <dd>{testimonial.clientName}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium opacity-70">Title</dt>
          <dd>{testimonial.clientTitle}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium opacity-70">Company</dt>
          <dd>{testimonial.clientCompany}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium opacity-70">Image</dt>
          <dd>{testimonial.clientImage || '—'}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium opacity-70">Quote</dt>
          <dd className="whitespace-pre-wrap">{testimonial.quote}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium opacity-70">Rating</dt>
          <dd>{testimonial.rating}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium opacity-70">Project URL</dt>
          <dd>{testimonial.projectUrl || '—'}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium opacity-70">Order</dt>
          <dd>{testimonial.order}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium opacity-70">Active</dt>
          <dd>{testimonial.isActive ? 'Yes' : 'No'}</dd>
        </div>
      </dl>
    </div>
  )
}
