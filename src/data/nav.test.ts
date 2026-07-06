import { describe, expect, it } from 'vitest'
import { navItems } from './nav'

describe('navItems', () => {
  it('provides both es and en translations with the same nav ids', () => {
    expect(Object.keys(navItems).sort()).toEqual(['en', 'es'])

    const esIds = navItems.es.map((item) => item.id)
    const enIds = navItems.en.map((item) => item.id)
    expect(enIds).toEqual(esIds)
  })

  it('translates labels to English for the en locale', () => {
    expect(navItems.es.find((item) => item.id === 'hero')?.label).toBe('Inicio')
    expect(navItems.en.find((item) => item.id === 'hero')?.label).toBe('Home')
    expect(navItems.en.find((item) => item.id === 'about')?.label).toBe('About')
  })
})
