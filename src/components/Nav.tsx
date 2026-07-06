import type { NavItem } from '../data/types'

export function Nav({ items }: { items: NavItem[] }) {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-bg/90 backdrop-blur border-b border-black/10">
      <ul className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-6 px-6 py-4">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-text hover:text-accent">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
