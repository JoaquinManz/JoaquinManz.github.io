import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageProvider, useLanguage } from './LanguageContext'

function mockNavigatorLanguage(locale: string) {
  Object.defineProperty(window.navigator, 'language', {
    value: locale,
    configurable: true,
  })
}

function Consumer() {
  const { lang, setLang } = useLanguage()
  return (
    <div>
      <span data-testid="lang-value">{lang}</span>
      <button onClick={() => setLang('en')}>set-en</button>
      <button onClick={() => setLang('es')}>set-es</button>
    </div>
  )
}

describe('LanguageContext', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('detects English when navigator.language starts with "en" and no stored preference exists', () => {
    mockNavigatorLanguage('en-US')

    render(
      <LanguageProvider>
        <Consumer />
      </LanguageProvider>,
    )

    expect(screen.getByTestId('lang-value')).toHaveTextContent('en')
  })

  it('defaults to Spanish for unrecognized locales when no stored preference exists (triangulation)', () => {
    mockNavigatorLanguage('fr-FR')

    render(
      <LanguageProvider>
        <Consumer />
      </LanguageProvider>,
    )

    expect(screen.getByTestId('lang-value')).toHaveTextContent('es')
  })

  it('uses the stored localStorage preference over navigator detection', () => {
    mockNavigatorLanguage('en-US')
    window.localStorage.setItem('lang', 'es')

    render(
      <LanguageProvider>
        <Consumer />
      </LanguageProvider>,
    )

    expect(screen.getByTestId('lang-value')).toHaveTextContent('es')
  })

  it('degrades gracefully to navigator detection when the stored preference is not a valid language value', () => {
    mockNavigatorLanguage('en-US')
    window.localStorage.setItem('lang', 'fr')

    render(
      <LanguageProvider>
        <Consumer />
      </LanguageProvider>,
    )

    expect(screen.getByTestId('lang-value')).toHaveTextContent('en')
  })

  it('falls back to in-memory state without throwing when localStorage is unavailable, and still allows toggling', async () => {
    mockNavigatorLanguage('en-US')
    const getItemSpy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('localStorage unavailable')
    })
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('localStorage unavailable')
    })
    const user = userEvent.setup()

    expect(() =>
      render(
        <LanguageProvider>
          <Consumer />
        </LanguageProvider>,
      ),
    ).not.toThrow()

    expect(screen.getByTestId('lang-value')).toHaveTextContent('en')

    await user.click(screen.getByText('set-es'))

    expect(screen.getByTestId('lang-value')).toHaveTextContent('es')

    getItemSpy.mockRestore()
    setItemSpy.mockRestore()
  })

  it('keeps document.documentElement.lang synchronized with the active language', async () => {
    mockNavigatorLanguage('en-US')
    const user = userEvent.setup()

    render(
      <LanguageProvider>
        <Consumer />
      </LanguageProvider>,
    )

    expect(document.documentElement.lang).toBe('en')

    await user.click(screen.getByText('set-es'))

    expect(document.documentElement.lang).toBe('es')
  })
})
