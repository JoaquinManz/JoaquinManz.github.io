import { describe, expect, it } from 'vitest'
import { aboutData } from './about'

describe('aboutData', () => {
  it('provides both es and en translations with the same number of paragraphs', () => {
    expect(Object.keys(aboutData).sort()).toEqual(['en', 'es'])
    expect(aboutData.en.paragraphs).toHaveLength(aboutData.es.paragraphs.length)
  })

  it('translates the heading for the en locale', () => {
    expect(aboutData.es.heading).toBe('Sobre mí')
    expect(aboutData.en.heading).toBe('About me')
  })
})
