import type { SecuData } from './types'

export const secuData: SecuData = {
  heading: 'Featured Case Study',
  name: 'Sistema de Evaluación de Convocatoria UTEC (SECU)',
  summary:
    'Sistema de gestión de becas, proyecto académico real para UTEC, desarrollado en equipo (CapyTech, 6 personas) con un tutor asignado bajo metodología ágil/Scrum.',
  role:
    'Modelado UML de clases del sistema, validación del modelo contra los requisitos funcionales y de dominio, gestión del repositorio en GitLab y documentación técnica.',
  tech: ['UML', 'PlantUML', 'GitLab', 'Scrum'],
  highlights: [
    'Comparación entre el modelo MER y el modelo UML para detectar inconsistencias (métodos faltantes, entidades no correspondidas, discrepancias de atributos)',
    'Conversión de diagramas de draw.io a PlantUML',
  ],
  links: [{ label: 'Repo', href: '[SECU_REPO_URL]', kind: 'repo' }],
  imageAlt: 'Diagrama de clases o presentación final del proyecto SECU',
}
