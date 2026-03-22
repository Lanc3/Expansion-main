import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_NICOLA_POST_MUTATION = gql`
  mutation DeleteNicolaPostMutation($id: Int!) {
    deleteNicolaPost(id: $id) {
      id
    }
  }
`

const NicolaPost = ({ nicolaPost }) => {
  const [deleteNicolaPost] = useMutation(DELETE_NICOLA_POST_MUTATION, {
    onCompleted: () => {
      toast.success('NicolaPost deleted')
      navigate(routes.nicolaPosts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete nicolaPost ' + id + '?')) {
      deleteNicolaPost({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            NicolaPost {nicolaPost.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{nicolaPost.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{nicolaPost.title}</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>{nicolaPost.body}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(nicolaPost.createdAt)}</td>
            </tr>
            <tr>
              <th>Like amount</th>
              <td>{nicolaPost.likeAmount}</td>
            </tr>
            <tr>
              <th>Image</th>
              <td>{nicolaPost.Image}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editNicolaPost({ id: nicolaPost.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(nicolaPost.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default NicolaPost
