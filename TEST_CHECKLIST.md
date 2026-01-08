# Quick Test Checklist

After setting up Gmail SMTP, use this checklist to verify everything works:

## ✅ Pre-Test Checklist

- [ ] `.env.local` file created with Gmail credentials
- [ ] SMTP_USER = your Gmail address
- [ ] SMTP_PASS = 16-character app password (no spaces)
- [ ] Development server restarted after adding credentials
- [ ] Check console shows "Ready" without errors

## 🧪 Testing Steps

### 1. Submit Test Form

1. Open http://localhost:3000/contact
2. Fill in the form:
   ```
   Name: Test User
   Email: your-test-email@gmail.com
   Phone: +91 90 92 92 0927
   Vehicle: BMW 3 Series 2020
   Service: Routine Maintenance
   Message: This is a test submission
   ```
3. Click "Submit Request"

### 2. Check Success Message

- [ ] Button shows "Submitting..." while processing
- [ ] Green success message appears: "Thank you! We'll get back to you within 24 hours."
- [ ] Form fields are cleared
- [ ] No error messages shown

### 3. Verify Email Sent

Check the terminal/console for:
```
Email sent successfully: <message-id>
```

### 4. Check Email Received

1. Log into service@germanwerks.in
2. Check inbox (and spam folder)
3. Verify email contains:
   - [ ] Subject: "New Service Request from Test User"
   - [ ] Customer name, email, phone
   - [ ] Vehicle details
   - [ ] Service type
   - [ ] Message content
   - [ ] Professional HTML formatting
   - [ ] Reply-to set to customer's email

### 5. Test Reply Functionality

1. Click "Reply" on the received email
2. Verify it replies to customer's email address
3. Send a test reply to confirm it works

## 🐛 If Something Goes Wrong

### Error: "Email service not configured"
→ Check `.env.local` exists and has SMTP_USER and SMTP_PASS

### Error: "Invalid login"
→ Verify you're using App Password, not regular Gmail password
→ Ensure 2-Step Verification is enabled

### Email sent but not received
→ Check spam folder
→ Verify service@germanwerks.in is correct
→ Check Gmail account isn't suspended

### Console error messages
→ Copy the error message
→ Check if nodemailer is installed: `npm list nodemailer`
→ Restart dev server

## 📊 Server Console Output

Expected output when form is submitted:

```
POST /api/contact 200 in 2345ms
Email sent successfully: <long-message-id@gmail.com>
```

## 🔄 After Successful Test

- [ ] Test with different email addresses
- [ ] Test with different service types
- [ ] Test form validation (submit empty form)
- [ ] Test long messages
- [ ] Test special characters in name/message

## 📝 Production Deployment

Before deploying to production:

1. Add environment variables to hosting platform
2. Test on staging environment first
3. Monitor email delivery rates
4. Set up email notifications for failures
5. Consider Gmail sending limits (500/day)

## 🎯 Success Criteria

✅ All tests passed when:
- Form submits without errors
- Success message displays
- Email arrives at service@germanwerks.in
- Email content is formatted correctly
- Reply-to works properly
- Server logs show success

---

**Ready for production!** 🚀
