import type { ContactData, Language } from './types'

export const contactData: Record<Language, ContactData> = {
  es: {
    heading: 'Contacto',
    message: '¿Tenés una oportunidad o proyecto en mente? Escribime, me encantaría conversar.',
    email: 'manzanares20.business@gmail.com',
    phone: '+598 91 819 872',
    location: 'Montevideo, Uruguay',
    socials: [
      { label: 'GitHub', href: 'https://github.com/JoaquinManz' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joaquinmanz/' },
    ],
  },
  en: {
    heading: 'Contact',
    message: 'Have an opportunity or project in mind? Reach out, I would love to talk.',
    email: 'manzanares20.business@gmail.com',
    phone: '+598 91 819 872',
    location: 'Montevideo, Uruguay',
    socials: [
      { label: 'GitHub', href: 'https://github.com/JoaquinManz' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joaquinmanz/' },
    ],
  },
}
