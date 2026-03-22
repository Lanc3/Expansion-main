import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ContactSubmissionAdminCell from 'src/components/Admin/ContactSubmission/ContactSubmissionAdminCell/ContactSubmissionAdminCell'

const ContactSubmissionPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Submission detail" description="Admin — contact submission" />
      <div className="mb-4">
        <Link
          to={routes.adminContactSubmissions()}
          className="text-sm font-mono text-neon-primary hover:underline"
        >
          ← Back to submissions
        </Link>
      </div>
      <ContactSubmissionAdminCell id={id} />
    </>
  )
}

export default ContactSubmissionPage
