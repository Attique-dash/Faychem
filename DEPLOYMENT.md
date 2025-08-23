# Email Deployment Guide for Vercel

## Overview
This guide explains how to deploy your email functionality to Vercel.

## Current Setup
- ✅ **Development**: Uses local Express.js server on port 5000
- ✅ **Production**: Uses Vercel API routes (`/api/send-email`)

## Deployment Steps

### 1. Environment Variables (Required for Production)
Add these environment variables in your Vercel dashboard:

```
EMAIL_USER=umershafeeq053@gmail.com
EMAIL_PASS=uarf vlrl zmdj frqt
EMAIL_TO=umershafeeq053@gmail.com
```

### 2. How to Add Environment Variables in Vercel:
1. Go to your Vercel dashboard
2. Select your project
3. Go to "Settings" → "Environment Variables"
4. Add each variable:
   - `EMAIL_USER`: umershafeeq053@gmail.com
   - `EMAIL_PASS`: uarf vlrl zmdj frqt
   - `EMAIL_TO`: umershafeeq053@gmail.com

### 3. Deploy to Vercel
```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy
vercel

# Or use Vercel dashboard to connect your GitHub repo
```

## How It Works

### Development Mode
- Uses local Express.js server: `http://localhost:5000/send`
- Start with: `cd email-backend && npm start`

### Production Mode (Vercel)
- Uses Vercel API route: `/api/send-email`
- Automatically handles serverless functions

## Testing

### Local Testing
1. Start your Next.js app: `npm run dev`
2. Start email backend: `cd email-backend && npm start`
3. Test contact form

### Production Testing
1. Deploy to Vercel
2. Test contact form on live site
3. Check Vercel function logs for any errors

## Troubleshooting

### Common Issues:
1. **Email not sending**: Check environment variables in Vercel
2. **CORS errors**: API routes handle CORS automatically
3. **Gmail authentication**: Make sure app password is correct

### Gmail Setup:
1. Enable 2-factor authentication
2. Generate app password
3. Use app password in EMAIL_PASS

## Security Notes
- ✅ Environment variables are encrypted in Vercel
- ✅ API routes are serverless and secure
- ✅ No hardcoded credentials in production code
