import { useEffect } from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { gql, useQuery } from '@redwoodjs/web'

const PUBLISHED_SLUG = gql`
  query PublishedPostSlugById($id: Int!) {
    publishedPostSlugById(id: $id)
  }
`

const AaronsArticleRedirectPage = ({ id }) => {
  const { data, loading } = useQuery(PUBLISHED_SLUG, { variables: { id } })

  useEffect(() => {
    if (loading) {
      return
    }
    const slug = data?.publishedPostSlugById
    if (slug) {
      navigate(routes.researchArticle({ slug }), { replace: true })
    } else {
      navigate(routes.researchLabs(), { replace: true })
    }
  }, [loading, data, id])

  return (
    <p className="p-12 text-center font-mono text-sm text-gray-400">
      Redirecting…
    </p>
  )
}

export default AaronsArticleRedirectPage
