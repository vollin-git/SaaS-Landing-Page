import email from '@/assets/icons/email.svg'
import pin from '@/assets/icons/pin.svg'

export const contactHero = {
  title: 'Contact us',
  body: 'With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.',
}

export const contactFields = [
  { name: 'name', label: 'First & Last Name', placeholder: 'i.e. John Doe', type: 'text', multiline: false },
  { name: 'email', label: 'Email', placeholder: 'i.e. john@mail.com', type: 'email', multiline: false },
  { name: 'subject', label: 'Subject', placeholder: 'i.e. I need a help', type: 'text', multiline: false },
  { name: 'message', label: 'Message', placeholder: 'Type you message', type: 'text', multiline: true },
] as const

export const contactSubmit = 'Send'

/** Figma: Info (5:1744) — icon sizes are taken straight from the vector layers. */
export const contactDetails = [
  {
    icon: email,
    iconWidth: 23,
    iconHeight: 19.32,
    lines: ['support@brainwave.io', 'contact@brainwave.io'],
  },
  {
    icon: pin,
    iconWidth: 16,
    iconHeight: 22,
    lines: ['34 Madison Street,', 'NY, USA 10005'],
  },
]
