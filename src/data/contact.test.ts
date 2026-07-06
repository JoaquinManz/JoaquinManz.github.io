import { describe, expect, it } from 'vitest'
import { contactData } from './contact'

describe('contactData', () => {
  it('provides both es and en translations', () => {
    expect(Object.keys(contactData).sort()).toEqual(['en', 'es'])
  })

  it('keeps email, phone and social links identical across languages', () => {
    expect(contactData.en.email).toBe(contactData.es.email)
    expect(contactData.en.phone).toBe(contactData.es.phone)
    expect(contactData.en.socials).toEqual(contactData.es.socials)
  })

  it('translates the heading and message for the en locale', () => {
    expect(contactData.es.heading).toBe('Contacto')
    expect(contactData.en.heading).toBe('Contact')
    expect(contactData.en.message).not.toBe(contactData.es.message)
  })
})
