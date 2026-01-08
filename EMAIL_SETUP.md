# Email Integration Setup

The contact form is configured to send emails to `service@germanwerks.in`. Currently, the API endpoint logs email data to the console. To enable actual email sending, follow one of these integration methods:

## Option 1: Resend (Recommended)

Resend is a modern email API that's easy to integrate and has a generous free tier.

### Setup Steps:

1. **Install Resend:**
   ```bash
   npm install resend
   ```

2. **Get API Key:**
   - Sign up at [resend.com](https://resend.com)
   - Get your API key from the dashboard
   - Add to `.env.local`:
     ```
     RESEND_API_KEY=your_api_key_here
     ```

3. **Update API Route:**
   
   Edit `src/app/api/contact/route.ts` and add at the top:
   ```typescript
   import { Resend } from 'resend';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   ```

   Then uncomment and update the email sending code:
   ```typescript
   const { data, error } = await resend.emails.send({
     from: 'German Werks <noreply@germanwerks.in>',
     to: 'service@germanwerks.in',
     replyTo: email,
     subject: emailContent.subject,
     html: emailContent.html,
   });

   if (error) {
     throw new Error(error.message);
   }
   ```

4. **Verify Domain (Production):**
   - Add your domain in Resend dashboard
   - Add DNS records provided by Resend
   - For testing, you can use their sandbox domain

## Option 2: SendGrid

1. **Install SendGrid:**
   ```bash
   npm install @sendgrid/mail
   ```

2. **Get API Key:**
   - Sign up at [sendgrid.com](https://sendgrid.com)
   - Create API key
   - Add to `.env.local`:
     ```
     SENDGRID_API_KEY=your_api_key_here
     ```

3. **Update API Route:**
   ```typescript
   import sgMail from '@sendgrid/mail';
   
   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
   
   await sgMail.send({
     to: 'service@germanwerks.in',
     from: 'noreply@germanwerks.in',
     replyTo: email,
     subject: emailContent.subject,
     html: emailContent.html,
     text: emailContent.text,
   });
   ```

## Option 3: Nodemailer (SMTP)

1. **Install Nodemailer:**
   ```bash
   npm install nodemailer
   ```

2. **Get SMTP Credentials:**
   - Use your email provider's SMTP settings
   - Or use services like Gmail, Outlook, etc.
   - Add to `.env.local`:
     ```
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_USER=your-email@gmail.com
     SMTP_PASS=your-app-password
     ```

3. **Update API Route:**
   ```typescript
   import nodemailer from 'nodemailer';
   
   const transporter = nodemailer.createTransport({
     host: process.env.SMTP_HOST,
     port: Number(process.env.SMTP_PORT),
     secure: false,
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASS,
     },
   });
   
   await transporter.sendMail({
     from: process.env.SMTP_USER,
     to: 'service@germanwerks.in',
     replyTo: email,
     subject: emailContent.subject,
     html: emailContent.html,
     text: emailContent.text,
   });
   ```

## Testing

After setup, test the contact form:

1. Start the dev server: `npm run dev`
2. Navigate to the contact page
3. Fill and submit the form
4. Check:
   - Email sent successfully
   - Form shows success message
   - Email received at service@germanwerks.in

## Current Behavior

Without email integration configured:
- Form submission is processed
- Data is logged to the console
- Success message is displayed to user
- No actual email is sent

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Choose ONE of these email providers:

# Resend
RESEND_API_KEY=re_xxxxxxxxxxxx

# SendGrid
SENDGRID_API_KEY=SG.xxxxxxxxxxxx

# SMTP (Gmail, Outlook, etc.)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

**Note:** Never commit `.env.local` to version control. It's already in `.gitignore`.

## Contact Information

Emails are sent to: **service@germanwerks.in**

Contact details displayed on the website:
- **Gopal:** +91 90 92 92 0924
- **Dhilip:** +91 90 92 92 0927 (Primary Contact)
- **Gokul:** +91 90 92 92 0928 (Secondary Contact)

## Troubleshooting

**Error: "Failed to submit form"**
- Check browser console for detailed error
- Check server console/terminal for API logs
- Verify environment variables are set
- Check email service API key is valid

**Emails not received:**
- Check spam folder
- Verify email service is configured correctly
- Check domain verification (for production)
- Review email service logs/dashboard

**Rate Limits:**
- Resend free: 100 emails/day
- SendGrid free: 100 emails/day
- SMTP: Depends on provider

For production, consider upgrading to paid plans for higher limits and better deliverability.
