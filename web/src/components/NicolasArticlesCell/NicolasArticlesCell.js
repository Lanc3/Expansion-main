export const QUERY = gql`
  query NicolasArticlesQuery {
    articles: nicolaPosts {
      id
      title
      body
      createdAt
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
import ArticleItem from '../ArticleItem/ArticleItem'
export const Success = ({ articles }) => {
  return (
    <ul>
      {articles.map((article) => (
        // eslint-disable-next-line react/jsx-key
        <ArticleItem article={article} notAaron={true} />
      ))}
    </ul>
  )
}
