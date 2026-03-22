import { useMutation } from '@redwoodjs/web'
import { gql } from 'graphql-tag'
import { toast } from '@redwoodjs/web/toast'

import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query EditPostById($id: Int!) {
    post: post(id: $id) {
      id
      title
      body
      createdAt
      likeAmount
      Image
    }
  }
`

const LIKE_POST_MUTATION = gql`
  mutation LikePostMutationCell($id: Int!, $likeAmount: Int!) {
    updatePost(id: $id, input: { likeAmount: $likeAmount }) {
      id
      likeAmount
    }
  }
`

export const Loading = () => <div className="skeleton w-16 h-8 rounded" />

export const Empty = () => <span />

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ post }) => {
  const [updatePost] = useMutation(LIKE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post updated')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (id) => {
    updatePost({ variables: { id, likeAmount: post.likeAmount + 1 } })
  }
  return (
    <div>
      <button onClick={() => onSave(post.id)} className="text-white">
        Like
      </button>
    </div>
  )
}
