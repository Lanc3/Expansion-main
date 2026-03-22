import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import TechnologyForm from 'src/components/Admin/Technology/TechnologyForm/TechnologyForm'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query AdminEditTechnologyById($id: Int!) {
    technology(id: $id) {
      id
      name
      icon
      category
      proficiency
      order
      isActive
      createdAt
    }
  }
`

const UPDATE_TECHNOLOGY_MUTATION = gql`
  mutation UpdateTechnologyMutation($id: Int!, $input: UpdateTechnologyInput!) {
    updateTechnology(id: $id, input: $input) {
      id
      name
      icon
      category
      proficiency
      order
      isActive
      createdAt
    }
  }
`

export const Loading = () => <SkeletonText lines={6} />

export const Empty = () => <EmptyState title="Technology not found" />

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Success = ({ technology }) => {
  const [updateTechnology, { loading, error }] = useMutation(
    UPDATE_TECHNOLOGY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Technology updated')
        navigate(routes.adminTechnologies())
      },
      onError: (err) => {
        toast.error(err.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateTechnology({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit technology {technology?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TechnologyForm
          technology={technology}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
