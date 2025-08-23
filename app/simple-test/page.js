export default function SimpleTest() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ 
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ color: '#333', marginBottom: '1rem' }}>✅ Simple Test Page</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          If you can see this page, basic routing is working!
        </p>
        <a 
          href="/"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            textDecoration: 'none',
            borderRadius: '4px',
            display: 'inline-block'
          }}
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}
