import { useMutation } from '@redwoodjs/web'
import { gql } from 'graphql-tag'

const LIKE_POST_MUTATION = gql`
  mutation LikePostMutationButton($id: Int!, $likeAmount: Int!) {
    updatePost(id: $id, input: { likeAmount: $likeAmount }) {
      id
      likeAmount
    }
  }
`

const LikeButton = ({ post }) => {
  const [likePost] = useMutation(LIKE_POST_MUTATION)

  const handleLike = async (postId) => {
    try {
      await likePost({
        variables: { id: postId, likeAmount: post.likeAmount + 1 },
      })
    } catch (error) {
      console.error('Error liking post:', error)
    }
  }

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>Likes: {post.likeAmount}</p>
      <button className="text-white" onClick={() => handleLike(post.id)}>
        Like
      </button>
    </div>
  )
}

export default LikeButton
