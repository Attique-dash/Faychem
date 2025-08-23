# Vercel Deployment Guide

## Prerequisites
- Vercel account
- GitHub repository connected to Vercel
- Environment variables configured

## Environment Variables Setup

### 1. In Vercel Dashboard:
1. Go to your project settings in Vercel
2. Navigate to "Environment Variables" section
3. Add the following variables:

```
EMAIL_USER=umershafeeq053@gmail.com
EMAIL_PASS=uarf vlrl zmdj frqt
EMAIL_TO=umershafeeq053@gmail.com
```

**Important**: Do NOT use the `@` symbol or reference secrets in vercel.json. Set these directly as environment variables in the Vercel dashboard.

### 2. Environment Variable Configuration:
- **Production**: Set for production environment
- **Preview**: Set for preview deployments
- **Development**: Set for local development

## Deployment Steps

### 1. Connect Repository
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect Next.js configuration

### 2. Build Configuration
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 3. Domain Configuration
- Vercel will provide a default domain
- You can add custom domains in project settings

## Troubleshooting

### Common Issues:

1. **404 NOT_FOUND Error**
   - Ensure all environment variables are set
   - Check that API routes are properly configured
   - Verify build logs for any errors

2. **Build Failures**
   - Check package.json for correct dependencies
   - Ensure all imports are valid
   - Verify Next.js version compatibility

3. **API Route Issues**
   - Environment variables must be set in Vercel dashboard
   - Check API route logs in Vercel function logs
   - Ensure proper error handling in API routes

4. **CSS Not Loading**
   - Verify Tailwind CSS is properly configured
   - Check that globals.css is imported in layout.js
   - Ensure Tailwind config includes all component paths
   - Clear browser cache and redeploy

### Debugging Steps:

1. **Check Build Logs**
   - Go to Vercel dashboard → Deployments
   - Click on failed deployment
   - Review build logs for errors

2. **Check Function Logs**
   - Go to Functions tab in Vercel dashboard
   - Check logs for API route errors

3. **Environment Variables**
   - Verify all required env vars are set
   - Check variable names match code exactly

## Local Development

1. Create `.env.local` file:
```
EMAIL_USER=umershafeeq053@gmail.com
EMAIL_PASS=uarf vlrl zmdj frqt
EMAIL_TO=umershafeeq053@gmail.com
```

2. Run development server:
```bash
npm run dev
```

## Production Checklist

- [ ] All environment variables set in Vercel
- [ ] API routes tested locally
- [ ] Build completes successfully
- [ ] All pages load without errors
- [ ] Email functionality works
- [ ] Images load properly
- [ ] Responsive design works on all devices

## Security Notes

- Never commit `.env.local` files to repository
- Use Vercel's environment variable system for production
- Regularly rotate email passwords
- Monitor function logs for security issues
