import { Link, routes } from '@redwoodjs/router'

import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import ProjectDatas from 'src/components/ProjectData/ProjectDatas'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query FindProjectDatasList {
    projectDatas {
      id
      title
      category
      createdAt
      image
      video
      clientName
      clientWebsite
      objective
      tools
      body
      by
    }
  }
`

export const Loading = () => <SkeletonText lines={5} />

export const Empty = () => (
  <EmptyState
    title="No projects yet"
    actionLabel="Create one"
    actionTo={routes.newProjectData()}
  />
)

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ projectDatas }) => {
  return <ProjectDatas projectDatas={projectDatas} />
}
