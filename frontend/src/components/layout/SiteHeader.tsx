import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

import divider from '@/assets/icons/rule-vertical.svg'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { BRAND, navLinks } from '@/data/landing'
import { cn } from '@/lib/cn'

/**
 * Figma ships two header treatments:
 *   overlay → Header 1:1577, transparent over the dark hero (landing)
 *   solid   → Header 5:1765, dark type on white with Sign In / Sign Up (contact)
 *
 * The file has no mobile artboard, so the sub-lg menu below is an addition —
 * without it the nav is unreachable on a phone.
 */

/** In-app paths route through the router; anchors and externals stay plain <a>. */
function NavItem({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return href.startsWith('/') ? (
    <Link to={href} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

export function SiteHeader({ variant = 'overlay' }: { variant?: 'overlay' | 'solid' }) {
  const overlay = variant === 'overlay'
  const [open, setOpen] = useState(false)

  return (
    <header className={cn(overlay ? 'absolute inset-x-0 top-6 z-20' : 'relative bg-white pt-16 sm:pt-[130px]')}>
      <Container>
        <div className={cn('flex items-center justify-between gap-4', overlay ? 'h-[76px]' : 'h-[50px]')}>
          <Link
            to="/"
            className={cn(
              'font-numeric text-[20px] font-bold leading-none tracking-[-0.1333px] sm:text-[24px]',
              overlay ? 'text-mist' : 'text-ink',
            )}
          >
            {BRAND}
          </Link>

          <nav className="hidden flex-1 justify-end lg:flex">
            <ul className={cn('flex items-center', overlay ? 'gap-14' : 'gap-12')}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <NavItem
                    href={link.href}
                    className={cn(
                      'text-small transition-colors',
                      overlay ? 'text-white/90 hover:text-white' : 'font-bold text-ink hover:text-brand',
                    )}
                  >
                    {link.label}
                  </NavItem>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop actions */}
          {overlay ? (
            <Button variant="solid" size="lg" className="ml-8 hidden lg:inline-flex">
              Start a free trial
            </Button>
          ) : (
            <div className="ml-12 hidden items-center gap-8 lg:flex">
              <a href="#" className="text-small font-bold text-ink transition-colors hover:text-brand">
                Sign In
              </a>
              <img src={divider} alt="" aria-hidden="true" className="h-[21px] w-px" />
              <Button variant="solid" className="h-[50px] w-[124px] px-0">
                Sign Up
              </Button>
            </div>
          )}

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="-mr-2 flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] rounded-control lg:hidden"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={cn(
                  'block h-[2px] w-[22px] rounded-full transition-all duration-200',
                  overlay ? 'bg-white' : 'bg-ink',
                  open && i === 0 && 'translate-y-[7px] rotate-45',
                  open && i === 1 && 'opacity-0',
                  open && i === 2 && '-translate-y-[7px] -rotate-45',
                )}
              />
            ))}
          </button>
        </div>

        {/* Mobile panel */}
        <div
          id="mobile-nav"
          hidden={!open}
          className="mt-3 rounded-card border border-hairline bg-white p-6 shadow-card lg:hidden"
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavItem
                  href={link.href}
                  className="block py-2 text-body font-bold text-ink transition-colors hover:text-brand"
                >
                  {link.label}
                </NavItem>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-3 border-t border-hairline pt-5">
            {!overlay && (
              <a href="#" className="text-body font-bold text-ink transition-colors hover:text-brand">
                Sign In
              </a>
            )}
            <Button variant="solid" className="w-full">
              {overlay ? 'Start a free trial' : 'Sign Up'}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
