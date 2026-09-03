import { CardRail } from '@/components/ui/CardRail'
import { testimonials } from '@/data/landing'

/** Figma: Testimonial (1:1055) — two quotes sitting inside the pricing section. */
export function Testimonials() {
  return (
    <CardRail
      className="md:mx-0 md:grid md:gap-x-[92px] md:gap-y-16 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-2"
      itemClassName="md:w-full"
    >
      {testimonials.map((testimonial) => (
        <figure key={testimonial.name} className="max-w-[672px]">
          <span aria-hidden="true" className="block text-[56px] leading-[56px] font-semibold text-brand sm:text-quote">
            “
          </span>
          <blockquote className="mt-2 text-lead font-bold text-ink sm:text-h3">{testimonial.quote}</blockquote>
          <figcaption className="mt-6 text-body text-ink sm:mt-9">
            <span className="font-bold">{testimonial.name}</span>{' '}
            <span className="opacity-70">{testimonial.role}</span>
          </figcaption>
        </figure>
      ))}
    </CardRail>
  )
}
