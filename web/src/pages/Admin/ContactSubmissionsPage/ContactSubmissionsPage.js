import { MetaTags } from '@redwoodjs/web'

import ContactSubmissionsAdminCell from 'src/components/Admin/ContactSubmission/ContactSubmissionsAdminCell/ContactSubmissionsAdminCell'

const ContactSubmissionsPage = () => {
  return (
    <>
      <MetaTags title="Contact submissions" description="Admin — contact form leads" />
      <div className="glass-panel rounded-2xl p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-white mb-2">Contact submissions</h1>
        <p className="text-gray-400 text-sm mb-6">
          Read-only lead records. Update status and notes on the detail page.
        </p>
        <ContactSubmissionsAdminCell />
      </div>
    </>
  )
}

export default ContactSubmissionsPage
