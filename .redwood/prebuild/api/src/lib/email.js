let _resend = null;
const getResend = () => {
  if (!_resend && process.env.RESEND_API_KEY) {
    const {
      Resend
    } = require('resend');
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
};
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@expansion.ie';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'aaron.keating.lanc3@gmail.com';
export const sendAdminNotification = async ({
  name,
  email,
  company,
  serviceInterest,
  projectDescription
}) => {
  const resend = getResend();
  if (!resend) {
    console.log('[Email] RESEND_API_KEY not set — skipping admin notification');
    return null;
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
    `
  });
};
export const sendAutoReply = async ({
  name,
  email
}) => {
  const resend = getResend();
  if (!resend) {
    console.log('[Email] RESEND_API_KEY not set — skipping auto-reply');
    return null;
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
        <li><a href="https://www.expansion.ie/aarons-blog">Our Blog</a></li>
      </ul>
      <p>Best regards,<br />Aaron Keating<br />Expansion.ie</p>
    `
  });
};
export const sendPasswordResetEmail = async ({
  to,
  resetToken
}) => {
  const resend = getResend();
  if (!resend) {
    console.log('[Email] RESEND_API_KEY not set — skipping password reset');
    return null;
  }
  const resetUrl = `${process.env.WEB_URL || 'https://www.expansion.ie'}/reset-password?resetToken=${resetToken}`;
  return resend.emails.send({
    from: FROM_EMAIL,
    to,
    subject: 'Reset your password — Expansion.ie',
    html: `
      <h2>Password Reset</h2>
      <p>You requested a password reset. Click the link below to set a new password:</p>
      <p><a href="${resetUrl}">Reset Password</a></p>
      <p>This link will expire in 24 hours. If you didn't request this, you can safely ignore this email.</p>
    `
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVzZW5kIiwiZ2V0UmVzZW5kIiwicHJvY2VzcyIsImVudiIsIlJFU0VORF9BUElfS0VZIiwiUmVzZW5kIiwicmVxdWlyZSIsIkZST01fRU1BSUwiLCJBRE1JTl9FTUFJTCIsInNlbmRBZG1pbk5vdGlmaWNhdGlvbiIsIm5hbWUiLCJlbWFpbCIsImNvbXBhbnkiLCJzZXJ2aWNlSW50ZXJlc3QiLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJyZXNlbmQiLCJjb25zb2xlIiwibG9nIiwiZW1haWxzIiwic2VuZCIsImZyb20iLCJ0byIsInN1YmplY3QiLCJodG1sIiwic2VuZEF1dG9SZXBseSIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJyZXNldFRva2VuIiwicmVzZXRVcmwiLCJXRUJfVVJMIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL3NyYy9saWIvZW1haWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IF9yZXNlbmQgPSBudWxsXHJcblxyXG5jb25zdCBnZXRSZXNlbmQgPSAoKSA9PiB7XHJcbiAgaWYgKCFfcmVzZW5kICYmIHByb2Nlc3MuZW52LlJFU0VORF9BUElfS0VZKSB7XHJcbiAgICBjb25zdCB7IFJlc2VuZCB9ID0gcmVxdWlyZSgncmVzZW5kJylcclxuICAgIF9yZXNlbmQgPSBuZXcgUmVzZW5kKHByb2Nlc3MuZW52LlJFU0VORF9BUElfS0VZKVxyXG4gIH1cclxuICByZXR1cm4gX3Jlc2VuZFxyXG59XHJcblxyXG5jb25zdCBGUk9NX0VNQUlMID0gcHJvY2Vzcy5lbnYuRlJPTV9FTUFJTCB8fCAnbm9yZXBseUBleHBhbnNpb24uaWUnXHJcbmNvbnN0IEFETUlOX0VNQUlMID0gcHJvY2Vzcy5lbnYuQURNSU5fRU1BSUwgfHwgJ2Fhcm9uLmtlYXRpbmcubGFuYzNAZ21haWwuY29tJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRBZG1pbk5vdGlmaWNhdGlvbiA9IGFzeW5jICh7IG5hbWUsIGVtYWlsLCBjb21wYW55LCBzZXJ2aWNlSW50ZXJlc3QsIHByb2plY3REZXNjcmlwdGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgcmVzZW5kID0gZ2V0UmVzZW5kKClcclxuICBpZiAoIXJlc2VuZCkge1xyXG4gICAgY29uc29sZS5sb2coJ1tFbWFpbF0gUkVTRU5EX0FQSV9LRVkgbm90IHNldCDigJQgc2tpcHBpbmcgYWRtaW4gbm90aWZpY2F0aW9uJylcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzZW5kLmVtYWlscy5zZW5kKHtcclxuICAgIGZyb206IEZST01fRU1BSUwsXHJcbiAgICB0bzogQURNSU5fRU1BSUwsXHJcbiAgICBzdWJqZWN0OiBgTmV3IExlYWQ6ICR7bmFtZX0ke2NvbXBhbnkgPyBgICgke2NvbXBhbnl9KWAgOiAnJ31gLFxyXG4gICAgaHRtbDogYFxyXG4gICAgICA8aDI+TmV3IENvbnRhY3QgU3VibWlzc2lvbjwvaDI+XHJcbiAgICAgIDxwPjxzdHJvbmc+TmFtZTo8L3N0cm9uZz4gJHtuYW1lfTwvcD5cclxuICAgICAgPHA+PHN0cm9uZz5FbWFpbDo8L3N0cm9uZz4gJHtlbWFpbH08L3A+XHJcbiAgICAgICR7Y29tcGFueSA/IGA8cD48c3Ryb25nPkNvbXBhbnk6PC9zdHJvbmc+ICR7Y29tcGFueX08L3A+YCA6ICcnfVxyXG4gICAgICAke3NlcnZpY2VJbnRlcmVzdCA/IGA8cD48c3Ryb25nPlNlcnZpY2UgSW50ZXJlc3Q6PC9zdHJvbmc+ICR7c2VydmljZUludGVyZXN0fTwvcD5gIDogJyd9XHJcbiAgICAgIDxwPjxzdHJvbmc+UHJvamVjdCBEZXNjcmlwdGlvbjo8L3N0cm9uZz48L3A+XHJcbiAgICAgIDxwPiR7cHJvamVjdERlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIDxwPjxhIGhyZWY9XCJodHRwczovL3d3dy5leHBhbnNpb24uaWUvYWRtaW4vY29udGFjdC1zdWJtaXNzaW9uc1wiPlZpZXcgaW4gRGFzaGJvYXJkPC9hPjwvcD5cclxuICAgIGAsXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRBdXRvUmVwbHkgPSBhc3luYyAoeyBuYW1lLCBlbWFpbCB9KSA9PiB7XHJcbiAgY29uc3QgcmVzZW5kID0gZ2V0UmVzZW5kKClcclxuICBpZiAoIXJlc2VuZCkge1xyXG4gICAgY29uc29sZS5sb2coJ1tFbWFpbF0gUkVTRU5EX0FQSV9LRVkgbm90IHNldCDigJQgc2tpcHBpbmcgYXV0by1yZXBseScpXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc2VuZC5lbWFpbHMuc2VuZCh7XHJcbiAgICBmcm9tOiBGUk9NX0VNQUlMLFxyXG4gICAgdG86IGVtYWlsLFxyXG4gICAgc3ViamVjdDogXCJUaGFua3MgZm9yIHJlYWNoaW5nIG91dCDigJQgRXhwYW5zaW9uLmllXCIsXHJcbiAgICBodG1sOiBgXHJcbiAgICAgIDxoMj5IaSAke25hbWV9LDwvaDI+XHJcbiAgICAgIDxwPlRoYW5rcyBmb3IgZ2V0dGluZyBpbiB0b3VjaCEgV2UndmUgcmVjZWl2ZWQgeW91ciBwcm9qZWN0IGlucXVpcnkgYW5kIHdpbGwgcmV2aWV3IGl0IHNob3J0bHkuPC9wPlxyXG4gICAgICA8cD5Zb3UgY2FuIGV4cGVjdCB0byBoZWFyIGJhY2sgZnJvbSB1cyB3aXRoaW4gPHN0cm9uZz4yNCBob3Vyczwvc3Ryb25nPiBvbiBidXNpbmVzcyBkYXlzLjwvcD5cclxuICAgICAgPHA+SW4gdGhlIG1lYW50aW1lLCBmZWVsIGZyZWUgdG8gZXhwbG9yZTo8L3A+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmV4cGFuc2lvbi5pZS9zZXJ2aWNlc1wiPk91ciBTZXJ2aWNlczwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuZXhwYW5zaW9uLmllL3Byb2Nlc3NcIj5Ib3cgV2UgV29yazwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuZXhwYW5zaW9uLmllL2Fhcm9ucy1ibG9nXCI+T3VyIEJsb2c8L2E+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPHA+QmVzdCByZWdhcmRzLDxiciAvPkFhcm9uIEtlYXRpbmc8YnIgLz5FeHBhbnNpb24uaWU8L3A+XHJcbiAgICBgLFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZW5kUGFzc3dvcmRSZXNldEVtYWlsID0gYXN5bmMgKHsgdG8sIHJlc2V0VG9rZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHJlc2VuZCA9IGdldFJlc2VuZCgpXHJcbiAgaWYgKCFyZXNlbmQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdbRW1haWxdIFJFU0VORF9BUElfS0VZIG5vdCBzZXQg4oCUIHNraXBwaW5nIHBhc3N3b3JkIHJlc2V0JylcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdCByZXNldFVybCA9IGAke3Byb2Nlc3MuZW52LldFQl9VUkwgfHwgJ2h0dHBzOi8vd3d3LmV4cGFuc2lvbi5pZSd9L3Jlc2V0LXBhc3N3b3JkP3Jlc2V0VG9rZW49JHtyZXNldFRva2VufWBcclxuXHJcbiAgcmV0dXJuIHJlc2VuZC5lbWFpbHMuc2VuZCh7XHJcbiAgICBmcm9tOiBGUk9NX0VNQUlMLFxyXG4gICAgdG8sXHJcbiAgICBzdWJqZWN0OiAnUmVzZXQgeW91ciBwYXNzd29yZCDigJQgRXhwYW5zaW9uLmllJyxcclxuICAgIGh0bWw6IGBcclxuICAgICAgPGgyPlBhc3N3b3JkIFJlc2V0PC9oMj5cclxuICAgICAgPHA+WW91IHJlcXVlc3RlZCBhIHBhc3N3b3JkIHJlc2V0LiBDbGljayB0aGUgbGluayBiZWxvdyB0byBzZXQgYSBuZXcgcGFzc3dvcmQ6PC9wPlxyXG4gICAgICA8cD48YSBocmVmPVwiJHtyZXNldFVybH1cIj5SZXNldCBQYXNzd29yZDwvYT48L3A+XHJcbiAgICAgIDxwPlRoaXMgbGluayB3aWxsIGV4cGlyZSBpbiAyNCBob3Vycy4gSWYgeW91IGRpZG4ndCByZXF1ZXN0IHRoaXMsIHlvdSBjYW4gc2FmZWx5IGlnbm9yZSB0aGlzIGVtYWlsLjwvcD5cclxuICAgIGAsXHJcbiAgfSlcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLE9BQU8sR0FBRyxJQUFJO0FBRWxCLE1BQU1DLFNBQVMsR0FBR0EsQ0FBQSxLQUFNO0VBQ3RCLElBQUksQ0FBQ0QsT0FBTyxJQUFJRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYyxFQUFFO0lBQzFDLE1BQU07TUFBRUM7SUFBTyxDQUFDLEdBQUdDLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDcENOLE9BQU8sR0FBRyxJQUFJSyxNQUFNLENBQUNILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLENBQUM7RUFDbEQ7RUFDQSxPQUFPSixPQUFPO0FBQ2hCLENBQUM7QUFFRCxNQUFNTyxVQUFVLEdBQUdMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxVQUFVLElBQUksc0JBQXNCO0FBQ25FLE1BQU1DLFdBQVcsR0FBR04sT0FBTyxDQUFDQyxHQUFHLENBQUNLLFdBQVcsSUFBSSwrQkFBK0I7QUFFOUUsT0FBTyxNQUFNQyxxQkFBcUIsR0FBRyxNQUFBQSxDQUFPO0VBQUVDLElBQUk7RUFBRUMsS0FBSztFQUFFQyxPQUFPO0VBQUVDLGVBQWU7RUFBRUM7QUFBbUIsQ0FBQyxLQUFLO0VBQzVHLE1BQU1DLE1BQU0sR0FBR2QsU0FBUyxDQUFDLENBQUM7RUFDMUIsSUFBSSxDQUFDYyxNQUFNLEVBQUU7SUFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsOERBQThELENBQUM7SUFDM0UsT0FBTyxJQUFJO0VBQ2I7RUFFQSxPQUFPRixNQUFNLENBQUNHLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO0lBQ3hCQyxJQUFJLEVBQUViLFVBQVU7SUFDaEJjLEVBQUUsRUFBRWIsV0FBVztJQUNmYyxPQUFPLEVBQUcsYUFBWVosSUFBSyxHQUFFRSxPQUFPLEdBQUksS0FBSUEsT0FBUSxHQUFFLEdBQUcsRUFBRyxFQUFDO0lBQzdEVyxJQUFJLEVBQUc7QUFDWDtBQUNBLGtDQUFrQ2IsSUFBSztBQUN2QyxtQ0FBbUNDLEtBQU07QUFDekMsUUFBUUMsT0FBTyxHQUFJLGdDQUErQkEsT0FBUSxNQUFLLEdBQUcsRUFBRztBQUNyRSxRQUFRQyxlQUFlLEdBQUkseUNBQXdDQSxlQUFnQixNQUFLLEdBQUcsRUFBRztBQUM5RjtBQUNBLFdBQVdDLGtCQUFtQjtBQUM5QjtBQUNBO0FBQ0E7RUFDRSxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsT0FBTyxNQUFNVSxhQUFhLEdBQUcsTUFBQUEsQ0FBTztFQUFFZCxJQUFJO0VBQUVDO0FBQU0sQ0FBQyxLQUFLO0VBQ3RELE1BQU1JLE1BQU0sR0FBR2QsU0FBUyxDQUFDLENBQUM7RUFDMUIsSUFBSSxDQUFDYyxNQUFNLEVBQUU7SUFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0RBQXNELENBQUM7SUFDbkUsT0FBTyxJQUFJO0VBQ2I7RUFFQSxPQUFPRixNQUFNLENBQUNHLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO0lBQ3hCQyxJQUFJLEVBQUViLFVBQVU7SUFDaEJjLEVBQUUsRUFBRVYsS0FBSztJQUNUVyxPQUFPLEVBQUUsd0NBQXdDO0lBQ2pEQyxJQUFJLEVBQUc7QUFDWCxlQUFlYixJQUFLO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE9BQU8sTUFBTWUsc0JBQXNCLEdBQUcsTUFBQUEsQ0FBTztFQUFFSixFQUFFO0VBQUVLO0FBQVcsQ0FBQyxLQUFLO0VBQ2xFLE1BQU1YLE1BQU0sR0FBR2QsU0FBUyxDQUFDLENBQUM7RUFDMUIsSUFBSSxDQUFDYyxNQUFNLEVBQUU7SUFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsMERBQTBELENBQUM7SUFDdkUsT0FBTyxJQUFJO0VBQ2I7RUFFQSxNQUFNVSxRQUFRLEdBQUksR0FBRXpCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDeUIsT0FBTyxJQUFJLDBCQUEyQiw4QkFBNkJGLFVBQVcsRUFBQztFQUUvRyxPQUFPWCxNQUFNLENBQUNHLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO0lBQ3hCQyxJQUFJLEVBQUViLFVBQVU7SUFDaEJjLEVBQUU7SUFDRkMsT0FBTyxFQUFFLG9DQUFvQztJQUM3Q0MsSUFBSSxFQUFHO0FBQ1g7QUFDQTtBQUNBLG9CQUFvQkksUUFBUztBQUM3QjtBQUNBO0VBQ0UsQ0FBQyxDQUFDO0FBQ0osQ0FBQyJ9