import heroVideo from '@/assets/images/hero-video.png'
import heroVideoOverlay from '@/assets/images/hero-video-overlay-mask.png'
import playButton from '@/assets/icons/play-button.svg'
import dotsTopLeft from '@/assets/images/hero-dots-tl.svg'
import dotsTopRight from '@/assets/images/hero-dots-tr.svg'
import dotsBottomLeft from '@/assets/images/hero-dots-bl.svg'
import dotsBottomRight from '@/assets/images/hero-dots-br.svg'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { hero } from '@/data/landing'

const DOTS = [dotsTopLeft, dotsTopRight, dotsBottomLeft, dotsBottomRight]

/** Figma: Hero (1:1140). */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <Container className="relative">
        <div className="grid items-start gap-16 pb-24 pt-[180px] xl:grid-cols-[724px_minmax(0,1fr)] xl:gap-[39px] xl:pb-[277px] xl:pt-[311px]">
          <div className="max-w-[724px] xl:mt-[50px]">
            <h1 className="text-[40px] font-bold leading-tight tracking-[-1.2px] text-white sm:text-[48px] xl:text-display">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-[670px] text-lead text-white opacity-65">{hero.body}</p>
            <Button variant="link" tone="mint" className="mt-10">
              {hero.cta}
            </Button>
          </div>

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

            <div className="relative aspect-[724/581] w-full overflow-hidden rounded-control shadow-soft xl:h-[581.362px] xl:w-[724.487px]">
              <img src={heroVideo} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-ink opacity-[0.19]"
                style={{
                  maskImage: `url(${heroVideoOverlay})`,
                  maskSize: '100% 100%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskImage: `url(${heroVideoOverlay})`,
                  WebkitMaskSize: '100% 100%',
                  WebkitMaskRepeat: 'no-repeat',
                }}
              />
              <button
                type="button"
                aria-label="Play product video"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-105"
              >
                <img src={playButton} alt="" className="h-[139.648px] w-[123.203px] max-w-none" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
