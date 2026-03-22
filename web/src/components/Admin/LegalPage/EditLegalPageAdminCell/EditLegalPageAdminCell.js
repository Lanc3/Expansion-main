import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LegalPageForm from 'src/components/Admin/LegalPage/LegalPageForm/LegalPageForm'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'

export const QUERY = gql`
  query EditLegalPageAdminQuery($id: Int!) {
    legalPage: legalPage(id: $id) {
      id
      slug
      title
      body
      isActive
      updatedAt
    }
  }
`

const UPDATE_MUTATION = gql`
  mutation UpdateLegalPageAdmin($id: Int!, $input: UpdateLegalPageInput!) {
    updateLegalPage(id: $id, input: $input) {
      id
      slug
      title
      body
      isActive
      updatedAt
    }
  }
`

export const Loading = () => <SkeletonText lines={12} />

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Empty = () => (
  <div className="glass-panel rounded-2xl p-8 text-gray-400">Legal page not found.</div>
)

export const Success = ({ legalPage }) => {
  const [updateLegalPage, { loading, error }] = useMutation(UPDATE_MUTATION, {
    onCompleted: () => {
      toast.success('Legal page updated')
      navigate(routes.adminLegalPages())
    },
    onError: (err) => toast.error(err.message),
  })

  const onSave = (input, id) => {
    updateLegalPage({ variables: { id, input } })
  }

  if (!legalPage) {
    return <Empty />
  }

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white mb-6">Edit legal page #{legalPage.id}</h2>
      <LegalPageForm legalPage={legalPage} onSave={onSave} error={error} loading={loading} />
    </div>
  )
}
