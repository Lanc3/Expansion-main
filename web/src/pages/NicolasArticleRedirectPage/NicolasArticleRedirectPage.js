import { useEffect } from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { gql, useQuery } from '@redwoodjs/web'

const LEGACY_SLUG = gql`
  query PublishedNicolaLegacySlug($legacyId: Int!) {
    publishedNicolaLegacySlug(legacyId: $legacyId)
  }
`

const NicolasArticleRedirectPage = ({ id }) => {
  const { data, loading } = useQuery(LEGACY_SLUG, {
    variables: { legacyId: id },
  })

  useEffect(() => {
    if (loading) {
      return
    }
    const slug = data?.publishedNicolaLegacySlug
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

export default NicolasArticleRedirectPage
