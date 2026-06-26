'use client'
import { useEffect } from 'react'

const TARGETS = [
  '.eyebrow',
  '.section-headline',
  '.section-intro',
  '.exp-stat',
  '.rev-card',
  '.servicio',
  '.espera .step',
  '.rm-stat',
  '.rm-cta',
  '.rm-intro',
  '.rm-stats',
  '.tarifas .header',
  '.tarifas .tab-bar',
  '.tarifas .panel .visual',
  '.tarifas .panel .features',
  '.exp-photo',
  '.exp-content',
  '.reviews-header',
  '.reviews-aggregate',
  '.pagos .header',
  '.pagos .logos',
  '.cta-newsletter h2',
  '.cta-newsletter p',
  '.cta-newsletter form',
  '.footer .top > *',
  '.footer .contacts .item',
  '.directos .left',
  '.directos .routes-tables',
  '.espera .header > *',
  '.espera .note',
  '.brand-banner',
  '.booking-h',
].join(', ')

export default function ScrollAnimations() {
  useEffect(() => {
    const vh = window.innerHeight
    const targets = Array.from(document.querySelectorAll<HTMLElement>(TARGETS))

    targets.forEach(el => {
      const { top } = el.getBoundingClientRect()
      if (top > vh * 0.92) el.classList.add('reveal')
    })

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement
          el.classList.add('is-visible')
          io.unobserve(el)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })

    targets.forEach(el => {
      if (el.classList.contains('reveal')) io.observe(el)
    })

    return () => io.disconnect()
  }, [])

  return null
}
