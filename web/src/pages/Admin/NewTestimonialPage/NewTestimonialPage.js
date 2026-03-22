import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TestimonialForm from 'src/components/Admin/Testimonial/TestimonialForm/TestimonialForm'

const CREATE_TESTIMONIAL_MUTATION = gql`
  mutation AdminCreateTestimonial($input: CreateTestimonialInput!) {
    createTestimonial(input: $input) {
      id
    }
  }
`

const NewTestimonialPage = () => {
  const [createTestimonial, { loading, error }] = useMutation(
    CREATE_TESTIMONIAL_MUTATION,
    {
      onCompleted: (data) => {
        toast.success('Testimonial created')
        navigate(routes.adminTestimonial({ id: data.createTestimonial.id }))
      },
      onError: (err) => {
        toast.error(err.message)
      },
    }
  )

  const onSave = (input) => {
    createTestimonial({ variables: { input } })
  }

  return (
    <div className="glass-panel rounded-2xl p-6 space-y-4">
      <h1 className="rw-heading rw-heading-secondary">New testimonial</h1>
      <TestimonialForm onSave={onSave} error={error} loading={loading} />
    </div>
  )
}

export default NewTestimonialPage
