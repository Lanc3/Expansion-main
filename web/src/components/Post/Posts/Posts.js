import { motion } from 'framer-motion'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Post/PostsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
      id
    }
  }
`

const PostsList = ({ posts }) => {
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post deleted')
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
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deletePost({ variables: { id } })
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
          Aarons Blog Posts
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
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{truncate(post.id)}</td>
                <td>{truncate(post.title)}</td>
                <td>{truncate(post.body)}</td>
                <td>{timeTag(post.createdAt)}</td>
                <td>
                  <nav className="rw-table-actions">
                    <Link
                      to={routes.post({ id: post.id })}
                      title={'Show post ' + post.id + ' detail'}
                      className="rw-button rw-button-small"
                    >
                      Show
                    </Link>
                    <Link
                      to={routes.editPost({ id: post.id })}
                      title={'Edit post ' + post.id}
                      className="rw-button rw-button-small rw-button-blue"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      title={'Delete post ' + post.id}
                      className="rw-button rw-button-small rw-button-red"
                      onClick={() => onDeleteClick(post.id)}
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
          <Link to={routes.newPost()} title={'New Post '}>
            <button className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-pink-200 group-hover:from-pink-500 group-hover:to-orange-400">
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

export default PostsList
