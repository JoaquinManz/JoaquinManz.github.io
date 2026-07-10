import { useEffect, useRef, useState } from 'react'
import type { NavItem } from '../data/types'
import { MobileMenu, MOBILE_MENU_PANEL_ID } from './MobileMenu'
import { LanguageToggle } from './LanguageToggle'

const LG_BREAKPOINT = 1024

export function Nav({ items }: { items: NavItem[] }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const wasOpenRef = useRef(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return

    function handleResize() {
      if (window.innerWidth >= LG_BREAKPOINT) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen && wasOpenRef.current) {
      menuButtonRef.current?.focus()
    }
    wasOpenRef.current = menuOpen
  }, [menuOpen])

  return (
    <nav className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 rounded-full border border-border bg-surface/90 px-6 py-3 backdrop-blur">
        <a href="#hero" aria-label="Joaquín Manzanares" className="flex items-center">
          <img src="/logos/logo-dark-bg-2x.png" alt="" className="h-6 w-auto" />
        </a>
        <ul className="hidden flex-wrap items-center justify-center gap-2 lg:flex">
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="text-text hover:text-accent-fg">
                {item.label}
              </a>
            </li>
          ))}
          <li className="ml-2 border-l border-border pl-2">
            <LanguageToggle />
          </li>
        </ul>
        {!menuOpen ? (
          <button
            ref={menuButtonRef}
            type="button"
            aria-label="Open menu"
            aria-expanded={false}
            aria-controls={MOBILE_MENU_PANEL_ID}
            onClick={() => setMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-2xl text-text transition-colors duration-150 hover:text-accent-fg lg:hidden"
          >
            <span aria-hidden="true">☰</span>
          </button>
        ) : null}
      </div>
      <MobileMenu items={items} open={menuOpen} onClose={closeMenu} />
    </nav>
  )
}
