import { motion } from 'framer-motion'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ProjectData/ProjectDatasCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_PROJECT_DATA_MUTATION = gql`
  mutation DeleteProjectDataMutation($id: Int!) {
    deleteProjectData(id: $id) {
      id
    }
  }
`

const ProjectDatasList = ({ projectDatas }) => {
  const [deleteProjectData] = useMutation(DELETE_PROJECT_DATA_MUTATION, {
    onCompleted: () => {
      toast.success('ProjectData deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete projectData ' + id + '?')) {
      deleteProjectData({ variables: { id } })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'linear',
        duration: 0.8,
      }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      <div className="flex flex-col items-center justify-center">
        <p className="font-general-medium mb-2 text-left text-3xl font-bold text-expansion-orange  sm:text-4xl">
          Projects
        </p>
      </div>
      <div className="rw-segment rw-table-wrapper-responsive">
        <table className="rw-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Category</th>
              <th>Created at</th>

              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {projectDatas.map((projectData) => (
              <tr key={projectData.id}>
                <td>{truncate(projectData.id)}</td>
                <td>{truncate(projectData.title)}</td>
                <td>{truncate(projectData.category)}</td>
                <td>{timeTag(projectData.createdAt)}</td>

                <td>
                  <nav className="rw-table-actions">
                    <Link
                      to={routes.projectData({ id: projectData.id })}
                      title={'Show projectData ' + projectData.id + ' detail'}
                      className="rw-button rw-button-small"
                    >
                      Show
                    </Link>
                    <Link
                      to={routes.editProjectData({ id: projectData.id })}
                      title={'Edit projectData ' + projectData.id}
                      className="rw-button rw-button-small rw-button-blue"
                    >
                      Edit
                    </Link>

                    <button
                      type="button"
                      title={'Delete projectData ' + projectData.id}
                      className="rw-button rw-button-small rw-button-red"
                      onClick={() => onDeleteClick(projectData.id)}
                    >
                      Delete
                    </button>
                  </nav>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex w-full items-center justify-center">
        <Link to={routes.newProjectData()} title={'New Project '}>
          <button className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-pink-200 group-hover:from-pink-500 group-hover:to-orange-400">
            <span className="bold relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 ">
              Add Project
            </span>
          </button>
        </Link>
      </div>
    </motion.nav>
  )
}

export default ProjectDatasList
