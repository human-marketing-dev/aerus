'use client'

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  return (
    <html lang="es">
      <body style={{
        margin: 0,
        background: '#0C2626',
        color: '#FFFFFF',
        fontFamily: 'system-ui, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '32px',
        boxSizing: 'border-box',
      }}>
        <div>
          <p style={{ margin: '0 0 8px', fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#AEF821' }}>
            Aerus
          </p>
          <h1 style={{ margin: '0 0 16px', fontSize: 28, fontWeight: 700 }}>
            Algo salió mal
          </h1>
          <p style={{ margin: '0 0 32px', fontSize: 15, color: 'rgba(255,255,255,0.60)', maxWidth: 360 }}>
            Ocurrió un error inesperado. Puedes intentar de nuevo o regresar al inicio.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={unstable_retry}
              style={{
                padding: '12px 24px', borderRadius: 8, border: 'none',
                background: '#AEF821', color: '#0C2626',
                fontSize: 14, fontWeight: 600, cursor: 'pointer',
              }}
            >
              Intentar de nuevo
            </button>
            <a
              href="/"
              style={{
                padding: '12px 24px', borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#FFFFFF', fontSize: 14, fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Ir al inicio
            </a>
          </div>
          {error.digest && (
            <p style={{ marginTop: 32, fontSize: 11, color: 'rgba(255,255,255,0.30)', fontFamily: 'monospace' }}>
              {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  )
}
