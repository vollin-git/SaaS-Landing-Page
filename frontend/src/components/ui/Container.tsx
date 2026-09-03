import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

/**
 * The page content column. Width comes from --container-w so a page can set it
 * once on its root: the landing frame uses 1488px, the contact frame 1110px.
 */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-(--container-w) px-6 lg:px-10', className)}>{children}</div>
}
