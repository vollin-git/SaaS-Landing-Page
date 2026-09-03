import type { ReactNode } from 'react'

/**
 * A native checkbox tinted with the brand accent. Kept native rather than
 * redrawn: the design system has no checkbox glyph, and inventing one would
 * mean authoring vector data that isn't in the Figma file.
 */
export function Checkbox({ name, children }: { name: string; children: ReactNode }) {
  return (
    <label htmlFor={name} className="flex items-start gap-3 text-small text-ink">
      <input
        id={name}
        name={name}
        type="checkbox"
        className="mt-[5px] h-[16px] w-[16px] shrink-0 accent-brand"
      />
      <span className="opacity-70">{children}</span>
    </label>
  )
}
