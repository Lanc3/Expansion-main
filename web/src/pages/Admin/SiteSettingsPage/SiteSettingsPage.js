import { MetaTags } from '@redwoodjs/web'

import SiteSettingsAdminCell from 'src/components/Admin/SiteSetting/SiteSettingsAdminCell/SiteSettingsAdminCell'

const SiteSettingsPage = () => {
  return (
    <>
      <MetaTags title="Site settings" description="Admin — site configuration" />
      <div className="glass-panel rounded-2xl p-6 sm:p-8 mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">Site settings</h1>
        <p className="text-gray-400 text-sm">
          Values are grouped by category. Only changed fields are saved.
        </p>
      </div>
      <SiteSettingsAdminCell />
    </>
  )
}

export default SiteSettingsPage
