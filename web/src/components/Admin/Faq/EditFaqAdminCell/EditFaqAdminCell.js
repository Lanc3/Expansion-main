import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FaqForm from 'src/components/Admin/Faq/FaqForm/FaqForm'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'

export const QUERY = gql`
  query AdminEditFaq($id: Int!) {
    faq: faq(id: $id) {
      id
      question
      answer
      category
      order
      isActive
    }
  }
`

const UPDATE_FAQ_MUTATION = gql`
  mutation AdminUpdateFaq($id: Int!, $input: UpdateFaqInput!) {
    updateFaq(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <SkeletonText lines={6} />

export const Empty = () => <ErrorState message="FAQ not found" />

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ faq }) => {
  const [updateFaq, { loading, error }] = useMutation(UPDATE_FAQ_MUTATION, {
    onCompleted: () => {
      toast.success('FAQ updated')
      navigate(routes.adminFaqs())
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })

  if (!faq) {
    return <ErrorState message="FAQ not found" />
  }

  const onSave = (input, id) => {
    updateFaq({ variables: { id, input } })
  }

  return (
    <div className="rw-segment space-y-4">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit FAQ #{faq.id}</h2>
      </header>
      <div className="rw-segment-main">
        <FaqForm faq={faq} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
