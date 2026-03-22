import { MetaTags } from '@redwoodjs/web'

import NewsletterSubscribersAdminCell from 'src/components/Admin/NewsletterSubscriber/NewsletterSubscribersAdminCell/NewsletterSubscribersAdminCell'

const NewsletterSubscribersPage = () => {
  return (
    <>
      <MetaTags title="Newsletter subscribers" description="Admin — newsletter list" />
      <div className="glass-panel rounded-2xl p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-white mb-2">Newsletter subscribers</h1>
        <p className="text-gray-400 text-sm mb-6">
          Toggle active status or remove subscribers.
        </p>
        <NewsletterSubscribersAdminCell />
      </div>
    </>
  )
}

export default NewsletterSubscribersPage
