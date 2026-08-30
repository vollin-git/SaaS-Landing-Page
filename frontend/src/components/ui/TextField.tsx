import { cn } from '@/lib/cn'

/** Figma: Input/Regular 02 — 15px bold label, 50px box, 8px radius, hairline border. */
export function TextField({
  name,
  label,
  placeholder,
  type = 'text',
  multiline = false,
}: {
  name: string
  label: string
  placeholder: string
  type?: string
  multiline?: boolean
}) {
  const box = cn(
    'w-full rounded-control border border-hairline bg-white px-[18px] py-3',
    'text-small text-ink placeholder:text-ink placeholder:opacity-70',
    'outline-none transition-colors focus:border-brand',
  )

  return (
    <div>
      <label htmlFor={name} className="block text-small font-bold text-ink">
        {label}
      </label>
      <div className="mt-[7px]">
        {multiline ? (
          <textarea id={name} name={name} placeholder={placeholder} rows={4} className={cn(box, 'h-[132px] resize-none')} />
        ) : (
          <input id={name} name={name} type={type} placeholder={placeholder} className={cn(box, 'h-[50px]')} />
        )}
      </div>
    </div>
  )
}
