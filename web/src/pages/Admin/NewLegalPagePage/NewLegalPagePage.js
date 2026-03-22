import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LegalPageForm from 'src/components/Admin/LegalPage/LegalPageForm/LegalPageForm'

const CREATE_MUTATION = gql`
  mutation CreateLegalPageAdmin($input: CreateLegalPageInput!) {
    createLegalPage(input: $input) {
      id
    }
  }
`

const AdminNewLegalPagePage = () => {
  const [createLegalPage, { loading, error }] = useMutation(CREATE_MUTATION, {
    onCompleted: () => {
      toast.success('Legal page created')
      navigate(routes.adminLegalPages())
    },
    onError: (err) => toast.error(err.message),
  })

  const onSave = (input) => {
    createLegalPage({ variables: { input } })
  }

  return (
    <>
      <MetaTags title="New legal page" description="Admin — new legal page" />
      <div className="mb-4">
        <Link
          to={routes.adminLegalPages()}
          className="text-sm font-mono text-neon-primary hover:underline"
        >
          ← Back to legal pages
        </Link>
      </div>
      <div className="glass-panel rounded-2xl p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-white mb-6">New legal page</h1>
        <LegalPageForm onSave={onSave} error={error} loading={loading} />
      </div>
    </>
  )
}

export default AdminNewLegalPagePage
