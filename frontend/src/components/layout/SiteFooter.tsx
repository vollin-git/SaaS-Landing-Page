import heart from '@/assets/icons/heart.svg'
import rule from '@/assets/icons/rule-footer.svg'

import { Container } from '@/components/ui/Container'
import { copyright, footerColumns, socialLinks } from '@/data/landing'

/** Figma: Sections/Footer/Dark/Style 02 (1:1003). */
export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <Container>
        <div className="flex flex-wrap justify-between gap-x-10 gap-y-12 pb-16 pt-[184px]">
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <p className="text-small text-white opacity-65">{column.heading}</p>
              <ul className="mt-3">
                {column.links.map((link) => (
                  <li key={link} className="text-body leading-10">
                    <a href="#" className="transition-opacity hover:opacity-70">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <img src={rule} alt="" aria-hidden="true" className="h-px w-full" />

        <div className="flex flex-wrap items-center justify-between gap-6 py-8">
          <p className="flex items-center gap-2 text-small text-white opacity-65">
            {copyright}
            <img src={heart} alt="love" className="h-[15px] w-[17px] max-w-none" />
          </p>

          <ul className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a href={social.href} aria-label={social.name} className="block transition-opacity hover:opacity-70">
                  <img src={social.icon} alt="" className="h-5 w-5 max-w-none object-contain" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
