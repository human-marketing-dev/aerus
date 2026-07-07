'use client'
import { useState } from 'react'
import type { FaqCategoria } from '@/lib/faq-mock'

export default function FaqAccordion({ categorias }: { categorias: FaqCategoria[] }) {
  const [open, setOpen] = useState<string | null>(null)
  const toggle = (key: string) => setOpen(o => (o === key ? null : key))

  return (
    <div className="faq-sections">
      {categorias.map((cat, ci) => (
        <div key={ci} className="faq-cat">
          <h2 className="faq-cat-title">{cat.categoria}</h2>
          <div className="faq-list" role="list">
            {cat.items.map((item, ii) => {
              const key = `${ci}-${ii}`
              const isOpen = open === key
              return (
                <div key={key} className="faq-item" role="listitem">
                  <button
                    type="button"
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    onClick={() => toggle(key)}
                  >
                    <span className="faq-q">{item.pregunta}</span>
                    <span className="faq-chevron" aria-hidden="true">›</span>
                  </button>
                  <div
                    className={`faq-panel${isOpen ? ' is-open' : ''}`}
                    aria-hidden={!isOpen}
                  >
                    <div className="faq-panel-inner">
                      <p className="faq-answer">{item.respuesta}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
