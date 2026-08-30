import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Size = 'display' | 'section'
type Tone = 'ink' | 'white'
type Align = 'left' | 'center'

/**
 * The title + lead pairing used by both hero blocks, the pricing title and all
 * three content sections. Figma only ever varies four things across them:
 * heading level, size, alignment and whether it sits on the dark ground.
 */
export function Heading({
  as: Tag = 'h2',
  size = 'section',
  tone = 'ink',
  align = 'left',
  title,
  body,
  className,
  bodyClassName,
  bodyGap = 'mt-6',
  children,
}: {
  as?: 'h1' | 'h2'
  size?: Size
  tone?: Tone
  align?: Align
  title: string
  body?: string
  className?: string
  bodyClassName?: string
  /** Space above the lead. Split out so callers can override it unambiguously. */
  bodyGap?: string
  children?: ReactNode
}) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      <Tag
        className={cn(
          'font-bold',
          size === 'display'
            ? 'text-[40px] leading-tight tracking-[-2px] sm:text-[48px] xl:text-display'
            : 'text-[30px] leading-tight tracking-[-1.2px] xl:text-h2',
          tone === 'white' ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </Tag>

      {body && (
        <p
          className={cn(
            'text-lead',
            bodyGap,
            tone === 'white' ? 'text-white opacity-65' : 'text-ink opacity-70',
            align === 'center' && 'mx-auto',
            bodyClassName,
          )}
        >
          {body}
        </p>
      )}

      {children}
    </div>
  )
}
