import type { Language, SkillsData } from './types'

export const skillsData: Record<Language, SkillsData> = {
  es: {
    heading: 'Habilidades',
    categories: [
      {
        category: 'Lenguajes',
        skills: [{ name: 'JavaScript' }, { name: 'HTML5' }, { name: 'CSS3' }],
      },
      {
        category: 'Frameworks y librerías',
        skills: [{ name: 'React' }, { name: 'Node.js' }, { name: 'Express.js' }],
      },
      {
        category: 'Bases de datos',
        skills: [{ name: 'MongoDB' }, { name: 'SQL' }],
      },
      {
        category: 'Herramientas y plataformas',
        skills: [
          { name: 'Git' },
          { name: 'GitLab' },
          { name: 'Notion' },
          { name: 'Trello' },
          { name: 'Softland' },
        ],
      },
      {
        category: 'Otras',
        skills: [
          { name: 'Testing funcional' },
          { name: 'Metodologías ágiles' },
          { name: 'Inglés avanzado (Cambridge FCE)' },
        ],
      },
    ],
  },
  en: {
    heading: 'Skills',
    categories: [
      {
        category: 'Languages',
        skills: [{ name: 'JavaScript' }, { name: 'HTML5' }, { name: 'CSS3' }],
      },
      {
        category: 'Frameworks and libraries',
        skills: [{ name: 'React' }, { name: 'Node.js' }, { name: 'Express.js' }],
      },
      {
        category: 'Databases',
        skills: [{ name: 'MongoDB' }, { name: 'SQL' }],
      },
      {
        category: 'Tools and platforms',
        skills: [
          { name: 'Git' },
          { name: 'GitLab' },
          { name: 'Notion' },
          { name: 'Trello' },
          { name: 'Softland' },
        ],
      },
      {
        category: 'Other',
        skills: [
          { name: 'Functional testing' },
          { name: 'Agile methodologies' },
          { name: 'Advanced English (Cambridge FCE)' },
        ],
      },
    ],
  },
}
