import { Container } from '@/components/ui/Container'
import { features } from '@/data/landing'

/** Figma: Features (1:1091). */
export function Features() {
  return (
    <section className="bg-white py-[136px]">
      <Container>
        <div className="grid gap-x-[43px] gap-y-14 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-8">
              <img
                src={feature.icon}
                alt=""
                aria-hidden="true"
                className="mt-[14px] max-w-none shrink-0"
                style={{ width: feature.iconWidth, height: feature.iconHeight }}
              />
              <div>
                <h3 className="text-h4 font-bold text-ink">{feature.title}</h3>
                <p className="mt-[3px] text-body text-ink opacity-70">{feature.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
