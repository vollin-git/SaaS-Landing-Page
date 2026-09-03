import heroVideo from '@/assets/images/hero-video.png'
import heroVideoOverlay from '@/assets/images/hero-video-overlay-mask.png'
import playButton from '@/assets/icons/play-button.svg'
import dotsTopLeft from '@/assets/images/hero-dots-tl.svg'
import dotsTopRight from '@/assets/images/hero-dots-tr.svg'
import dotsBottomLeft from '@/assets/images/hero-dots-bl.svg'
import dotsBottomRight from '@/assets/images/hero-dots-br.svg'

import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/Button'
import { hero } from '@/data/landing'

const DOTS = [dotsTopLeft, dotsTopRight, dotsBottomLeft, dotsBottomRight]

/** Figma: Hero (1:1140). */
export function Hero() {
  return (
    <Section tone="ink" className="relative overflow-hidden" containerClassName="relative">
      {/*
        Figma draws both columns at 724px inside a 1488px container. Equal
        fractions reproduce that at the design width and scale down cleanly
        below it — a fixed 724px media column would overflow its track and get
        clipped by the section's overflow-hidden on any viewport under ~1530px.
      */}
      <div className="grid items-center gap-16 pb-20 pt-[120px] sm:pt-[180px] xl:grid-cols-2 xl:gap-[39px] xl:pb-[130px] xl:pt-[190px]">
        <Heading
          as="h1"
          size="display"
          tone="white"
          title={hero.title}
          body={hero.body}
          className="max-w-[724px]"
          bodyClassName="max-w-[670px]"
        >
          <Button variant="link" tone="mint" className="mt-10">
            {hero.cta}
          </Button>
        </Heading>

        <div className="relative">
          {/* Decorative dot grid — sits behind the video card, top-right. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-11 hidden grid-cols-2 gap-[9.7px] xl:grid"
          >
            {DOTS.map((dot, index) => (
              <img key={index} src={dot} alt="" className="h-[137.569px] w-[133.584px] max-w-none" />
            ))}
          </div>

          <div className="relative ml-auto aspect-[724/581] w-full max-w-[724.487px] overflow-hidden rounded-control shadow-soft">
            <img src={heroVideo} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-ink opacity-[0.19]"
              style={{
                maskImage: `url("${heroVideoOverlay}")`,
                maskSize: '100% 100%',
                maskRepeat: 'no-repeat',
                WebkitMaskImage: `url("${heroVideoOverlay}")`,
                WebkitMaskSize: '100% 100%',
                WebkitMaskRepeat: 'no-repeat',
              }}
            />
            {/* 17% of the card width is the Figma ratio (123.203 / 724.487). */}
            <button
              type="button"
              aria-label="Play product video"
              className="absolute left-1/2 top-1/2 w-[17%] min-w-[56px] max-w-[123.203px] -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-105"
            >
              <img src={playButton} alt="" className="h-auto w-full max-w-none" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}
