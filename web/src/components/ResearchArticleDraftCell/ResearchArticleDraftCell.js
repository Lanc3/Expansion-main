import ResearchArticleLayout from 'src/components/ResearchArticleLayout/ResearchArticleLayout'
import { SingleArticleSkeleton } from 'src/components/SkeletonLoader/SkeletonLoader'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query ResearchArticleDraftBySlug($slug: String!) {
    researchArticleDraft(slug: $slug) {
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
      published
    }
  }
`

export const Loading = () => <SingleArticleSkeleton />

export const Empty = () => <EmptyState title="Draft not found" />

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ researchArticleDraft }) => {
  return (
    <ResearchArticleLayout article={researchArticleDraft} draftMode />
  )
}
