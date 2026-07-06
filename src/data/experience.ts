import type { ExperienceData, Language } from './types'

export const experienceData: Record<Language, ExperienceData> = {
  es: {
    heading: 'Experiencia',
    entries: [
      {
        role: 'Auxiliar Administrativo de Logística',
        company: 'Visuar Uruguay',
        period: '01/2026 - Presente',
        location: 'Montevideo',
        highlights: [
          'Gestión de hasta 1.000 facturas semanales con 100% de trazabilidad documental',
          'Coordinación de distribución de 500-700 productos semanales para grandes cadenas (Tienda Inglesa, Disco, El Dorado)',
          'Digitalización de registros mediante sistema Softland',
        ],
      },
      {
        role: 'Customer Service Representative',
        company: 'Alorica',
        period: '10/2023 - 01/2024',
        location: 'Montevideo',
        highlights: [
          'Atención de aproximadamente 30 consultas diarias en inglés a clientes internacionales',
          '92% de satisfacción mensual',
          'Resolución integral de casos coordinando con otros departamentos',
        ],
      },
    ],
  },
  en: {
    heading: 'Experience',
    entries: [
      {
        role: 'Logistics Administrative Assistant',
        company: 'Visuar Uruguay',
        period: '01/2026 - Present',
        location: 'Montevideo',
        highlights: [
          'Managed up to 1,000 weekly invoices with 100% document traceability',
          'Coordinated weekly distribution of 500-700 products for major retail chains (Tienda Inglesa, Disco, El Dorado)',
          'Digitized records using the Softland system',
        ],
      },
      {
        role: 'Customer Service Representative',
        company: 'Alorica',
        period: '10/2023 - 01/2024',
        location: 'Montevideo',
        highlights: [
          'Handled approximately 30 daily inquiries in English for international customers',
          '92% monthly satisfaction rate',
          'End-to-end case resolution coordinating with other departments',
        ],
      },
    ],
  },
}
