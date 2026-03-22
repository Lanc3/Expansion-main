import NicolaSinglePage from '../NicolaSinglePage/NicolaSinglePage'

import { SingleArticleSkeleton } from 'src/components/SkeletonLoader/SkeletonLoader'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query ArticleQueryNicola($id: Int!) {
    article: nicolaPost(id: $id) {
      id
      title
      body
      createdAt
      likeAmount
    }
  }
`

export const Loading = () => <SingleArticleSkeleton />

export const Empty = () => <EmptyState title="Article not found" />

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ article }) => {
  return (
    <div>
      <NicolaSinglePage article={article} />
    </div>
  )
}
