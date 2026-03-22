import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import ServiceForm from 'src/components/Admin/Service/ServiceForm/ServiceForm'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query AdminEditServiceById($id: Int!) {
    service(id: $id) {
      id
      title
      slug
      shortDescription
      fullDescription
      icon
      image
      order
      isActive
      createdAt
      updatedAt
    }
  }
`

const UPDATE_SERVICE_MUTATION = gql`
  mutation UpdateServiceMutation($id: Int!, $input: UpdateServiceInput!) {
    updateService(id: $id, input: $input) {
      id
      title
      slug
      shortDescription
      fullDescription
      icon
      image
      order
      isActive
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <SkeletonText lines={6} />

export const Empty = () => <EmptyState title="Service not found" />

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Success = ({ service }) => {
  const [updateService, { loading, error }] = useMutation(UPDATE_SERVICE_MUTATION, {
    onCompleted: () => {
      toast.success('Service updated')
      navigate(routes.adminServices())
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })

  const onSave = (input, id) => {
    updateService({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit service {service?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ServiceForm service={service} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
