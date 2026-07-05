# Joaquin Manzanares — Portfolio

Portfolio personal de **Joaquin Manzanares**, estudiante de la Licenciatura en Tecnologías de la Información (UTEC) y desarrollador frontend / full stack en formación. Sitio de una sola página (single-page), construido con foco en rendimiento, accesibilidad y diseño minimalista.

🔗 **Demo en vivo:** [joaquinmanz.github.io/jm-personal-portfolio](https://joaquinmanz.github.io/jm-personal-portfolio/)

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-222?style=flat&logo=github)

---

## 📋 Tabla de contenidos

- [Sobre el proyecto](#-sobre-el-proyecto)
- [Stack técnico](#-stack-técnico)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Secciones del sitio](#-secciones-del-sitio)
- [Instalación y uso local](#-instalación-y-uso-local)
- [Despliegue](#-despliegue)
- [Placeholders pendientes](#-placeholders-pendientes)
- [Contacto](#-contacto)

---

## 🧭 Sobre el proyecto

Este repositorio contiene el código fuente de mi portfolio personal, pensado como carta de presentación para procesos de selección en roles de desarrollo frontend / full stack junior. Combina mi formación técnica (stack MERN, bases de POO en Java) con mi experiencia laboral real en administración y logística, y documenta en detalle mi proyecto académico más relevante hasta la fecha: **SECU** (Sistema de Evaluación de Convocatoria UTEC).

## 🛠 Stack técnico

| Categoría | Tecnología |
|---|---|
| Librería UI | [React](https://react.dev/) |
| Build tool | [Vite](https://vitejs.dev/) |
| Estilos | [Tailwind CSS](https://tailwindcss.com/) |
| Hosting | GitHub Pages |
| Control de versiones | Git / GitHub |

Es un sitio **frontend puro, sin backend propio** — todo el contenido es estático, lo que simplifica el despliegue y mejora los tiempos de carga.

## 📁 Estructura del proyecto

```
/src
  /components
    Header.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    SecuProject.jsx      # Proyecto destacado (case study)
    Projects.jsx
    Experience.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
  /assets
    /images
  App.jsx
  main.jsx
  index.css
/public
  cv.pdf
  favicon.svg
README.md
```

## 🧩 Secciones del sitio

1. **Hero** — Nombre, rol, tagline y accesos directos (CV, LinkedIn, GitHub).
2. **Sobre mí** — Resumen de formación, experiencia y enfoque profesional.
3. **SECU — Proyecto destacado** — Case study del sistema de gestión de becas desarrollado en equipo (CapyTech) para UTEC: modelado UML, validación de requisitos, gestión de repositorio.
4. **Skills** — Lenguajes, frameworks, bases de datos, herramientas y habilidades complementarias, agrupadas por categoría.
5. **Experiencia** — Timeline laboral (Visuar Uruguay, Alorica).
6. **Proyectos** — Rabbit Ecommerce, Data Finance, Studio Ghibli App, Geritch Restaurant.
7. **Educación y certificaciones** — UTEC, IBEC, BIG School, Cambridge FCE.
8. **Contacto** — Email, teléfono, ubicación y redes.

## 🚀 Instalación y uso local

```bash
# Clonar el repositorio
git clone https://github.com/joaquinmanz/jm-personal-portfolio.git
cd jm-personal-portfolio

# Instalar dependencias
npm install

# Levantar servidor de desarrollo
npm run dev

# Generar build de producción
npm run build

# Previsualizar el build de producción
npm run preview
```

## 🌐 Despliegue

El sitio se despliega en GitHub Pages a partir de la rama de build.

```bash
npm run deploy
```

Verificar que `vite.config.js` tenga configurado correctamente el campo `base` con el nombre del repositorio antes de desplegar.



## 📬 Contacto

- **Email:** manzanares20.business@gmail.com
- **Teléfono:** +598 91 819 872
- **Ubicación:** Montevideo, Uruguay
- **GitHub:** [github.com/joaquinmanz](https://github.com/joaquinmanz)

---

<p align="center">Hecho con dedicación por Joaquin Manzanares 🇺🇾</p>