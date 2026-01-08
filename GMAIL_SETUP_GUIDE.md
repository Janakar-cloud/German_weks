# Gmail SMTP Setup Guide - Quick Start

## Step-by-Step Instructions

### 1️⃣ Enable 2-Factor Authentication on Gmail

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Find **"2-Step Verification"** section
3. Click on it and follow the prompts to enable
4. Verify with your phone number

### 2️⃣ Generate App Password

1. After enabling 2FA, go back to [Security page](https://myaccount.google.com/security)
2. Scroll down to **"2-Step Verification"**
3. At the bottom, click **"App passwords"**
4. You may need to sign in again
5. Select:
   - **App:** Mail
   - **Device:** Other (custom name)
   - Enter name: "German Werks Website"
6. Click **"Generate"**
7. **Copy the 16-character password** (it will look like: `abcd efgh ijkl mnop`)

### 3️⃣ Update .env.local File

1. Open the file `.env.local` in the project root
2. Replace the placeholder values:

```env
SMTP_USER=your-actual-gmail@gmail.com
SMTP_PASS=abcdefghijklmnop
```

**Important:** 
- Remove spaces from the app password
- Use the Gmail address you want emails to come from

### 4️⃣ Restart the Development Server

Stop the current server (Ctrl+C) and restart:

```bash
npm run dev
```

### 5️⃣ Test the Contact Form

1. Go to http://localhost:3000/contact
2. Fill out the form with test data
3. Click "Submit Request"
4. Check:
   - Success message appears
   - Email arrives at service@germanwerks.in
   - Check spam folder if not in inbox

---

## Example Configuration

Here's what your `.env.local` should look like (with your actual values):

```env
SMTP_USER=germanwerks.business@gmail.com
SMTP_PASS=abcdefghijklmnop
```

---

## Troubleshooting

### "Invalid login" error
- Make sure you're using the **App Password**, not your regular Gmail password
- Verify 2-Step Verification is enabled
- Check there are no spaces in the password

### "Less secure app" error
- Gmail requires App Passwords for security
- Make sure you generated the password correctly
- You may need to wait a few minutes after generating

### Email not received
- Check spam folder
- Verify the email address is correct in the code
- Check Gmail account is not suspended
- Look at server console for error messages

### Gmail daily limit reached
- Free Gmail: ~500 emails/day
- Google Workspace: 2,000 emails/day
- Consider upgrading or using a dedicated service

---

## Security Notes

✅ **Do:**
- Keep `.env.local` private (it's in .gitignore)
- Use App Passwords, not your Gmail password
- Revoke unused app passwords periodically

❌ **Don't:**
- Share your app password
- Commit `.env.local` to Git
- Use your personal Gmail for production
- Share screenshots with credentials visible

---

## Production Recommendations

For production deployment (Vercel, Netlify, etc.):

1. **Add environment variables in hosting platform:**
   - Go to project settings
   - Add `SMTP_USER` and `SMTP_PASS`
   - Deploy

2. **Consider alternatives for better deliverability:**
   - [Resend](https://resend.com) - Modern email API
   - [SendGrid](https://sendgrid.com) - Reliable service
   - [Google Workspace](https://workspace.google.com) - Professional email
   - [AWS SES](https://aws.amazon.com/ses/) - Scalable solution

---

## Need Help?

If you encounter issues:

1. Check server console for error messages
2. Verify credentials in `.env.local`
3. Test with another email address
4. Check Gmail account settings

**Contact Information on Website:**
- service@germanwerks.in (where emails are sent)
- Gopal: +91 90 92 92 0924
- Dhilip: +91 90 92 92 0927 (Primary)
- Gokul: +91 90 92 92 0928 (Secondary)
