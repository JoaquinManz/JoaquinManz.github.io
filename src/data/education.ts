import type { EducationData, Language } from './types'

export const educationData: Record<Language, EducationData> = {
  es: {
    heading: 'Educación',
    entries: [
      {
        title: 'Licenciatura en Tecnologías de la Información',
        institution: 'UTEC',
        period: '01/2026 - en curso',
      },
      {
        title: 'Desarrollador Web Fullstack',
        institution: 'IBEC',
        period: '03/2023 - 03/2024',
      },
      {
        title: 'Curso de Desarrollo con IA',
        institution: 'BIG School',
        period: '06/2026',
      },
      {
        title: 'First Certificate in English (FCE)',
        institution: 'Cambridge English',
        period: '10/2022',
      },
    ],
  },
  en: {
    heading: 'Education',
    entries: [
      {
        title: 'Bachelor\'s in Information Technology',
        institution: 'UTEC',
        period: '01/2026 - in progress',
      },
      {
        title: 'Fullstack Web Developer',
        institution: 'IBEC',
        period: '03/2023 - 03/2024',
      },
      {
        title: 'AI Development Course',
        institution: 'BIG School',
        period: '06/2026',
      },
      {
        title: 'First Certificate in English (FCE)',
        institution: 'Cambridge English',
        period: '10/2022',
      },
    ],
  },
}
