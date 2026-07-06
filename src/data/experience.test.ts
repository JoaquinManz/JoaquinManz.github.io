import { describe, expect, it } from 'vitest'
import { experienceData } from './experience'

describe('experienceData', () => {
  it('provides both es and en translations with the same number of entries', () => {
    expect(Object.keys(experienceData).sort()).toEqual(['en', 'es'])
    expect(experienceData.en.entries).toHaveLength(experienceData.es.entries.length)
  })

  it('translates the heading for the en locale', () => {
    expect(experienceData.es.heading).toBe('Experiencia')
    expect(experienceData.en.heading).toBe('Experience')
  })

  it('keeps company and location identical across languages', () => {
    experienceData.es.entries.forEach((entry, index) => {
      const enEntry = experienceData.en.entries[index]
      expect(enEntry.company).toBe(entry.company)
      expect(enEntry.location).toBe(entry.location)
    })
  })

  it('keeps a pure date-range period identical across languages', () => {
    const esEntry = experienceData.es.entries.find((entry) => entry.company === 'Alorica')
    const enEntry = experienceData.en.entries.find((entry) => entry.company === 'Alorica')

    expect(enEntry?.period).toBe(esEntry?.period)
  })

  it('translates the word "Presente" in an ongoing period to "Present"', () => {
    const esEntry = experienceData.es.entries.find((entry) => entry.company === 'Visuar Uruguay')
    const enEntry = experienceData.en.entries.find((entry) => entry.company === 'Visuar Uruguay')

    expect(esEntry?.period).toBe('01/2026 - Presente')
    expect(enEntry?.period).toBe('01/2026 - Present')
  })

  it('keeps an already-English role title verbatim across languages', () => {
    const esEntry = experienceData.es.entries.find((entry) => entry.company === 'Alorica')
    const enEntry = experienceData.en.entries.find((entry) => entry.company === 'Alorica')

    expect(esEntry?.role).toBe('Customer Service Representative')
    expect(enEntry?.role).toBe('Customer Service Representative')
  })

  it('translates a Spanish role title and its highlights for the en locale', () => {
    const esEntry = experienceData.es.entries.find((entry) => entry.company === 'Visuar Uruguay')
    const enEntry = experienceData.en.entries.find((entry) => entry.company === 'Visuar Uruguay')

    expect(esEntry?.role).toBe('Auxiliar Administrativo de Logística')
    expect(enEntry?.role).not.toBe(esEntry?.role)
    expect(enEntry?.highlights).toHaveLength(esEntry?.highlights.length ?? 0)
    expect(enEntry?.highlights[0]).not.toBe(esEntry?.highlights[0])
  })
})
