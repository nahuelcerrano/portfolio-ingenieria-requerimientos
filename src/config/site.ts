// Datos personales y de la materia: se usan en Layout, Hero y Footer.
export const SITE = {
  autor: 'Nahuel Cerrano',
  materia: 'Ingeniería de Requerimientos',
  universidad: 'Universidad Abierta Interamericana (UAI)',
  carrera: 'Ingeniería en Sistemas Informáticos',
  docente: 'Profesora Marcela Samela',
  cuatrimestre: '2º cuatrimestre 2026',
  descripcion:
    'Portfolio de los trabajos prácticos de Ingeniería de Requerimientos: elicitación, LEL, escenarios, especificación SRS y más.',
  github: 'https://github.com/nahuelcerrano',
  linkedin: 'https://www.linkedin.com/in/nahuel-cerrano',
  email: 'nahuelcerrano21@ejemplo.com',
} as const;

// Integrantes del grupo de la cursada. Los TP grupales los usan por defecto
// si su .md no define `integrantes`.
export const GRUPO = ['Fabrizio Cativa', 'Gonzalo Castañeda', 'Nahuel Cerrano', 'Agustin Gomez'] as const;
