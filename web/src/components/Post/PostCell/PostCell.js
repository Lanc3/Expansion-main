import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import Post from 'src/components/Post/Post'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query FindPostById($id: Int!) {
    post: post(id: $id) {
      id
      title
      slug
      body
      createdAt
      published
      likeAmount
      Image
    }
  }
`

export const Loading = () => <SkeletonText lines={4} />

export const Empty = () => <EmptyState title="Post not found" />

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ post }) => {
  return <Post post={post} />
}
