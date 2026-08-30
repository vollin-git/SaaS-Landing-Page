import topLeft from '@/assets/images/content-03-tl.png'
import topRight from '@/assets/images/content-03-tr.png'
import bottomLeft from '@/assets/images/content-03-bl.png'
import bottomRight from '@/assets/images/content-03-br.png'

import { Section } from '@/components/ui/Section'
import { SplitSection } from '@/components/sections/SplitSection'
import { ContentCopy } from './ContentCopy'
import { contentSections } from '@/data/landing'

/** Figma: Content 03 (1:1064) — staggered 2×2 photo grid, text on the right. */
const TILES = [
  { src: topLeft, style: { left: '0%', top: '0%', width: '47.22%', height: '40.31%' } },
  { src: topRight, style: { left: '52.78%', top: '4.89%', width: '47.22%', height: '49.90%' } },
  { src: bottomLeft, style: { left: '0%', top: '45.21%', width: '47.22%', height: '49.90%' } },
  { src: bottomRight, style: { left: '52.78%', top: '59.69%', width: '47.22%', height: '40.31%' } },
]

export function ContentServices() {
  return (
    <Section className="pb-20 sm:pb-[197px]">
      <SplitSection
        columns="minmax(0,601px) minmax(0,549px)"
        gap="204px"
        media={
          <div className="relative w-full" style={{ aspectRatio: '601.284 / 775.655' }}>
            {TILES.map((tile, index) => (
              <img
                key={index}
                src={tile.src}
                alt=""
                aria-hidden="true"
                className="absolute max-w-none rounded-control object-cover"
                style={tile.style}
              />
            ))}
          </div>
        }
        copy={<ContentCopy {...contentSections.services} className="max-w-[549px]" />}
      />
    </Section>
  )
}
