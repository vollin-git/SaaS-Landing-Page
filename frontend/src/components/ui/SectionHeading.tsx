import { cn } from '@/lib/cn'

/** Figma: the centred "Title" block used above Pricing. */
export function SectionHeading({ title, body, className }: { title: string; body?: string; className?: string }) {
  return (
    <div className={cn('mx-auto max-w-[1030px] text-center', className)}>
      <h2 className="text-h2 font-bold text-ink">{title}</h2>
      {body && <p className="mx-auto mt-4 max-w-[810px] text-lead text-ink opacity-70">{body}</p>}
    </div>
  )
}
