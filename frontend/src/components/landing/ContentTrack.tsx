import laptop from '@/assets/images/content-01-laptop.png'
import laptopMask from '@/assets/images/content-01-laptop-mask.svg'

import { Container } from '@/components/ui/Container'
import { ContentCopy } from './ContentCopy'
import { contentSections } from '@/data/landing'

/**
 * Figma: Content 01 (1:1082). The laptop render overhangs the grey card on both
 * sides and is clipped by a vector mask; percentages keep that composition
 * intact as the block scales.
 */
export function ContentTrack() {
  return (
    <section className="bg-white pb-[124px]">
      <Container>
        <div className="grid items-center gap-16 xl:grid-cols-[minmax(0,803px)_minmax(0,549px)] xl:justify-between xl:gap-[123px]">
          <div className="relative w-full" style={{ aspectRatio: '962.858 / 721.01' }}>
            <div
              className="absolute rounded-control bg-shade shadow-card"
              style={{ left: '0.278%', top: '0.211%', width: '83.45%', height: '89.26%' }}
            />
            <div
              className="absolute inset-0"
              style={{
                maskImage: `url(${laptopMask})`,
                maskSize: '90.51% 99.80%',
                maskPosition: '-34.29% 107.43%',
                maskRepeat: 'no-repeat',
                WebkitMaskImage: `url(${laptopMask})`,
                WebkitMaskSize: '90.51% 99.80%',
                WebkitMaskPosition: '-34.29% 107.43%',
                WebkitMaskRepeat: 'no-repeat',
              }}
            >
              <img src={laptop} alt="Product dashboard shown on a laptop" className="h-full w-full max-w-none" />
            </div>
          </div>

          <ContentCopy {...contentSections.track} className="max-w-[549px]" />
        </div>
      </Container>
    </section>
  )
}
