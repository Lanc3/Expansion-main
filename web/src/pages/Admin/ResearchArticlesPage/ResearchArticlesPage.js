import { MetaTags } from '@redwoodjs/web'

import ResearchArticlesAdminCell from 'src/components/Admin/Research/ResearchArticlesAdminCell/ResearchArticlesAdminCell'

const ResearchArticlesPage = () => {
  return (
    <>
      <MetaTags
        title="Admin — Research articles"
        description="Manage Expansion AI Research Labs articles"
      />
      <div className="glass-panel rounded-2xl p-6">
        <ResearchArticlesAdminCell />
      </div>
    </>
  )
}

export default ResearchArticlesPage
