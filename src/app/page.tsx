export default function Home() {
  return (
    <main style={{ padding: '3rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ color: '#3b82f6' }}>Deployxa E-commerce Template</h1>
      <p style={{ color: '#94a3b8' }}>High-performance storefront framework.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
        <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px' }}>
          <h4>Product A</h4>
          <p>$49.99</p>
        </div>
        <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px' }}>
          <h4>Product B</h4>
          <p>$99.99</p>
        </div>
      </div>
    </main>
  );
}
