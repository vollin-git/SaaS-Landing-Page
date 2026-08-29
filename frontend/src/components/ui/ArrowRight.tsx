import headBrand from '@/assets/icons/arrow-head-brand.svg'
import lineBrand from '@/assets/icons/arrow-line-brand.svg'
import headBrandLg from '@/assets/icons/arrow-head-brand-lg.svg'
import lineBrandLg from '@/assets/icons/arrow-line-brand-lg.svg'
import headWhite from '@/assets/icons/arrow-head-white.svg'
import lineWhite from '@/assets/icons/arrow-line-white.svg'
import headMint from '@/assets/icons/arrow-head-green.svg'
import lineMint from '@/assets/icons/arrow-line-green.svg'

import { cn } from '@/lib/cn'

export type ArrowTone = 'brand' | 'brandLg' | 'white' | 'mint'

/**
 * Figma's "tail-right" glyph is two separate vector layers (a chevron and a
 * rule) exported per colour, so each tone gets its own pair of assets rather
 * than a re-coloured SVG.
 */
const TONES: Record<ArrowTone, { head: string; line: string; box: string; headSize: string; lineSize: string }> = {
  brand: { head: headBrand, line: lineBrand, box: 'h-[11.27px] w-[18.2px]', headSize: 'h-[11.267px] w-[6.067px]', lineSize: 'h-[1.733px] w-[12.133px]' },
  mint: { head: headMint, line: lineMint, box: 'h-[11.27px] w-[18.2px]', headSize: 'h-[11.267px] w-[6.067px]', lineSize: 'h-[1.733px] w-[12.133px]' },
  brandLg: { head: headBrandLg, line: lineBrandLg, box: 'h-[12.13px] w-[19.6px]', headSize: 'h-[12.133px] w-[6.533px]', lineSize: 'h-[1.867px] w-[13.067px]' },
  white: { head: headWhite, line: lineWhite, box: 'h-[12.13px] w-[19.6px]', headSize: 'h-[12.133px] w-[6.533px]', lineSize: 'h-[1.867px] w-[13.067px]' },
}

export function ArrowRight({ tone = 'brand', className }: { tone?: ArrowTone; className?: string }) {
  const { head, line, box, headSize, lineSize } = TONES[tone]

  return (
    <span
      aria-hidden="true"
      className={cn(
        'relative inline-block shrink-0 transition-transform duration-200 group-hover:translate-x-1',
        box,
        className,
      )}
    >
      <img src={line} alt="" className={cn('absolute right-[0.7px] top-1/2 max-w-none -translate-y-1/2', lineSize)} />
      <img src={head} alt="" className={cn('absolute right-0 top-1/2 max-w-none -translate-y-1/2', headSize)} />
    </span>
  )
}
