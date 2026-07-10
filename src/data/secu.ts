import type { Language, SecuData } from './types'

export const secuData: Record<Language, SecuData> = {
  es: {
    heading: 'Proyecto Destacado',
    name: 'Sistema de Evaluación de Convocatoria UTEC (SECU)',
    summary:
      'Sistema de gestión de becas, proyecto académico real para UTEC, desarrollado en equipo (CapyTech, 6 personas) con un tutor asignado bajo metodología ágil/Scrum.',
    role:
      'Modelado UML de clases del sistema, validación del modelo contra los requisitos funcionales y de dominio, gestión del repositorio en GitLab y documentación técnica.',
    tech: ['UML', 'PlantUML', 'GitLab', 'Scrum', 'Java'],
    highlights: [
      'Comparación entre el modelo MER y el modelo UML para detectar inconsistencias (métodos faltantes, entidades no correspondidas, discrepancias de atributos)',
      'Conversión de diagramas de draw.io a PlantUML',
    ],
    links: [],
    imageAlt: 'Diagrama de clases o presentación final del proyecto SECU',
  },
  en: {
    heading: 'Featured Project',
    name: 'UTEC Application Evaluation System (SECU)',
    summary:
      'Scholarship management system, a real academic project for UTEC, developed in a team (CapyTech, 6 people) with an assigned tutor under an agile/Scrum methodology.',
    role:
      'UML class modeling of the system, validation of the model against functional and domain requirements, GitLab repository management, and technical documentation.',
    tech: ['UML', 'PlantUML', 'GitLab', 'Scrum', 'Java'],
    highlights: [
      'Comparison between the ER model and the UML model to detect inconsistencies (missing methods, unmatched entities, attribute discrepancies)',
      'Conversion of diagrams from draw.io to PlantUML',
    ],
    links: [],
    imageAlt: 'Class diagram or final presentation of the SECU project',
  },
}
