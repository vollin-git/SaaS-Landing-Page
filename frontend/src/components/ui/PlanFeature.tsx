import check from '@/assets/icons/check.svg'
import crossA from '@/assets/icons/cross-a.svg'
import crossB from '@/assets/icons/cross-b.svg'

import { cn } from '@/lib/cn'

/**
 * Figma: List/Style 01. Included rows use the tick glyph; excluded rows use the
 * "small-remove" cross, which ships as two overlaid stroke layers.
 */
export function PlanFeature({ label, included }: { label: string; included: boolean }) {
  return (
    <li className="flex items-center gap-3">
      <span className="relative flex h-[17px] w-[17px] shrink-0 items-center justify-center" aria-hidden="true">
        {included ? (
          <img src={check} alt="" className="h-[11.769px] w-[17px] max-w-none" />
        ) : (
          <>
            <img src={crossA} alt="" className="absolute left-0 top-1/2 h-3 w-3 max-w-none -translate-y-1/2" />
            <img src={crossB} alt="" className="absolute left-0 top-1/2 h-3 w-3 max-w-none -translate-y-1/2" />
          </>
        )}
      </span>
      <span className={cn('text-body text-ink', !included && 'opacity-70')}>{label}</span>
    </li>
  )
}
