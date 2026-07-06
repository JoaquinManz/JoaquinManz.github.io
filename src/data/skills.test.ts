import { describe, expect, it } from 'vitest'
import { skillsData } from './skills'

describe('skillsData', () => {
  it('provides both es and en translations with the same category structure', () => {
    expect(Object.keys(skillsData).sort()).toEqual(['en', 'es'])
    expect(skillsData.en.categories).toHaveLength(skillsData.es.categories.length)
  })

  it('translates category labels but keeps technology skill names untranslated', () => {
    expect(skillsData.es.heading).toBe('Habilidades')
    expect(skillsData.en.heading).toBe('Skills')

    expect(skillsData.es.categories[0].category).toBe('Lenguajes')
    expect(skillsData.en.categories[0].category).toBe('Languages')
    expect(skillsData.en.categories[0].skills.map((s) => s.name)).toEqual(
      skillsData.es.categories[0].skills.map((s) => s.name),
    )
  })

  it('translates descriptive (non-proper-noun) skill entries for the en locale', () => {
    const esOther = skillsData.es.categories.find((c) => c.category === 'Otras')
    const enOther = skillsData.en.categories.find((c) => c.category === 'Other')

    expect(esOther?.skills.map((s) => s.name)).toContain('Testing funcional')
    expect(enOther?.skills.map((s) => s.name)).toContain('Functional testing')
  })
})
