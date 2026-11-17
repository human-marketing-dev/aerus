// Banner "Tu nueva forma de viajar" del home. Texto: Sanity → Inicio → Secciones.
export default function BrandBanner({ texto }: { texto: string }) {
  return (
    <div className="brand-banner" aria-hidden="true">
      <span className="bb-text">{texto}</span>
    </div>
  )
}
