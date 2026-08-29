/** Join conditional class names — keeps components readable without a dependency. */
export function cn(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(' ')
}
