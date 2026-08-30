import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
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
    <Heading title={title} body={body} className={cn('max-w-[581px]', className)}>
      <Button variant="link" className="mt-8">
        {cta}
      </Button>
    </Heading>
  )
}
