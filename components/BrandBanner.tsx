import type { Lang } from '@/lib/i18n'

const TEXT: Record<Lang, string> = {
  es: 'TU NUEVA FORMA DE VIAJAR',
  en: 'YOUR NEW WAY TO TRAVEL',
}

export default function BrandBanner({ lang }: { lang: Lang }) {
  return (
    <div className="brand-banner" aria-hidden="true">
      <span className="bb-text">{TEXT[lang]}</span>
    </div>
  )
}
