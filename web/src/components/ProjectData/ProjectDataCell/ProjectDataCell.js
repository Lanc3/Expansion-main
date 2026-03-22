import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import ProjectData from 'src/components/ProjectData/ProjectData'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query FindProjectDataById($id: Int!) {
    projectData: projectData(id: $id) {
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

export const Loading = () => <SkeletonText lines={4} />

export const Empty = () => <EmptyState title="Project not found" />

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ projectData }) => {
  return <ProjectData projectData={projectData} />
}
