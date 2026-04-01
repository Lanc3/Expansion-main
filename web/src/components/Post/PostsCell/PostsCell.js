import { Link, routes } from '@redwoodjs/router'

import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import Posts from 'src/components/Post/Posts'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query FindPosts {
    posts {
      id
      title
      slug
      body
      createdAt
      updatedAt
      published
      likeAmount
      Image
    }
  }
`

export const Loading = () => <SkeletonText lines={5} />

export const Empty = () => (
  <EmptyState
    title="No posts yet"
    actionLabel="Create one"
    actionTo={routes.newPost()}
  />
)

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ posts }) => {
  return <Posts posts={posts} />
}
