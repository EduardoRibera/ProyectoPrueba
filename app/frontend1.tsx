import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página Básica',
  description: 'Una página básica creada en frontend1.tsx',
};

export default function Frontend1Page() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        backgroundColor: '#f5f7fb',
        color: '#1f2937',
      }}
    >
      <section
        style={{
          maxWidth: '720px',
          width: '100%',
          backgroundColor: '#ffffff',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 20px 50px rgba(15, 23, 42, 0.12)',
        }}
      >
        <h1 style={{ marginBottom: '1rem', fontSize: '2rem' }}>Bienvenido a Frontend1</h1>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.75 }}>
          Esta es una página básica creada directamente en <code>frontend1.tsx</code>.
        </p>
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          <p>Características incluidas:</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.75 }}>
            <li>Componente de página simple con estilo inline</li>
            <li>Meta datos para el título y la descripción</li>
            <li>Fácil de extender para contenido adicional</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
