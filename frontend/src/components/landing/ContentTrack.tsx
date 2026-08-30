import laptop from '@/assets/images/content-01-laptop.png'
// ?no-inline keeps this under Vite's inline threshold from becoming a data:
// URI, which would break the url() below.
import laptopMask from '@/assets/images/content-01-laptop-mask.svg?no-inline'

import { Section } from '@/components/ui/Section'
import { SplitSection } from '@/components/sections/SplitSection'
import { ContentCopy } from './ContentCopy'
import { contentSections } from '@/data/landing'

/**
 * Figma: Content 01 (1:1082). The laptop render overhangs the grey card on both
 * sides and is clipped by a vector mask; percentages keep that composition
 * intact as the block scales.
 */
export function ContentTrack() {
  return (
    <Section className="pb-16 sm:pb-[124px]">
      <SplitSection
        columns="minmax(0,803px) minmax(0,549px)"
        gap="123px"
        media={
          <div className="relative w-full" style={{ aspectRatio: '962.858 / 721.01' }}>
            <div
              className="absolute rounded-control bg-shade shadow-card"
              style={{ left: '0.278%', top: '0.211%', width: '83.45%', height: '89.26%' }}
            />
            <div
              className="absolute inset-0"
              style={{
                maskImage: `url("${laptopMask}")`,
                maskSize: '90.51% 99.80%',
                maskPosition: '-34.29% 107.43%',
                maskRepeat: 'no-repeat',
                WebkitMaskImage: `url("${laptopMask}")`,
                WebkitMaskSize: '90.51% 99.80%',
                WebkitMaskPosition: '-34.29% 107.43%',
                WebkitMaskRepeat: 'no-repeat',
              }}
            >
              <img src={laptop} alt="Product dashboard shown on a laptop" className="h-full w-full max-w-none" />
            </div>
          </div>
        }
        copy={<ContentCopy {...contentSections.track} className="max-w-[549px]" />}
      />
    </Section>
  )
}
