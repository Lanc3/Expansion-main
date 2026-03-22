import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import NicolaPost from 'src/components/NicolaPost/NicolaPost'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query FindNicolaPostById($id: Int!) {
    nicolaPost: nicolaPost(id: $id) {
      id
      title
      body
      createdAt
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

export const Success = ({ nicolaPost }) => {
  return <NicolaPost nicolaPost={nicolaPost} />
}
