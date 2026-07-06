import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { Language } from '../data/types'

const STORAGE_KEY = 'lang'

interface LanguageContextValue {
  lang: Language
  setLang: (lang: Language) => void
}

function detectLanguage(): Language {
  return window.navigator.language.startsWith('en') ? 'en' : 'es'
}

function readStoredLanguage(): Language | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'en' || stored === 'es' ? stored : null
  } catch {
    return null
  }
}

function resolveInitialLanguage(): Language {
  return readStoredLanguage() ?? detectLanguage()
}

function persistLanguage(lang: Language) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    // localStorage unavailable — fall back silently to in-memory state only.
  }
}

function syncLanguage(lang: Language) {
  document.documentElement.lang = lang
  persistLanguage(lang)
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(resolveInitialLanguage)

  useEffect(() => {
    syncLanguage(lang)
  }, [lang])

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
