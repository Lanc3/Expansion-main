import { MetaTags } from '@redwoodjs/web'

import EditResearchArticleAdminCell from 'src/components/Admin/Research/EditResearchArticleAdminCell/EditResearchArticleAdminCell'

const EditResearchArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Admin — Edit research article" description="Edit article" />
      <div className="glass-panel rounded-2xl p-6">
        <h1 className="mb-6 text-2xl font-bold text-white">Edit research article</h1>
        <EditResearchArticleAdminCell id={id} />
      </div>
    </>
  )
}

export default EditResearchArticlePage
