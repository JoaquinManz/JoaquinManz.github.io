import type { HeroData, Language } from './types'

export const heroData: Record<Language, HeroData> = {
  es: {
    name: 'Joaquin Manzanares',
    title: 'Frontend / Full Stack Developer',
    tagline:
      'Estudiante de Tecnologías de la Información (UTEC) enfocado en desarrollo frontend / full stack',
    ctaLabel: 'Descargar CV',
    ctaHref: '/Joaquin_Manzanares_Resume.pdf',
    photoAlt: 'Foto de perfil de Joaquin Manzanares',
    githubHref: 'https://github.com/JoaquinManz',
    linkedinHref: 'https://www.linkedin.com/in/joaquinmanz/',
  },
  en: {
    name: 'Joaquin Manzanares',
    title: 'Frontend / Full Stack Developer',
    tagline:
      'Information Technology student (UTEC) focused on frontend / full stack development',
    ctaLabel: 'Download CV',
    ctaHref: '/Joaquin_Manzanares_Resume.pdf',
    photoAlt: 'Profile photo of Joaquin Manzanares',
    githubHref: 'https://github.com/JoaquinManz',
    linkedinHref: 'https://www.linkedin.com/in/joaquinmanz/',
  },
}
