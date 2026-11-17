// Nombres de los íconos disponibles en components/icons.tsx (para elegirlos desde Sanity).
// Si se agrega un ícono en icons.tsx, agregarlo también aquí.
export const ICON_NAMES = [
  'plane', 'plane-takeoff', 'calendar', 'users', 'user', 'luggage', 'wifi', 'snack', 'chair', 'ticket',
  'shield', 'check', 'circle-check', 'x', 'phone', 'mail', 'pin', 'bot', 'lock', 'camera', 'globe',
  'clock', 'swap', 'arrows-swap', 'support', 'credit-card', 'cash', 'search', 'menu',
  'arrow-right', 'arrow-left', 'arrow-up-right',
] as const
export type IconName = (typeof ICON_NAMES)[number]
