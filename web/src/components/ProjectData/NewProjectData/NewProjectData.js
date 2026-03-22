import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProjectDataForm from 'src/components/ProjectData/ProjectDataForm'

const CREATE_PROJECT_DATA_MUTATION = gql`
  mutation CreateProjectDataMutation($input: CreateProjectDataInput!) {
    createProjectData(input: $input) {
      id
    }
  }
`

const NewProjectData = () => {
  const [createProjectData, { loading, error }] = useMutation(
    CREATE_PROJECT_DATA_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProjectData created')
        navigate(routes.projectDatas())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createProjectData({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ProjectData</h2>
      </header>
      <div className="rw-segment-main">
        <ProjectDataForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewProjectData
