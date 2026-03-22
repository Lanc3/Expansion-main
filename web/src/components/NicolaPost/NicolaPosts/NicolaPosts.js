import { motion } from 'framer-motion'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/NicolaPost/NicolaPostsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_NICOLA_POST_MUTATION = gql`
  mutation DeleteNicolaPostMutation($id: Int!) {
    deleteNicolaPost(id: $id) {
      id
    }
  }
`

const NicolaPostsList = ({ nicolaPosts }) => {
  const [deleteNicolaPost] = useMutation(DELETE_NICOLA_POST_MUTATION, {
    onCompleted: () => {
      toast.success('NicolaPost deleted')
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
    if (confirm('Are you sure you want to delete nicolaPost ' + id + '?')) {
      deleteNicolaPost({ variables: { id } })
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
        <p className="font-general-medium mb-2 text-left text-3xl font-bold text-expansion-orange   sm:text-4xl">
          Nicolas Blog Posts
        </p>
      </div>
      <div className="rw-segment rw-table-wrapper-responsive">
        <table className="rw-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>Created at</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {nicolaPosts.map((nicolaPost) => (
              <tr key={nicolaPost.id}>
                <td>{truncate(nicolaPost.id)}</td>
                <td>{truncate(nicolaPost.title)}</td>
                <td>{truncate(nicolaPost.body)}</td>
                <td>{timeTag(nicolaPost.createdAt)}</td>
                <td>
                  <nav className="rw-table-actions">
                    <Link
                      to={routes.nicolaPost({ id: nicolaPost.id })}
                      title={'Show nicolaPost ' + nicolaPost.id + ' detail'}
                      className="rw-button rw-button-small"
                    >
                      Show
                    </Link>
                    <Link
                      to={routes.editNicolaPost({ id: nicolaPost.id })}
                      title={'Edit nicolaPost ' + nicolaPost.id}
                      className="rw-button rw-button-small rw-button-blue"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      title={'Delete nicolaPost ' + nicolaPost.id}
                      className="rw-button rw-button-small rw-button-red"
                      onClick={() => onDeleteClick(nicolaPost.id)}
                    >
                      Delete
                    </button>
                  </nav>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex w-full items-center justify-center">
          <Link to={routes.newNicolaPost()} title={'New Post'}>
            <button className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-pink-200 group-hover:from-pink-500 group-hover:to-orange-400 ">
              <span className="bold relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 ">
                Add New Post
              </span>
            </button>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

export default NicolaPostsList
