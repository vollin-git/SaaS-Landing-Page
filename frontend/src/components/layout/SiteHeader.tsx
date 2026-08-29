import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { BRAND, navLinks } from '@/data/landing'

/** Figma: Header (1:1577) — sits over the dark hero, so it renders transparent. */
export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-6 z-20">
      <Container>
        <div className="flex h-[76px] items-center justify-between gap-8">
          <a href="#" className="font-numeric text-[24px] font-bold leading-none tracking-[-0.1333px] text-mist">
            {BRAND}
          </a>

          <nav className="hidden flex-1 justify-end lg:flex">
            <ul className="flex items-center gap-14">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-small text-white/90 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Button variant="solid" size="lg" className="ml-8 hidden sm:inline-flex">
            Start a free trial
          </Button>
        </div>
      </Container>
    </header>
  )
}
