import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

/** Figma: Tag/Tag 02 — brand pill at 10% opacity. */
export function Tag({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <span className={cn('relative inline-flex items-center rounded-pill px-4 py-[7px]', className)}>
      <span className="absolute inset-0 rounded-pill bg-brand opacity-10" aria-hidden="true" />
      <span className="relative text-eyebrow font-bold uppercase text-brand">{children}</span>
    </span>
  )
}
