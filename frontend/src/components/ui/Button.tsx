import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { ArrowRight, type ArrowTone } from './ArrowRight'
import { cn } from '@/lib/cn'

/**
 * Maps onto the Figma button set:
 *   solid → Button/Solid/Style 02 & 06   (filled brand)
 *   soft  → Button/Solid/Style 01        (brand @ 8% wash)
 *   link  → Button/Solid/Style 03 & 04   (text + tail-right, brand or mint)
 */
type Variant = 'solid' | 'soft' | 'link'
type Tone = 'brand' | 'mint'
type Size = 'md' | 'lg'

type ButtonProps = ComponentPropsWithoutRef<'a'> & {
  variant?: Variant
  tone?: Tone
  size?: Size
  withArrow?: boolean
  children: ReactNode
}

const SIZES: Record<Size, string> = {
  md: 'h-14 px-5',
  lg: 'h-[76px] px-8',
}

export function Button({
  variant = 'solid',
  tone = 'brand',
  size = 'md',
  withArrow = variant !== 'solid',
  className,
  children,
  href = '#',
  ...props
}: ButtonProps) {
  const arrowTone: ArrowTone = variant === 'solid' ? 'white' : variant === 'soft' ? 'brandLg' : tone === 'mint' ? 'mint' : 'brand'

  if (variant === 'link') {
    return (
      <a
        href={href}
        className={cn(
          'group inline-flex items-center gap-3 text-h4 font-bold tracking-[-1.2px]',
          tone === 'mint' ? 'text-mint' : 'text-brand',
          className,
        )}
        {...props}
      >
        {children}
        <ArrowRight tone={arrowTone} />
      </a>
    )
  }

  return (
    <a
      href={href}
      className={cn(
        'group relative inline-flex items-center justify-between gap-6 rounded-control text-cta font-bold transition-colors',
        SIZES[size],
        variant === 'solid' ? 'bg-brand text-white hover:bg-brand/90' : 'text-brand',
        !withArrow && 'justify-center',
        className,
      )}
      {...props}
    >
      {variant === 'soft' && (
        <span className="absolute inset-0 rounded-control bg-brand opacity-[0.08] transition-opacity group-hover:opacity-[0.14]" aria-hidden="true" />
      )}
      <span className="relative whitespace-nowrap">{children}</span>
      {withArrow && <ArrowRight tone={arrowTone} className="relative" />}
    </a>
  )
}
