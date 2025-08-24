// Email configuration for development and production
export const emailConfig = {
  // API endpoint - using Next.js API route for both environments
  apiEndpoint: '/api/send-email',  // Works for both development and production
  
  // Email settings
  emailSettings: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    to: process.env.EMAIL_TO,
  }
};
