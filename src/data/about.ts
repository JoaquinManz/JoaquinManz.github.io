import type { AboutData, Language } from './types'

export const aboutData: Record<Language, AboutData> = {
  es: {
    heading: 'Sobre mí',
    paragraphs: [
      'Combino formación en desarrollo web full stack (stack MERN: MongoDB, Express, React, Node.js) con experiencia laboral real en administración y logística, lo que me aporta organización, atención al detalle y capacidad de resolución de problemas. Soy autodidacta (Codecademy, Codewars, W3Schools, Exercism) y estudiante de la Licenciatura en Tecnologías de la Información en UTEC.',
      'Recientemente completé un curso de Desarrollo con IA (BIG School, 2026), sumando esa capa a mi perfil técnico. Busco incorporarme a un equipo de desarrollo frontend / full stack donde seguir creciendo.',
    ],
    portraitAlt: 'Foto de perfil de Joaquín Manzanares',
  },
  en: {
    heading: 'About me',
    paragraphs: [
      'I combine full stack web development training (MERN stack: MongoDB, Express, React, Node.js) with real work experience in administration and logistics, which gives me organization, attention to detail, and problem-solving skills. I am self-taught (Codecademy, Codewars, W3Schools, Exercism) and a student of the Bachelor\'s degree in Information Technology at UTEC.',
      'I recently completed an AI Development course (BIG School, 2026), adding that layer to my technical profile. I am looking to join a frontend / full stack development team where I can keep growing.',
    ],
    portraitAlt: 'Profile photo of Joaquín Manzanares',
  },
}
