import type { FormEvent } from 'react'

import { Button } from '@/components/ui/Button'
import { TextField } from '@/components/ui/TextField'
import { contactFields, contactSubmit } from '@/data/contact'

/** Figma: Form (5:1758) — 350×616 card that floats over the top of the map. */
export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // No endpoint is specified in the design; wire this to your backend.
    event.preventDefault()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[350px] rounded-card border border-hairline bg-white px-[25px] pb-[29px] pt-[26px] shadow-form"
    >
      <div className="space-y-[26px]">
        {contactFields.map((field) => (
          <TextField
            key={field.name}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            type={field.type}
            multiline={field.multiline}
          />
        ))}
      </div>

      <Button as="button" type="submit" variant="solid" className="mt-[26px] h-[59px] w-full px-0">
        {contactSubmit}
      </Button>
    </form>
  )
}
