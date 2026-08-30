import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/cn'

/**
 * The media-beside-copy layout shared by Content 01 / 02 / 03. Track sizes and
 * the column gap come straight from each Figma frame and only apply from xl up;
 * below that the two halves stack. `copyFirst` flips the order for Content 02.
 */
export function SplitSection({
  media,
  copy,
  columns,
  gap,
  copyFirst = false,
}: {
  media: ReactNode
  copy: ReactNode
  columns: string
  gap: string
  copyFirst?: boolean
}) {
  return (
    <div
      className="grid items-center gap-16 xl:grid-cols-(--split-cols) xl:justify-between xl:gap-x-(--split-gap)"
      style={{ '--split-cols': columns, '--split-gap': gap } as CSSProperties}
    >
      <div className={cn('w-full', copyFirst ? 'xl:order-2' : 'xl:order-1')}>{media}</div>
      <div className={cn('w-full', copyFirst ? 'xl:order-1' : 'xl:order-2')}>{copy}</div>
    </div>
  )
}
