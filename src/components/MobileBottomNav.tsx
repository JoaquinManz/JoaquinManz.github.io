import type { NavItem } from '../data/types'
import { useActiveSection } from '../hooks/useActiveSection'
import { NavIcon } from './NavIcon'

export function MobileBottomNav({ items }: { items: NavItem[] }) {
  const ids = items.map((item) => item.id)
  const activeId = useActiveSection(ids)

  return (
    <nav
      aria-label="Section navigation"
      className="fixed inset-x-0 bottom-0 z-50 lg:hidden border-t border-border bg-surface/90 backdrop-blur pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="flex">
        {items.map((item) => (
          <li key={item.id} className="flex-1">
            <a
              href={`#${item.id}`}
              aria-current={item.id === activeId ? 'location' : undefined}
              className="flex flex-col items-center gap-1 py-2 text-text aria-[current=location]:text-accent-fg"
            >
              <NavIcon id={item.id} />
              <span className="sr-only">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
