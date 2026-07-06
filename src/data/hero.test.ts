import { describe, expect, it } from 'vitest'
import { heroData } from './hero'

describe('heroData', () => {
  it('provides both es and en translations', () => {
    expect(Object.keys(heroData).sort()).toEqual(['en', 'es'])
  })

  it('keeps the name, CV href and social links identical across languages', () => {
    expect(heroData.en.name).toBe(heroData.es.name)
    expect(heroData.en.ctaHref).toBe(heroData.es.ctaHref)
    expect(heroData.en.githubHref).toBe(heroData.es.githubHref)
    expect(heroData.en.linkedinHref).toBe(heroData.es.linkedinHref)
  })

  it('translates the CTA label and tagline for the en locale', () => {
    expect(heroData.es.ctaLabel).toBe('Descargar CV')
    expect(heroData.en.ctaLabel).toBe('Download CV')
    expect(heroData.en.tagline).not.toBe(heroData.es.tagline)
  })
})
