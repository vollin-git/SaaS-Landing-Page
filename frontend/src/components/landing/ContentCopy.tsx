import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

/** The shared text column used by Content 01 / 02 / 03. */
export function ContentCopy({
  title,
  body,
  cta,
  className,
}: {
  title: string
  body: string
  cta: string
  className?: string
}) {
  return (
    <div className={cn('max-w-[581px]', className)}>
      <h2 className="text-[30px] font-bold leading-tight tracking-[-1.2px] text-ink xl:text-h2">{title}</h2>
      <p className="mt-6 text-lead text-ink opacity-70">{body}</p>
      <Button variant="link" className="mt-8">
        {cta}
      </Button>
    </div>
  )
}
