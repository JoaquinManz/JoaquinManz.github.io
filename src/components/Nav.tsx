import type { NavItem } from '../data/types'
import { LanguageToggle } from './LanguageToggle'

export function Nav({ items }: { items: NavItem[] }) {
  return (
    <nav className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 rounded-full border border-border bg-surface/90 px-6 py-3 backdrop-blur lg:grid lg:grid-cols-[auto_1fr_auto] lg:justify-normal">
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
        </ul>
        <div className="flex items-center ml-2 border-l border-border pl-2">
          <LanguageToggle />
        </div>
      </div>
    </nav>
  )
}
