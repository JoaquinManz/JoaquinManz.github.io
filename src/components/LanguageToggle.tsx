import type { Language } from '../data/types'
import { useLanguage } from '../context/LanguageContext'

const LANGUAGES: Language[] = ['es', 'en']

export function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex gap-1 rounded-full border border-border p-1" role="group" aria-label="Language">
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
