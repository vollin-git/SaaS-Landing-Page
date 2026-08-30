import { twMerge } from 'tailwind-merge'

/**
 * Join class names, letting later ones win over earlier conflicts.
 *
 * Plain string concatenation is not enough here: Tailwind resolves conflicts by
 * stylesheet order, not attribute order, so a caller passing `hidden` to a
 * component whose base classes include `inline-flex` would silently lose. That
 * bug shipped twice before this was introduced.
 */
export function cn(...parts: (string | false | null | undefined)[]) {
  return twMerge(parts.filter(Boolean).join(' '))
}
