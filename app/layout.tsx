import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aerus · Descubre el futuro',
  description: 'Aerolínea mexicana enfocada en la agilidad, la flexibilidad y la innovación. Reimagina la nueva forma de moverse.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
