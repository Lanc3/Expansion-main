import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ClientLogoForm from 'src/components/Admin/ClientLogo/ClientLogoForm/ClientLogoForm'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'

export const QUERY = gql`
  query EditClientLogoAdminQuery($id: Int!) {
    clientLogo: clientLogo(id: $id) {
      id
      name
      logoUrl
      websiteUrl
      order
      isActive
      createdAt
    }
  }
`

const UPDATE_MUTATION = gql`
  mutation UpdateClientLogoAdmin($id: Int!, $input: UpdateClientLogoInput!) {
    updateClientLogo(id: $id, input: $input) {
      id
      name
      logoUrl
      websiteUrl
      order
      isActive
      createdAt
    }
  }
`

export const Loading = () => <SkeletonText lines={8} />

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Empty = () => (
  <div className="glass-panel rounded-2xl p-8 text-gray-400">Client logo not found.</div>
)

export const Success = ({ clientLogo }) => {
  const [updateClientLogo, { loading, error }] = useMutation(UPDATE_MUTATION, {
    onCompleted: () => {
      toast.success('Client logo updated')
      navigate(routes.adminClientLogos())
    },
    onError: (err) => toast.error(err.message),
  })

  const onSave = (input, id) => {
    updateClientLogo({ variables: { id, input } })
  }

  if (!clientLogo) {
    return <Empty />
  }

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white mb-6">Edit client logo #{clientLogo.id}</h2>
      <ClientLogoForm clientLogo={clientLogo} onSave={onSave} error={error} loading={loading} />
    </div>
  )
}
