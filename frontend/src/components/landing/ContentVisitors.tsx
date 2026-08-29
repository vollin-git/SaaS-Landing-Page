import back from '@/assets/images/content-02-back.png'
import front from '@/assets/images/content-02-front.png'

import { Container } from '@/components/ui/Container'
import { ContentCopy } from './ContentCopy'
import { contentSections } from '@/data/landing'

/** Figma: Content 02 (1:1074) — two overlapping app screens, text on the left. */
export function ContentVisitors() {
  return (
    <section className="bg-white pb-[104px]">
      <Container>
        <div className="grid items-center gap-16 xl:grid-cols-[minmax(0,581px)_minmax(0,682px)] xl:justify-between xl:gap-[204px]">
          <ContentCopy {...contentSections.visitors} className="xl:order-1" />

          <div className="relative w-full xl:order-2" style={{ aspectRatio: '681.634 / 710.385' }}>
            <img
              src={back}
              alt=""
              aria-hidden="true"
              className="absolute max-w-none opacity-[0.48]"
              style={{ left: '48.13%', top: '10.04%', width: '51.87%', height: '81.62%' }}
            />
            <img
              src={front}
              alt="Visitor analytics screen"
              className="absolute max-w-none shadow-soft"
              style={{ left: 0, top: 0, width: '64.24%', height: '100%' }}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
