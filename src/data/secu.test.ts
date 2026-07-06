import { describe, expect, it } from 'vitest'
import { secuData } from './secu'

describe('secuData', () => {
  it('provides both es and en translations', () => {
    expect(Object.keys(secuData).sort()).toEqual(['en', 'es'])
  })

  it('keeps the SECU acronym, team name, tech stack and repo link identical across languages', () => {
    expect(secuData.en.name).toContain('SECU')
    expect(secuData.es.name).toContain('SECU')
    expect(secuData.en.summary).toContain('CapyTech')
    expect(secuData.es.summary).toContain('CapyTech')
    expect(secuData.en.tech).toEqual(secuData.es.tech)
    expect(secuData.en.links).toEqual(secuData.es.links)
  })

  it('translates the heading, summary and highlights for the en locale', () => {
    expect(secuData.es.heading).toBe('Proyecto Destacado')
    expect(secuData.en.heading).toBe('Featured Project')
    expect(secuData.en.summary).not.toBe(secuData.es.summary)
    expect(secuData.en.highlights).toHaveLength(secuData.es.highlights.length)
    expect(secuData.en.highlights[0]).not.toBe(secuData.es.highlights[0])
  })
})
