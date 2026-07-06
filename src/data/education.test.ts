import { describe, expect, it } from 'vitest'
import { educationData } from './education'

describe('educationData', () => {
  it('provides both es and en translations with the same number of entries', () => {
    expect(Object.keys(educationData).sort()).toEqual(['en', 'es'])
    expect(educationData.en.entries).toHaveLength(educationData.es.entries.length)
  })

  it('translates the heading for the en locale', () => {
    expect(educationData.es.heading).toBe('Educación')
    expect(educationData.en.heading).toBe('Education')
  })

  it('keeps institution names identical across languages', () => {
    educationData.es.entries.forEach((entry, index) => {
      const enEntry = educationData.en.entries[index]
      expect(enEntry.institution).toBe(entry.institution)
    })
  })

  it('keeps periods identical across languages except for the translated "in progress" wording', () => {
    const esEntry = educationData.es.entries.find((entry) => entry.institution === 'IBEC')
    const enEntry = educationData.en.entries.find((entry) => entry.institution === 'IBEC')

    expect(enEntry?.period).toBe(esEntry?.period)
  })

  it('keeps an already-English certificate title verbatim across languages', () => {
    const esEntry = educationData.es.entries.find((entry) => entry.institution === 'Cambridge English')
    const enEntry = educationData.en.entries.find((entry) => entry.institution === 'Cambridge English')

    expect(esEntry?.title).toBe('First Certificate in English (FCE)')
    expect(enEntry?.title).toBe('First Certificate in English (FCE)')
  })

  it('translates a Spanish degree title for the en locale', () => {
    const esEntry = educationData.es.entries.find((entry) => entry.institution === 'UTEC')
    const enEntry = educationData.en.entries.find((entry) => entry.institution === 'UTEC')

    expect(esEntry?.title).toBe('Licenciatura en Tecnologías de la Información')
    expect(enEntry?.title).not.toBe(esEntry?.title)
    expect(esEntry?.period).toBe('01/2026 - en curso')
    expect(enEntry?.period).toBe('01/2026 - in progress')
  })
})
