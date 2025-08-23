// Email configuration for development and production
export const emailConfig = {
  // API endpoint - will work for both local and deployed environments
  apiEndpoint: process.env.NODE_ENV === 'production' 
    ? '/api/send-email'  // Production: relative path
    : 'http://localhost:5000/send', // Development: local server
  
  // Email settings
  emailSettings: {
    user: process.env.EMAIL_USER || 'umershafeeq053@gmail.com',
    pass: process.env.EMAIL_PASS || 'uarf vlrl zmdj frqt',
    to: process.env.EMAIL_TO || 'umershafeeq053@gmail.com',
  }
};
