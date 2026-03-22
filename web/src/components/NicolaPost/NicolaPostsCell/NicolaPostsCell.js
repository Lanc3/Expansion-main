import { Link, routes } from '@redwoodjs/router'

import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import NicolaPosts from 'src/components/NicolaPost/NicolaPosts'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query FindNicolaPosts {
    nicolaPosts {
      id
      title
      body
      createdAt
      likeAmount
      Image
    }
  }
`

export const Loading = () => <SkeletonText lines={5} />

export const Empty = () => <EmptyState title="No posts yet" />

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ nicolaPosts }) => {
  return <NicolaPosts nicolaPosts={nicolaPosts} />
}
