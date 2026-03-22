import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProcessStepForm from 'src/components/Admin/ProcessStep/ProcessStepForm/ProcessStepForm'

const CREATE_MUTATION = gql`
  mutation CreateProcessStepAdmin($input: CreateProcessStepInput!) {
    createProcessStep(input: $input) {
      id
    }
  }
`

const AdminNewProcessStepPage = () => {
  const [createProcessStep, { loading, error }] = useMutation(CREATE_MUTATION, {
    onCompleted: () => {
      toast.success('Process step created')
      navigate(routes.adminProcessSteps())
    },
    onError: (err) => toast.error(err.message),
  })

  const onSave = (input) => {
    createProcessStep({ variables: { input } })
  }

  return (
    <>
      <MetaTags title="New process step" description="Admin — new process step" />
      <div className="mb-4">
        <Link
          to={routes.adminProcessSteps()}
          className="text-sm font-mono text-neon-primary hover:underline"
        >
          ← Back to process steps
        </Link>
      </div>
      <div className="glass-panel rounded-2xl p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-white mb-6">New process step</h1>
        <ProcessStepForm onSave={onSave} error={error} loading={loading} />
      </div>
    </>
  )
}

export default AdminNewProcessStepPage
