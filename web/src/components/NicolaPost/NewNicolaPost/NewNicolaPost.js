import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import NicolaPostForm from 'src/components/NicolaPost/NicolaPostForm'

const CREATE_NICOLA_POST_MUTATION = gql`
  mutation CreateNicolaPostMutation($input: CreateNicolaPostInput!) {
    createNicolaPost(input: $input) {
      id
    }
  }
`

const NewNicolaPost = () => {
  const [createNicolaPost, { loading, error }] = useMutation(
    CREATE_NICOLA_POST_MUTATION,
    {
      onCompleted: () => {
        toast.success('NicolaPost created')
        navigate(routes.nicolaPosts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createNicolaPost({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New NicolaPost</h2>
      </header>
      <div className="rw-segment-main">
        <NicolaPostForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewNicolaPost
