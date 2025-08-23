

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f0f8ff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ 
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        maxWidth: '500px'
      }}>
        <h1 style={{ color: '#1e40af', marginBottom: '1rem', fontSize: '2.5rem' }}>
          🧂 Faychem Salt
        </h1>
        <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Your Global Source for High-Quality Salt
        </p>
        <div style={{ 
          marginBottom: '2rem',
          padding: '1rem',
          backgroundColor: '#e0f2fe',
          borderRadius: '4px',
          border: '1px solid #0284c7'
        }}>
          <p style={{ color: '#0c4a6e', margin: 0 }}>
            ✅ Homepage is working! The issue was with the components.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a 
            href="/contact"
            style={{
              backgroundColor: '#1e40af',
              color: 'white',
              padding: '10px 20px',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          >
            Contact Us
          </a>
          <a 
            href="/minimal-test"
            style={{
              backgroundColor: '#059669',
              color: 'white',
              padding: '10px 20px',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          >
            Test Page
          </a>
        </div>
      </div>
    </div>
  );
}
