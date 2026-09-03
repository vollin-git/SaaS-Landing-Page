import { Children, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

/**
 * Turns a row of cards into an edge-to-edge, snapping horizontal rail on small
 * screens, then hands off to whatever layout `className` describes from the
 * breakpoint up. Used by the pricing plans, testimonials and partner logos.
 *
 * The negative margin cancels Container's px-6 so the rail bleeds to both
 * screen edges, while scroll-px-6 keeps snapped cards aligned to the text above
 * them. Items default to 85% width so the next card peeks in — that peek, plus
 * snapping, is what tells people the row scrolls once the scrollbar is hidden.
 */
export function CardRail({
  className,
  itemClassName,
  children,
}: {
  /** Layout classes for the non-rail breakpoints, e.g. "md:grid md:grid-cols-3". */
  className?: string
  itemClassName?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        '-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-6 px-6 pb-2 no-scrollbar',
        className,
      )}
    >
      {Children.map(children, (child) => (
        <div className={cn('w-[85%] shrink-0 snap-start', itemClassName)}>{child}</div>
      ))}
    </div>
  )
}
