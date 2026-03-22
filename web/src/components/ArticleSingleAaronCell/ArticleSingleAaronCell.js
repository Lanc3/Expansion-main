import AaronSinglePage from '../AaronSinglePage/AaronSinglePage'
import { SingleArticleSkeleton } from 'src/components/SkeletonLoader/SkeletonLoader'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'
export const QUERY = gql`
  query ArticleQueryAaron($id: Int!) {
    article: post(id: $id) {
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
      <AaronSinglePage article={article} />
    </div>
  )
}
