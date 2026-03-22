import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProcessStepForm from 'src/components/Admin/ProcessStep/ProcessStepForm/ProcessStepForm'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'

export const QUERY = gql`
  query EditProcessStepAdminQuery($id: Int!) {
    processStep: processStep(id: $id) {
      id
      title
      description
      icon
      order
      isActive
      createdAt
    }
  }
`

const UPDATE_MUTATION = gql`
  mutation UpdateProcessStepAdmin($id: Int!, $input: UpdateProcessStepInput!) {
    updateProcessStep(id: $id, input: $input) {
      id
      title
      description
      icon
      order
      isActive
      createdAt
    }
  }
`

export const Loading = () => <SkeletonText lines={8} />

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Empty = () => (
  <div className="glass-panel rounded-2xl p-8 text-gray-400">Process step not found.</div>
)

export const Success = ({ processStep }) => {
  const [updateProcessStep, { loading, error }] = useMutation(UPDATE_MUTATION, {
    onCompleted: () => {
      toast.success('Process step updated')
      navigate(routes.adminProcessSteps())
    },
    onError: (err) => toast.error(err.message),
  })

  const onSave = (input, id) => {
    updateProcessStep({ variables: { id, input } })
  }

  if (!processStep) {
    return <Empty />
  }

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white mb-6">Edit process step #{processStep.id}</h2>
      <ProcessStepForm processStep={processStep} onSave={onSave} error={error} loading={loading} />
    </div>
  )
}
