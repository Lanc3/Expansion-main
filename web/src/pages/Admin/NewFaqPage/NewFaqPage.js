import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FaqForm from 'src/components/Admin/Faq/FaqForm/FaqForm'

const CREATE_FAQ_MUTATION = gql`
  mutation AdminCreateFaq($input: CreateFaqInput!) {
    createFaq(input: $input) {
      id
    }
  }
`

const NewFaqPage = () => {
  const [createFaq, { loading, error }] = useMutation(CREATE_FAQ_MUTATION, {
    onCompleted: (data) => {
      toast.success('FAQ created')
      navigate(routes.adminFaq({ id: data.createFaq.id }))
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })

  const onSave = (input) => {
    createFaq({ variables: { input } })
  }

  return (
    <div className="glass-panel rounded-2xl p-6 space-y-4">
      <h1 className="rw-heading rw-heading-secondary">New FAQ</h1>
      <FaqForm onSave={onSave} error={error} loading={loading} />
    </div>
  )
}

export default NewFaqPage
