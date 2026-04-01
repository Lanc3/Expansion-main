let _resend = null

const getResend = () => {
  if (!_resend && process.env.RESEND_API_KEY) {
    const { Resend } = require('resend')
    _resend = new Resend(process.env.RESEND_API_KEY)
  }
  return _resend
}

const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@expansion.ie'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'aaron.keating.lanc3@gmail.com'

export const sendAdminNotification = async ({ name, email, company, serviceInterest, projectDescription }) => {
  const resend = getResend()
  if (!resend) {
    console.log('[Email] RESEND_API_KEY not set — skipping admin notification')
    return null
  }

  return resend.emails.send({
    from: FROM_EMAIL,
    to: ADMIN_EMAIL,
    subject: `New Lead: ${name}${company ? ` (${company})` : ''}`,
    html: `
      <h2>New Contact Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${serviceInterest ? `<p><strong>Service Interest:</strong> ${serviceInterest}</p>` : ''}
      <p><strong>Project Description:</strong></p>
      <p>${projectDescription}</p>
      <hr />
      <p><a href="https://www.expansion.ie/admin/contact-submissions">View in Dashboard</a></p>
    `,
  })
}

export const sendAutoReply = async ({ name, email }) => {
  const resend = getResend()
  if (!resend) {
    console.log('[Email] RESEND_API_KEY not set — skipping auto-reply')
    return null
  }

  return resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: "Thanks for reaching out — Expansion.ie",
    html: `
      <h2>Hi ${name},</h2>
      <p>Thanks for getting in touch! We've received your project inquiry and will review it shortly.</p>
      <p>You can expect to hear back from us within <strong>24 hours</strong> on business days.</p>
      <p>In the meantime, feel free to explore:</p>
      <ul>
        <li><a href="https://www.expansion.ie/services">Our Services</a></li>
        <li><a href="https://www.expansion.ie/process">How We Work</a></li>
        <li><a href="https://www.expansion.ie/research">AI Research Labs</a></li>
      </ul>
      <p>Best regards,<br />Aaron Keating<br />Expansion.ie</p>
    `,
  })
}

export const sendPasswordResetEmail = async ({ to, resetToken }) => {
  const resend = getResend()
  if (!resend) {
    console.log('[Email] RESEND_API_KEY not set — skipping password reset')
    return null
  }

  const resetUrl = `${process.env.WEB_URL || 'https://www.expansion.ie'}/reset-password?resetToken=${resetToken}`

  return resend.emails.send({
    from: FROM_EMAIL,
    to,
    subject: 'Reset your password — Expansion.ie',
    html: `
      <h2>Password Reset</h2>
      <p>You requested a password reset. Click the link below to set a new password:</p>
      <p><a href="${resetUrl}">Reset Password</a></p>
      <p>This link will expire in 24 hours. If you didn't request this, you can safely ignore this email.</p>
    `,
  })
}
