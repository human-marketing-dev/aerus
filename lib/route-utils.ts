// Pure utilities — no server-only, safe to import from client and server components.

export function slugify(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')   // strip diacritics
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export function getConnections(city: string, routes: [string, string][]): string[] {
  const set = new Set<string>()
  for (const [a, b] of routes) {
    if (a === city) set.add(b)
    else if (b === city) set.add(a)
  }
  return [...set]
}
