// lib/withBasePath.ts
/**
 * Prepends the GitHub Pages repo slug when in production
 * so you never have to hard-code “/st-new-portfolio” everywhere.
 */
export function withBasePath(p: string): string {
  // ensure leading slash
  const path = p.startsWith("/") ? p : `/${p}`;
  const base = process.env.NODE_ENV === "production" ? "/st-new-portfolio" : "";
  return `${base}${path}`;
}
