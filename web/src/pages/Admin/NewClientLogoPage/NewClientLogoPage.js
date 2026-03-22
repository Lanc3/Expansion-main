import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ClientLogoForm from 'src/components/Admin/ClientLogo/ClientLogoForm/ClientLogoForm'

const CREATE_MUTATION = gql`
  mutation CreateClientLogoAdmin($input: CreateClientLogoInput!) {
    createClientLogo(input: $input) {
      id
    }
  }
`

const AdminNewClientLogoPage = () => {
  const [createClientLogo, { loading, error }] = useMutation(CREATE_MUTATION, {
    onCompleted: () => {
      toast.success('Client logo created')
      navigate(routes.adminClientLogos())
    },
    onError: (err) => toast.error(err.message),
  })

  const onSave = (input) => {
    createClientLogo({ variables: { input } })
  }

  return (
    <>
      <MetaTags title="New client logo" description="Admin — new client logo" />
      <div className="mb-4">
        <Link
          to={routes.adminClientLogos()}
          className="text-sm font-mono text-neon-primary hover:underline"
        >
          ← Back to client logos
        </Link>
      </div>
      <div className="glass-panel rounded-2xl p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-white mb-6">New client logo</h1>
        <ClientLogoForm onSave={onSave} error={error} loading={loading} />
      </div>
    </>
  )
}

export default AdminNewClientLogoPage
