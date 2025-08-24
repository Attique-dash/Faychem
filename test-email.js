// Test script to verify email functionality
const testEmailData = {
  name: "Test User",
  email: "test@example.com",
  message: "This is a test email from the contact form",
  companyName: "Test Company",
  companyAddress: "123 Test Street",
  country: "Test Country"
};

async function testEmailAPI() {
  try {
    const response = await fetch('http://localhost:3000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testEmailData)
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Email test successful:', result);
    } else {
      console.log('❌ Email test failed:', result);
    }
  } catch (error) {
    console.log('❌ Email test error:', error.message);
  }
}

// Run test if this file is executed directly
if (typeof window === 'undefined') {
  testEmailAPI();
}

export { testEmailAPI };
