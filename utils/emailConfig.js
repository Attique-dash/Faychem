// Email configuration for development and production
export const emailConfig = {
  // API endpoint - will work for both local and deployed environments
  apiEndpoint: process.env.NODE_ENV === 'production' 
    ? '/api/send-email'  // Production: relative path
    : 'http://localhost:5000/send', // Development: local server
  
  // Email settings
  emailSettings: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    to: process.env.EMAIL_TO,
  }
};
