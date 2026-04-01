import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ResearchArticleForm from 'src/components/Admin/Research/ResearchArticleForm/ResearchArticleForm'

const CREATE = gql`
  mutation CreateResearchArticle($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      slug
    }
  }
`

const NewResearchArticlePage = () => {
  const [createPost, { loading, error }] = useMutation(CREATE, {
    onCompleted: () => {
      toast.success('Article created')
      navigate(routes.adminResearchArticles())
    },
    onError: (e) => toast.error(e.message),
  })

  const onSave = (input) => {
    createPost({ variables: { input } })
  }

  return (
    <>
      <MetaTags title="Admin — New research article" description="Create article" />
      <div className="glass-panel rounded-2xl p-6">
        <h1 className="mb-6 text-2xl font-bold text-white">New research article</h1>
        <ResearchArticleForm onSave={onSave} loading={loading} error={error} />
      </div>
    </>
  )
}

export default NewResearchArticlePage
