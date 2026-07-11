import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { NavItem } from '../data/types'
import { LanguageToggle } from './LanguageToggle'

const PANEL_ID = 'mobile-menu-panel'

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  )
}

export { PANEL_ID as MOBILE_MENU_PANEL_ID }

export function MobileMenu({
  items,
  open,
  onClose,
}: {
  items: NavItem[]
  open: boolean
  onClose: () => void
}) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      const panel = panelRef.current
      if (!panel) return

      const focusable = getFocusableElements(panel)
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      if (event.shiftKey) {
        if (active === first || !panel.contains(active)) {
          event.preventDefault()
          last.focus()
        }
      } else if (active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    function handleRouteChange() {
      onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('hashchange', handleRouteChange)
    window.addEventListener('popstate', handleRouteChange)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('hashchange', handleRouteChange)
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) return

    const panel = panelRef.current
    const focusable = panel ? getFocusableElements(panel) : []
    focusable[0]?.focus()
  }, [open])

  if (!open) return null

  return createPortal(
    <div
      id={PANEL_ID}
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col bg-bg transition-opacity duration-200 lg:hidden"
    >
      <div className="flex justify-end px-6 pt-4">
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center rounded-full text-2xl text-text hover:text-accent-fg"
        >
          <span aria-hidden="true">✕</span>
        </button>
      </div>
      <ul className="flex flex-1 flex-col items-center justify-center gap-8 px-6">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onClose}
              className="text-2xl text-text hover:text-accent-fg"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex justify-center px-6 pb-10">
        <LanguageToggle />
      </div>
    </div>,
    document.body,
  )
}
