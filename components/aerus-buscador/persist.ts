// ── Conservar la selección del usuario ───────────────────────────────────────
// Al cambiar ES/EN se navega a otra página y el buscador se monta de nuevo con sus valores
// por defecto (MTY → PDS). Guardamos la selección en sessionStorage y la restauramos al montar.
// Se restaura "como lo haría el usuario" (cambiando los campos y disparando sus eventos),
// para no depender del código interno del script.
const STORAGE_KEY = 'aerus-buscador:v1'
const MAX_AGE_MS = 30 * 60 * 1000

export type Saved = {
  rt: boolean; o: string; d: string; d1: string; d2: string
  a: number; c: number; i: number; t: number
}

const q = <T extends Element>(root: HTMLElement, sel: string) => root.querySelector<T>(sel)

function readState(root: HTMLElement): Saved | null {
  const o = q<HTMLSelectElement>(root, '#ab-o')?.value
  const d = q<HTMLSelectElement>(root, '#ab-d')?.value
  if (!o || !d) return null
  const n = (k: string) => Number(q(root, `#ab-n-${k}`)?.textContent) || 0
  return {
    rt: !!q<HTMLInputElement>(root, '#ab-rt')?.checked,
    o, d,
    d1: q<HTMLInputElement>(root, '#ab-d1')?.value ?? '',
    d2: q<HTMLInputElement>(root, '#ab-d2')?.value ?? '',
    a: n('a'), c: n('c'), i: n('i'),
    t: Date.now(),
  }
}

export function save(root: HTMLElement) {
  const s = readState(root)
  if (!s) return
  try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(s)) } catch { /* modo privado, etc. */ }
}

export function load(): Saved | null {
  try {
    const s = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? 'null') as Saved | null
    return s && Date.now() - s.t < MAX_AGE_MS ? s : null
  } catch { return null }
}

/** Cambia un campo y dispara `change`, como si lo hiciera el usuario. */
function setField(el: HTMLInputElement | HTMLSelectElement | null, value: string) {
  if (!el || !value) return
  if (el instanceof HTMLSelectElement && ![...el.options].some(o => o.value === value)) return
  el.value = value
  el.dispatchEvent(new Event('change', { bubbles: true }))
}

export function restore(root: HTMLElement, s: Saved) {
  // Fecha local en formato yyyy-mm-dd (igual que los <input type="date"> del buscador)
  const now = new Date()
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
  const trip = q<HTMLInputElement>(root, s.rt ? '#ab-rt' : '#ab-ow')
  if (trip && !trip.checked) {
    trip.checked = true
    trip.dispatchEvent(new Event('change', { bubbles: true }))
  }
  setField(q(root, '#ab-o'), s.o)          // repuebla los destinos
  setField(q(root, '#ab-d'), s.d)
  if (s.d1 >= today) setField(q(root, '#ab-d1'), s.d1)
  if (s.d2 >= s.d1 && s.d2 >= today) setField(q(root, '#ab-d2'), s.d2)
  // Pasajeros con los botones +/−; adultos primero (los infantes dependen de ellos)
  for (const k of ['a', 'c', 'i'] as const) {
    const out = () => Number(q(root, `#ab-n-${k}`)?.textContent) || 0
    for (let guard = 0; guard < 12 && out() !== s[k]; guard++) {
      const btn = q<HTMLButtonElement>(root, `.ab-step button[data-k="${k}"][data-s="${out() < s[k] ? 1 : -1}"]`)
      if (!btn || btn.disabled) break
      btn.click()
    }
  }
}
