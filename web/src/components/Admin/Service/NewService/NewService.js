import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ServiceForm from 'src/components/Admin/Service/ServiceForm/ServiceForm'

const CREATE_SERVICE_MUTATION = gql`
  mutation CreateServiceMutation($input: CreateServiceInput!) {
    createService(input: $input) {
      id
    }
  }
`

const NewService = () => {
  const [createService, { loading, error }] = useMutation(CREATE_SERVICE_MUTATION, {
    onCompleted: () => {
      toast.success('Service created')
      navigate(routes.adminServices())
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })

  const onSave = (input) => {
    createService({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New service</h2>
      </header>
      <div className="rw-segment-main">
        <ServiceForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewService
