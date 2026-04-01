import { useEffect } from 'react'

import { navigate, routes } from '@redwoodjs/router'

/**
 * Legacy /aarons-blog and /nicolas-blog → /research
 */
const RedirectToResearchLabsPage = () => {
  useEffect(() => {
    navigate(routes.researchLabs(), { replace: true })
  }, [])
  return (
    <p className="p-12 text-center font-mono text-sm text-gray-400">
      Redirecting…
    </p>
  )
}

export default RedirectToResearchLabsPage
