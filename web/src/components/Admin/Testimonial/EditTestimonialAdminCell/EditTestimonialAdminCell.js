import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TestimonialForm from 'src/components/Admin/Testimonial/TestimonialForm/TestimonialForm'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'

export const QUERY = gql`
  query AdminEditTestimonial($id: Int!) {
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
    }
  }
`

const UPDATE_TESTIMONIAL_MUTATION = gql`
  mutation AdminUpdateTestimonial($id: Int!, $input: UpdateTestimonialInput!) {
    updateTestimonial(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <SkeletonText lines={6} />

export const Empty = () => <ErrorState message="Testimonial not found" />

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ testimonial }) => {
  const [updateTestimonial, { loading, error }] = useMutation(
    UPDATE_TESTIMONIAL_MUTATION,
    {
      onCompleted: () => {
        toast.success('Testimonial updated')
        navigate(routes.adminTestimonials())
      },
      onError: (err) => {
        toast.error(err.message)
      },
    }
  )

  if (!testimonial) {
    return <ErrorState message="Testimonial not found" />
  }

  const onSave = (input, id) => {
    updateTestimonial({ variables: { id, input } })
  }

  return (
    <div className="rw-segment space-y-4">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit testimonial #{testimonial.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TestimonialForm
          testimonial={testimonial}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
