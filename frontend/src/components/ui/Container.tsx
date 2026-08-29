import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

/** The 1488px content column from the Figma artboard (2144px frame, 328px gutters). */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-page px-6 lg:px-10', className)}>{children}</div>
}
