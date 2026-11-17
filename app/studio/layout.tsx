// Layout propio del panel de edición: no usa los estilos ni el header del sitio.
export const metadata = {
  title: 'Aerus · Panel de contenido',
  robots: { index: false, follow: false },
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
