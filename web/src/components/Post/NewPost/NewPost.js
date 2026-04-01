import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ResearchArticleForm from 'src/components/Admin/Research/ResearchArticleForm/ResearchArticleForm'

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutationScaffold($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      slug
    }
  }
`

const NewPost = () => {
  const [createPost, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post created')
      navigate(routes.posts())
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })

  const onSave = (input) => {
    createPost({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New post (scaffold)</h2>
        <p className="text-sm text-gray-400">
          Prefer the{' '}
          <a href="/admin/research-articles/new" className="text-neon-primary">
            Research CMS
          </a>
          .
        </p>
      </header>
      <div className="rw-segment-main">
        <ResearchArticleForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPost
