import type { ReactNode } from 'react'
import { Container } from './Container'
import { cn } from '@/lib/cn'

type Tone = 'white' | 'cloud' | 'ink'

const TONES: Record<Tone, string> = {
  white: 'bg-white',
  cloud: 'bg-cloud',
  ink: 'bg-ink',
}

/**
 * Every band on both screens is a tone + vertical rhythm wrapped around the
 * shared Container. `bleed` opts out of the container for sections that need to
 * run edge-to-edge (the logo rule, the map).
 */
export function Section({
  tone = 'white',
  bleed = false,
  className,
  containerClassName,
  children,
}: {
  tone?: Tone
  bleed?: boolean
  className?: string
  containerClassName?: string
  children: ReactNode
}) {
  return (
    <section className={cn(TONES[tone], className)}>
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  )
}
