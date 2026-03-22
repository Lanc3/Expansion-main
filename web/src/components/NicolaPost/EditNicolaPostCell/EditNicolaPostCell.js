import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import NicolaPostForm from 'src/components/NicolaPost/NicolaPostForm'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query EditNicolaPostById($id: Int!) {
    nicolaPost: nicolaPost(id: $id) {
      id
      title
      body
      createdAt
      likeAmount
      Image
    }
  }
`
const UPDATE_NICOLA_POST_MUTATION = gql`
  mutation UpdateNicolaPostMutation($id: Int!, $input: UpdateNicolaPostInput!) {
    updateNicolaPost(id: $id, input: $input) {
      id
      title
      body
      createdAt
      likeAmount
      Image
    }
  }
`

export const Loading = () => <SkeletonText lines={6} />

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ nicolaPost }) => {
  const [updateNicolaPost, { loading, error }] = useMutation(
    UPDATE_NICOLA_POST_MUTATION,
    {
      onCompleted: () => {
        toast.success('NicolaPost updated')
        navigate(routes.nicolaPosts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateNicolaPost({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit NicolaPost {nicolaPost?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <NicolaPostForm
          nicolaPost={nicolaPost}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
