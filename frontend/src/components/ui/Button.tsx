import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { ArrowRight, type ArrowTone } from './ArrowRight'
import { cn } from '@/lib/cn'

/**
 * Maps onto the Figma button set:
 *   solid → Button/Solid/Style 02, 04 & 06   (filled brand)
 *   soft  → Button/Solid/Style 01            (brand @ 8% wash)
 *   link  → Button/Solid/Style 03 & 04       (text + tail-right, brand or mint)
 */
type Variant = 'solid' | 'soft' | 'link'
type Tone = 'brand' | 'mint'
type Size = 'md' | 'lg'

type SharedProps = {
  variant?: Variant
  tone?: Tone
  size?: Size
  withArrow?: boolean
  className?: string
  children: ReactNode
}

type ButtonProps =
  | (SharedProps & { as?: 'a' } & Omit<ComponentPropsWithoutRef<'a'>, keyof SharedProps>)
  | (SharedProps & { as: 'button' } & Omit<ComponentPropsWithoutRef<'button'>, keyof SharedProps>)

const SIZES: Record<Size, string> = {
  md: 'h-14 px-5',
  lg: 'h-[76px] px-8',
}

export function Button({
  variant = 'solid',
  tone = 'brand',
  size = 'md',
  withArrow = variant !== 'solid',
  as = 'a',
  className,
  children,
  ...props
}: ButtonProps) {
  const arrowTone: ArrowTone =
    variant === 'solid' ? 'white' : variant === 'soft' ? 'brandLg' : tone === 'mint' ? 'mint' : 'brand'

  const Tag = as as 'a' | 'button'
  const linkProps = as === 'a' ? { href: (props as ComponentPropsWithoutRef<'a'>).href ?? '#' } : {}

  if (variant === 'link') {
    return (
      <Tag
        {...(props as Record<string, unknown>)}
        {...linkProps}
        className={cn(
          'group inline-flex items-center gap-3 text-h4 font-bold tracking-[-1.2px]',
          tone === 'mint' ? 'text-mint' : 'text-brand',
          className,
        )}
      >
        {children}
        <ArrowRight tone={arrowTone} />
      </Tag>
    )
  }

  return (
    <Tag
      {...(props as Record<string, unknown>)}
      {...linkProps}
      className={cn(
        'group relative inline-flex items-center justify-between gap-6 rounded-control text-cta font-bold transition-colors',
        SIZES[size],
        variant === 'solid' ? 'bg-brand text-white hover:bg-brand/90' : 'text-brand',
        !withArrow && 'justify-center',
        className,
      )}
    >
      {variant === 'soft' && (
        <span
          className="absolute inset-0 rounded-control bg-brand opacity-[0.08] transition-opacity group-hover:opacity-[0.14]"
          aria-hidden="true"
        />
      )}
      <span className="relative whitespace-nowrap">{children}</span>
      {withArrow && <ArrowRight tone={arrowTone} className="relative" />}
    </Tag>
  )
}
