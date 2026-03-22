import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_PROJECT_DATA_MUTATION = gql`
  mutation DeleteProjectDataMutation($id: Int!) {
    deleteProjectData(id: $id) {
      id
    }
  }
`

const ProjectData = ({ projectData }) => {
  const [deleteProjectData] = useMutation(DELETE_PROJECT_DATA_MUTATION, {
    onCompleted: () => {
      toast.success('ProjectData deleted')
      navigate(routes.projectDatas())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete projectData ' + id + '?')) {
      deleteProjectData({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ProjectData {projectData.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{projectData.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{projectData.title}</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{projectData.category}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(projectData.createdAt)}</td>
            </tr>
            <tr>
              <th>Image</th>
              <td>{projectData.image}</td>
            </tr>
            <tr>
              <th>Video</th>
              <td>{projectData.video}</td>
            </tr>
            <tr>
              <th>Client name</th>
              <td>{projectData.clientName}</td>
            </tr>
            <tr>
              <th>Client website</th>
              <td>{projectData.clientWebsite}</td>
            </tr>
            <tr>
              <th>Objective</th>
              <td>{projectData.objective}</td>
            </tr>
            <tr>
              <th>Tools</th>
              <td>{projectData.tools}</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>{projectData.body}</td>
            </tr>
            <tr>
              <th>By</th>
              <td>{projectData.by}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProjectData({ id: projectData.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(projectData.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ProjectData
