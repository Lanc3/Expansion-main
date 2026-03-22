import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TechnologyForm from 'src/components/Admin/Technology/TechnologyForm/TechnologyForm'

const CREATE_TECHNOLOGY_MUTATION = gql`
  mutation CreateTechnologyMutation($input: CreateTechnologyInput!) {
    createTechnology(input: $input) {
      id
    }
  }
`

const NewTechnology = () => {
  const [createTechnology, { loading, error }] = useMutation(
    CREATE_TECHNOLOGY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Technology created')
        navigate(routes.adminTechnologies())
      },
      onError: (err) => {
        toast.error(err.message)
      },
    }
  )

  const onSave = (input) => {
    createTechnology({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New technology</h2>
      </header>
      <div className="rw-segment-main">
        <TechnologyForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTechnology
