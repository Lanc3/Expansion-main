export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
      likeAmount
    }
  }
`
import { ArticleListSkeleton } from 'src/components/SkeletonLoader/SkeletonLoader'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const Loading = () => <ArticleListSkeleton />

export const Empty = () => <EmptyState title="No articles yet" />

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

import ArticleList from '../ArticleList/ArticleList'
export const Success = ({ articles }) => {
  return (
    <div className="">
      <ArticleList articles={articles} />
    </div>
  )
}
