import type { Language, NavItem } from '../data/types'
import { useLanguage } from '../context/LanguageContext'

const LANGUAGES: Language[] = ['es', 'en']

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
        <li>
          <LanguageToggle />
        </li>
      </ul>
    </nav>
  )
}
