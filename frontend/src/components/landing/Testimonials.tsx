import { testimonials } from '@/data/landing'

/** Figma: Testimonial (1:1055) — two quotes sitting inside the pricing section. */
export function Testimonials() {
  return (
    <div className="grid gap-x-[92px] gap-y-16 xl:grid-cols-2">
      {testimonials.map((testimonial) => (
        <figure key={testimonial.name} className="max-w-[672px]">
          <span aria-hidden="true" className="block text-quote font-semibold text-brand">
            “
          </span>
          <blockquote className="mt-2 text-h3 font-bold text-ink">{testimonial.quote}</blockquote>
          <figcaption className="mt-9 text-body text-ink">
            <span className="font-bold">{testimonial.name}</span>{' '}
            <span className="opacity-70">{testimonial.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
