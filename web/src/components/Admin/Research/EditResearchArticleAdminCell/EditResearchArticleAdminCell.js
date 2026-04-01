import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ResearchArticleForm from 'src/components/Admin/Research/ResearchArticleForm/ResearchArticleForm'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query EditResearchArticleById($id: Int!) {
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

const UPDATE = gql`
  mutation UpdateResearchArticle($id: Int!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      slug
    }
  }
`

export const Loading = () => <SkeletonText lines={8} />

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Success = ({ post }) => {
  const [updatePost, { loading, error }] = useMutation(UPDATE, {
    onCompleted: () => {
      toast.success('Article saved')
      navigate(routes.adminResearchArticles())
    },
    onError: (e) => toast.error(e.message),
  })

  const onSave = (input, id) => {
    updatePost({ variables: { id, input } })
  }

  return (
    <ResearchArticleForm
      post={post}
      onSave={onSave}
      loading={loading}
      error={error}
    />
  )
}
