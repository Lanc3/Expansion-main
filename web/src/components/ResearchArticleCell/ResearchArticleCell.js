import ResearchArticleLayout from 'src/components/ResearchArticleLayout/ResearchArticleLayout'
import { SingleArticleSkeleton } from 'src/components/SkeletonLoader/SkeletonLoader'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query ResearchArticleBySlug($slug: String!) {
    researchArticle(slug: $slug) {
      id
      slug
      title
      body
      excerpt
      tags
      publishedAt
      createdAt
      updatedAt
      Image
      authorName
      seoTitle
      seoDescription
      contentFormat
    }
  }
`

export const Loading = () => <SingleArticleSkeleton />

export const Empty = () => <EmptyState title="Article not found" />

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ researchArticle }) => {
  return (
    <ResearchArticleLayout article={researchArticle} draftMode={false} />
  )
}
