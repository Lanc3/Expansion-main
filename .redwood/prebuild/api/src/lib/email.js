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
        <li><a href="https://www.expansion.ie/research">AI Research Labs</a></li>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVzZW5kIiwiZ2V0UmVzZW5kIiwicHJvY2VzcyIsImVudiIsIlJFU0VORF9BUElfS0VZIiwiUmVzZW5kIiwicmVxdWlyZSIsIkZST01fRU1BSUwiLCJBRE1JTl9FTUFJTCIsInNlbmRBZG1pbk5vdGlmaWNhdGlvbiIsIm5hbWUiLCJlbWFpbCIsImNvbXBhbnkiLCJzZXJ2aWNlSW50ZXJlc3QiLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJyZXNlbmQiLCJjb25zb2xlIiwibG9nIiwiZW1haWxzIiwic2VuZCIsImZyb20iLCJ0byIsInN1YmplY3QiLCJodG1sIiwic2VuZEF1dG9SZXBseSIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJyZXNldFRva2VuIiwicmVzZXRVcmwiLCJXRUJfVVJMIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL3NyYy9saWIvZW1haWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IF9yZXNlbmQgPSBudWxsXHJcblxyXG5jb25zdCBnZXRSZXNlbmQgPSAoKSA9PiB7XHJcbiAgaWYgKCFfcmVzZW5kICYmIHByb2Nlc3MuZW52LlJFU0VORF9BUElfS0VZKSB7XHJcbiAgICBjb25zdCB7IFJlc2VuZCB9ID0gcmVxdWlyZSgncmVzZW5kJylcclxuICAgIF9yZXNlbmQgPSBuZXcgUmVzZW5kKHByb2Nlc3MuZW52LlJFU0VORF9BUElfS0VZKVxyXG4gIH1cclxuICByZXR1cm4gX3Jlc2VuZFxyXG59XHJcblxyXG5jb25zdCBGUk9NX0VNQUlMID0gcHJvY2Vzcy5lbnYuRlJPTV9FTUFJTCB8fCAnbm9yZXBseUBleHBhbnNpb24uaWUnXHJcbmNvbnN0IEFETUlOX0VNQUlMID0gcHJvY2Vzcy5lbnYuQURNSU5fRU1BSUwgfHwgJ2Fhcm9uLmtlYXRpbmcubGFuYzNAZ21haWwuY29tJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRBZG1pbk5vdGlmaWNhdGlvbiA9IGFzeW5jICh7IG5hbWUsIGVtYWlsLCBjb21wYW55LCBzZXJ2aWNlSW50ZXJlc3QsIHByb2plY3REZXNjcmlwdGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgcmVzZW5kID0gZ2V0UmVzZW5kKClcclxuICBpZiAoIXJlc2VuZCkge1xyXG4gICAgY29uc29sZS5sb2coJ1tFbWFpbF0gUkVTRU5EX0FQSV9LRVkgbm90IHNldCDigJQgc2tpcHBpbmcgYWRtaW4gbm90aWZpY2F0aW9uJylcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzZW5kLmVtYWlscy5zZW5kKHtcclxuICAgIGZyb206IEZST01fRU1BSUwsXHJcbiAgICB0bzogQURNSU5fRU1BSUwsXHJcbiAgICBzdWJqZWN0OiBgTmV3IExlYWQ6ICR7bmFtZX0ke2NvbXBhbnkgPyBgICgke2NvbXBhbnl9KWAgOiAnJ31gLFxyXG4gICAgaHRtbDogYFxyXG4gICAgICA8aDI+TmV3IENvbnRhY3QgU3VibWlzc2lvbjwvaDI+XHJcbiAgICAgIDxwPjxzdHJvbmc+TmFtZTo8L3N0cm9uZz4gJHtuYW1lfTwvcD5cclxuICAgICAgPHA+PHN0cm9uZz5FbWFpbDo8L3N0cm9uZz4gJHtlbWFpbH08L3A+XHJcbiAgICAgICR7Y29tcGFueSA/IGA8cD48c3Ryb25nPkNvbXBhbnk6PC9zdHJvbmc+ICR7Y29tcGFueX08L3A+YCA6ICcnfVxyXG4gICAgICAke3NlcnZpY2VJbnRlcmVzdCA/IGA8cD48c3Ryb25nPlNlcnZpY2UgSW50ZXJlc3Q6PC9zdHJvbmc+ICR7c2VydmljZUludGVyZXN0fTwvcD5gIDogJyd9XHJcbiAgICAgIDxwPjxzdHJvbmc+UHJvamVjdCBEZXNjcmlwdGlvbjo8L3N0cm9uZz48L3A+XHJcbiAgICAgIDxwPiR7cHJvamVjdERlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIDxwPjxhIGhyZWY9XCJodHRwczovL3d3dy5leHBhbnNpb24uaWUvYWRtaW4vY29udGFjdC1zdWJtaXNzaW9uc1wiPlZpZXcgaW4gRGFzaGJvYXJkPC9hPjwvcD5cclxuICAgIGAsXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRBdXRvUmVwbHkgPSBhc3luYyAoeyBuYW1lLCBlbWFpbCB9KSA9PiB7XHJcbiAgY29uc3QgcmVzZW5kID0gZ2V0UmVzZW5kKClcclxuICBpZiAoIXJlc2VuZCkge1xyXG4gICAgY29uc29sZS5sb2coJ1tFbWFpbF0gUkVTRU5EX0FQSV9LRVkgbm90IHNldCDigJQgc2tpcHBpbmcgYXV0by1yZXBseScpXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc2VuZC5lbWFpbHMuc2VuZCh7XHJcbiAgICBmcm9tOiBGUk9NX0VNQUlMLFxyXG4gICAgdG86IGVtYWlsLFxyXG4gICAgc3ViamVjdDogXCJUaGFua3MgZm9yIHJlYWNoaW5nIG91dCDigJQgRXhwYW5zaW9uLmllXCIsXHJcbiAgICBodG1sOiBgXHJcbiAgICAgIDxoMj5IaSAke25hbWV9LDwvaDI+XHJcbiAgICAgIDxwPlRoYW5rcyBmb3IgZ2V0dGluZyBpbiB0b3VjaCEgV2UndmUgcmVjZWl2ZWQgeW91ciBwcm9qZWN0IGlucXVpcnkgYW5kIHdpbGwgcmV2aWV3IGl0IHNob3J0bHkuPC9wPlxyXG4gICAgICA8cD5Zb3UgY2FuIGV4cGVjdCB0byBoZWFyIGJhY2sgZnJvbSB1cyB3aXRoaW4gPHN0cm9uZz4yNCBob3Vyczwvc3Ryb25nPiBvbiBidXNpbmVzcyBkYXlzLjwvcD5cclxuICAgICAgPHA+SW4gdGhlIG1lYW50aW1lLCBmZWVsIGZyZWUgdG8gZXhwbG9yZTo8L3A+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmV4cGFuc2lvbi5pZS9zZXJ2aWNlc1wiPk91ciBTZXJ2aWNlczwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuZXhwYW5zaW9uLmllL3Byb2Nlc3NcIj5Ib3cgV2UgV29yazwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuZXhwYW5zaW9uLmllL3Jlc2VhcmNoXCI+QUkgUmVzZWFyY2ggTGFiczwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8cD5CZXN0IHJlZ2FyZHMsPGJyIC8+QWFyb24gS2VhdGluZzxiciAvPkV4cGFuc2lvbi5pZTwvcD5cclxuICAgIGAsXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwgPSBhc3luYyAoeyB0bywgcmVzZXRUb2tlbiB9KSA9PiB7XHJcbiAgY29uc3QgcmVzZW5kID0gZ2V0UmVzZW5kKClcclxuICBpZiAoIXJlc2VuZCkge1xyXG4gICAgY29uc29sZS5sb2coJ1tFbWFpbF0gUkVTRU5EX0FQSV9LRVkgbm90IHNldCDigJQgc2tpcHBpbmcgcGFzc3dvcmQgcmVzZXQnKVxyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc2V0VXJsID0gYCR7cHJvY2Vzcy5lbnYuV0VCX1VSTCB8fCAnaHR0cHM6Ly93d3cuZXhwYW5zaW9uLmllJ30vcmVzZXQtcGFzc3dvcmQ/cmVzZXRUb2tlbj0ke3Jlc2V0VG9rZW59YFxyXG5cclxuICByZXR1cm4gcmVzZW5kLmVtYWlscy5zZW5kKHtcclxuICAgIGZyb206IEZST01fRU1BSUwsXHJcbiAgICB0byxcclxuICAgIHN1YmplY3Q6ICdSZXNldCB5b3VyIHBhc3N3b3JkIOKAlCBFeHBhbnNpb24uaWUnLFxyXG4gICAgaHRtbDogYFxyXG4gICAgICA8aDI+UGFzc3dvcmQgUmVzZXQ8L2gyPlxyXG4gICAgICA8cD5Zb3UgcmVxdWVzdGVkIGEgcGFzc3dvcmQgcmVzZXQuIENsaWNrIHRoZSBsaW5rIGJlbG93IHRvIHNldCBhIG5ldyBwYXNzd29yZDo8L3A+XHJcbiAgICAgIDxwPjxhIGhyZWY9XCIke3Jlc2V0VXJsfVwiPlJlc2V0IFBhc3N3b3JkPC9hPjwvcD5cclxuICAgICAgPHA+VGhpcyBsaW5rIHdpbGwgZXhwaXJlIGluIDI0IGhvdXJzLiBJZiB5b3UgZGlkbid0IHJlcXVlc3QgdGhpcywgeW91IGNhbiBzYWZlbHkgaWdub3JlIHRoaXMgZW1haWwuPC9wPlxyXG4gICAgYCxcclxuICB9KVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsT0FBTyxHQUFHLElBQUk7QUFFbEIsTUFBTUMsU0FBUyxHQUFHQSxDQUFBLEtBQU07RUFDdEIsSUFBSSxDQUFDRCxPQUFPLElBQUlFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLEVBQUU7SUFDMUMsTUFBTTtNQUFFQztJQUFPLENBQUMsR0FBR0MsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNwQ04sT0FBTyxHQUFHLElBQUlLLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGNBQWMsQ0FBQztFQUNsRDtFQUNBLE9BQU9KLE9BQU87QUFDaEIsQ0FBQztBQUVELE1BQU1PLFVBQVUsR0FBR0wsT0FBTyxDQUFDQyxHQUFHLENBQUNJLFVBQVUsSUFBSSxzQkFBc0I7QUFDbkUsTUFBTUMsV0FBVyxHQUFHTixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssV0FBVyxJQUFJLCtCQUErQjtBQUU5RSxPQUFPLE1BQU1DLHFCQUFxQixHQUFHLE1BQUFBLENBQU87RUFBRUMsSUFBSTtFQUFFQyxLQUFLO0VBQUVDLE9BQU87RUFBRUMsZUFBZTtFQUFFQztBQUFtQixDQUFDLEtBQUs7RUFDNUcsTUFBTUMsTUFBTSxHQUFHZCxTQUFTLENBQUMsQ0FBQztFQUMxQixJQUFJLENBQUNjLE1BQU0sRUFBRTtJQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw4REFBOEQsQ0FBQztJQUMzRSxPQUFPLElBQUk7RUFDYjtFQUVBLE9BQU9GLE1BQU0sQ0FBQ0csTUFBTSxDQUFDQyxJQUFJLENBQUM7SUFDeEJDLElBQUksRUFBRWIsVUFBVTtJQUNoQmMsRUFBRSxFQUFFYixXQUFXO0lBQ2ZjLE9BQU8sRUFBRyxhQUFZWixJQUFLLEdBQUVFLE9BQU8sR0FBSSxLQUFJQSxPQUFRLEdBQUUsR0FBRyxFQUFHLEVBQUM7SUFDN0RXLElBQUksRUFBRztBQUNYO0FBQ0Esa0NBQWtDYixJQUFLO0FBQ3ZDLG1DQUFtQ0MsS0FBTTtBQUN6QyxRQUFRQyxPQUFPLEdBQUksZ0NBQStCQSxPQUFRLE1BQUssR0FBRyxFQUFHO0FBQ3JFLFFBQVFDLGVBQWUsR0FBSSx5Q0FBd0NBLGVBQWdCLE1BQUssR0FBRyxFQUFHO0FBQzlGO0FBQ0EsV0FBV0Msa0JBQW1CO0FBQzlCO0FBQ0E7QUFDQTtFQUNFLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxPQUFPLE1BQU1VLGFBQWEsR0FBRyxNQUFBQSxDQUFPO0VBQUVkLElBQUk7RUFBRUM7QUFBTSxDQUFDLEtBQUs7RUFDdEQsTUFBTUksTUFBTSxHQUFHZCxTQUFTLENBQUMsQ0FBQztFQUMxQixJQUFJLENBQUNjLE1BQU0sRUFBRTtJQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzREFBc0QsQ0FBQztJQUNuRSxPQUFPLElBQUk7RUFDYjtFQUVBLE9BQU9GLE1BQU0sQ0FBQ0csTUFBTSxDQUFDQyxJQUFJLENBQUM7SUFDeEJDLElBQUksRUFBRWIsVUFBVTtJQUNoQmMsRUFBRSxFQUFFVixLQUFLO0lBQ1RXLE9BQU8sRUFBRSx3Q0FBd0M7SUFDakRDLElBQUksRUFBRztBQUNYLGVBQWViLElBQUs7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRSxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsT0FBTyxNQUFNZSxzQkFBc0IsR0FBRyxNQUFBQSxDQUFPO0VBQUVKLEVBQUU7RUFBRUs7QUFBVyxDQUFDLEtBQUs7RUFDbEUsTUFBTVgsTUFBTSxHQUFHZCxTQUFTLENBQUMsQ0FBQztFQUMxQixJQUFJLENBQUNjLE1BQU0sRUFBRTtJQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQywwREFBMEQsQ0FBQztJQUN2RSxPQUFPLElBQUk7RUFDYjtFQUVBLE1BQU1VLFFBQVEsR0FBSSxHQUFFekIsT0FBTyxDQUFDQyxHQUFHLENBQUN5QixPQUFPLElBQUksMEJBQTJCLDhCQUE2QkYsVUFBVyxFQUFDO0VBRS9HLE9BQU9YLE1BQU0sQ0FBQ0csTUFBTSxDQUFDQyxJQUFJLENBQUM7SUFDeEJDLElBQUksRUFBRWIsVUFBVTtJQUNoQmMsRUFBRTtJQUNGQyxPQUFPLEVBQUUsb0NBQW9DO0lBQzdDQyxJQUFJLEVBQUc7QUFDWDtBQUNBO0FBQ0Esb0JBQW9CSSxRQUFTO0FBQzdCO0FBQ0E7RUFDRSxDQUFDLENBQUM7QUFDSixDQUFDIn0=