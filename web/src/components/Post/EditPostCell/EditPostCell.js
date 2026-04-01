import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ResearchArticleForm from 'src/components/Admin/Research/ResearchArticleForm/ResearchArticleForm'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query EditPostByIdScaffold($id: Int!) {
    post: post(id: $id) {
      id
      title
      slug
      body
      excerpt
      tags
      Image
      seoTitle
      seoDescription
      authorName
      published
      publishedAt
      featured
      contentFormat
      likeAmount
      createdAt
      updatedAt
    }
  }
`
const UPDATE_POST_MUTATION = gql`
  mutation UpdatePostMutationScaffold($id: Int!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      slug
    }
  }
`

export const Loading = () => <SkeletonText lines={6} />

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ post }) => {
  const [updatePost, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post updated')
      navigate(routes.posts())
    },
    onError: (e) => {
      toast.error(e.message)
    },
  })

  const onSave = (input, id) => {
    updatePost({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit post {post?.id} (scaffold)
        </h2>
        <p className="text-sm text-gray-400">
          Prefer{' '}
          <a
            href={`/admin/research-articles/${post.id}/edit`}
            className="text-neon-primary"
          >
            Research CMS
          </a>
          .
        </p>
      </header>
      <div className="rw-segment-main">
        <ResearchArticleForm
          post={post}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
