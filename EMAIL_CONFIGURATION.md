# Email Configuration Guide for AceHost Contact Form

## Critical Email Configuration

**IMPORTANT: The contact form must be configured correctly to work reliably**

This document outlines the email configuration for the AceHost website contact form. This setup has been carefully configured to ensure reliable email delivery and should not be changed without thorough testing.

## Configuration Overview

### Current Working Setup

- **Sending Account**: `benkirsh1@gmail.com` (using Google App Password)
- **Receiving Account**: `ben@acehost.ca`
- **SMTP Service**: Gmail

### Important Configuration Files

1. **`.env.local`** - Contains the environment variables
2. **`src/pages/api/contact.ts`** - Contains the email sending logic

## Required Environment Variables

```
SMTP_USER=benkirsh1@gmail.com
SMTP_PASSWORD=jreg ytvb dmcs kpej
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
```

## Common Issues & Solutions

### Issue: Contact Form Stops Working

If the contact form stops working, check the following:

1. Verify that `.env.local` contains the correct configuration
2. Ensure `benkirsh1@gmail.com` is used as the sender (SMTP_USER)
3. Confirm that the app password is still valid (Google app passwords expire occasionally)
4. Check server logs for any authentication errors

### DO NOT Modify These Settings:

- Do not change SMTP_USER to `ben@acehost.ca` (this will cause authentication issues)
- Do not remove the Gmail app password
- Do not change the hardcoded email settings in the contact.ts file without testing

## How Email Sending Works

1. The contact form submits data to `/api/contact`
2. The API uses `nodemailer` to send the email via Gmail SMTP
3. The email is sent FROM `benkirsh1@gmail.com` 
4. The email is delivered TO `ben@acehost.ca`
5. The "Reply-To" header is set to the user's submitted email

## Updating App Password

If you need to update the Gmail app password:

1. Go to https://myaccount.google.com/apppasswords
2. Log in with `benkirsh1@gmail.com`
3. Select "Mail" and "Other" (name it "AceHost Website")
4. Generate a new app password
5. Update the `.env.local` file with the new password
6. Test the contact form after deployment

## Verifying the Fix

This configuration has been tested and verified on April 21, 2025. If you need to make changes, thoroughly test on a staging environment before deploying to production. 