export default function MinimalTest() {
  return (
    <html>
      <head>
        <title>Minimal Test</title>
      </head>
      <body style={{ 
        margin: 0, 
        padding: '20px', 
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f5f5f5'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ color: '#333', textAlign: 'center' }}>🎉 Minimal Test Success!</h1>
          <p style={{ color: '#666', textAlign: 'center', fontSize: '18px' }}>
            If you can see this page, the basic Next.js app is working on Vercel!
          </p>
          <div style={{ 
            marginTop: '30px', 
            padding: '20px', 
            backgroundColor: '#e8f5e8', 
            borderRadius: '4px',
            border: '1px solid #4caf50'
          }}>
            <h3 style={{ color: '#2e7d32', margin: '0 0 10px 0' }}>✅ What this means:</h3>
            <ul style={{ color: '#2e7d32', margin: 0, paddingLeft: '20px' }}>
              <li>Next.js is properly configured</li>
              <li>Vercel deployment is working</li>
              <li>Basic routing is functional</li>
              <li>The issue is likely with components or dependencies</li>
            </ul>
          </div>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <a 
              href="/"
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '12px 24px',
                textDecoration: 'none',
                borderRadius: '4px',
                display: 'inline-block',
                fontSize: '16px'
              }}
            >
              Try Homepage
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
