import { useEffect, useRef, useState } from 'react'
import type { Language, NavItem } from '../data/types'
import { useLanguage } from '../context/LanguageContext'
import { MobileMenu, MOBILE_MENU_PANEL_ID } from './MobileMenu'

const LANGUAGES: Language[] = ['es', 'en']
const LG_BREAKPOINT = 1024

function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex gap-1 rounded-full border border-black/10 p-1" role="group" aria-label="Language">
      {LANGUAGES.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={lang === option}
          onClick={() => setLang(option)}
          className="rounded-full px-3 py-1 text-sm font-medium text-text aria-pressed:bg-accent aria-pressed:text-bg"
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

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
    <nav className="fixed inset-x-0 top-0 z-50 bg-bg/90 backdrop-blur border-b border-black/10">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 lg:justify-center lg:gap-6">
        <ul className="hidden flex-wrap items-center justify-center gap-6 lg:flex">
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="text-text hover:text-accent">
                {item.label}
              </a>
            </li>
          ))}
          <li>
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
            className="flex h-11 w-11 items-center justify-center rounded-full text-2xl text-text transition-colors duration-150 hover:text-accent lg:hidden"
          >
            <span aria-hidden="true">☰</span>
          </button>
        ) : null}
      </div>
      <MobileMenu items={items} open={menuOpen} onClose={closeMenu} />
    </nav>
  )
}
