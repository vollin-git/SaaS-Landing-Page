import { useState, type ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // On an auth page the header offers the *other* action — otherwise the CTA
  // navigates to the page you are already on and appears to do nothing.
  const onAuthPage = pathname === '/signin' || pathname === '/signup'
  const authCta = pathname === '/signup' ? { label: 'Sign In', to: '/signin' } : { label: 'Sign Up', to: '/signup' }

  return (
    <header
      className={cn(
        overlay ? 'absolute inset-x-0 top-6 z-20' : 'relative bg-white pt-6',
        // The auth pages sit on the cloud ground, so the white header needs
        // padding below the row to read as a full band rather than stopping
        // flush against the nav. Contact is white throughout and must keep its
        // Figma rhythm, so it is left alone.
        !overlay && onAuthPage && 'pb-6',
      )}
    >
      <Container>
        <div className={cn('flex items-center justify-between gap-4', overlay ? 'h-[64px]' : 'h-[50px]')}>
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
            <Button variant="solid" className="ml-8 hidden h-[56px] px-7 lg:inline-flex">
              Start a free trial
            </Button>
          ) : (
            <div
              className={cn(
                'hidden items-center gap-8 lg:flex',
                // With the Sign In link and divider gone on auth pages the CTA
                // would sit one nav-gap from "Contact" and read as another nav
                // item, so it gets extra separation when it stands alone.
                onAuthPage ? 'ml-20' : 'ml-12',
              )}
            >
              {!onAuthPage && (
                <>
                  <Link to="/signin" className="text-small font-bold text-ink transition-colors hover:text-brand">
                    Sign In
                  </Link>
                  <img src={divider} alt="" aria-hidden="true" className="h-[21px] w-px" />
                </>
              )}
              {/* Button renders an <a>; navigate() keeps it client-side without
                  nesting an anchor inside a router Link. */}
              <Button
                as="button"
                onClick={() => navigate(authCta.to)}
                variant="solid"
                className="h-[50px] w-[124px] px-0"
              >
                {authCta.label}
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
            {!overlay && !onAuthPage && (
              <Link to="/signin" className="text-body font-bold text-ink transition-colors hover:text-brand">
                Sign In
              </Link>
            )}
            <Button
              as={overlay ? 'a' : 'button'}
              onClick={overlay ? undefined : () => navigate(authCta.to)}
              variant="solid"
              className="w-full"
            >
              {overlay ? 'Start a free trial' : authCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
