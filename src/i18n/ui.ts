import type { Locale } from "./config";

/**
 * UI strings. English is the source of truth for the key set:
 * the Spanish dictionary is typed against it, so a missing or extra
 * key is a type error caught by `astro check`.
 */
const en = {
  // Layout / SEO
  "meta.title": "Agustín Arenas — Software Developer",
  "meta.description":
    "Personal portfolio of Agustín Arenas, a Full-Stack Developer focused on building fast, reliable, and maintainable web products.",
  "meta.imageAlt": "Agustín Arenas — Full-Stack Developer portfolio preview",
  "meta.siteName": "Agustín Arenas Portfolio",
  "schema.jobTitle": "Software Developer",
  "schema.personDescription":
    "Full-Stack Developer with expertise in web development, problem-solving, and open-source contributions",
  "layout.skipLink": "Skip to main content",

  // Home page
  "home.title": "Agustín Arenas — Full-Stack Developer | My Portfolio",
  "home.description":
    "Full-Stack Developer from Argentina. TypeScript, React, Node.js. Projects, work experience, and open-source contributions. Available for new opportunities.",
  "home.schemaName": "Agustín Arenas | Software Developer",
  "home.schemaDescription":
    "Full-Stack Developer from Argentina. Experienced in JavaScript, TypeScript, React, Node.js, and modern web technologies.",
  "home.experienceListName": "Work Experience",
  "home.experienceListDescription":
    "Professional experience of Agustín Arenas as a Software Developer.",
  "home.projectsListName": "Projects",
  "home.projectsListDescription":
    "Open-source and professional projects developed by Agustín Arenas.",

  // Nav
  "nav.label": "Main navigation",
  "nav.homeLabel": "Agustín Arenas — home",
  "nav.toggleMenu": "Toggle menu",
  "nav.openMenu": "Open menu",
  "nav.closeMenu": "Close menu",
  "nav.about": "about",
  "nav.experience": "experience",
  "nav.skills": "skills",
  "nav.projects": "projects",
  "nav.contact": "contact",
  "nav.aboutLabel": "Go to About section",
  "nav.experienceLabel": "Go to Experience section",
  "nav.skillsLabel": "Go to Skills section",
  "nav.projectsLabel": "Go to Projects section",
  "nav.contactLabel": "Go to Contact section",
  "theme.toLight": "Switch to light theme",
  "theme.toDark": "Switch to dark theme",

  // Shared
  "common.opensNewTab": "(opens in new tab)",
  "common.email": "Email",

  // Hero
  "hero.label": "Full-Stack Developer · Córdoba, ARG",
  "hero.subtitleBefore": "Building web products — ",
  "hero.subtitleStrong": "from database to deploy",
  "hero.subtitleAfter": ".",
  "hero.subtitleLine2": "Currently at Dequo.",
  "hero.downloadCv": "Download CV",
  "hero.downloadCvHint": "(PDF, opens in new tab)",
  "hero.viewProjects": "View projects",
  "hero.photoAlt": "Agustín Arenas — Full-Stack Developer",
  "hero.badgeStrong": "Open",
  "hero.badge": "to remote",

  // About
  "about.title": "About",
  "about.intro": "I'm a ",
  "about.role": "Full-Stack Developer",
  "about.body":
    " focused on solving real product problems with clean, scalable web solutions. Based in Argentina, I work across frontend and backend development with a strong focus on ",
  "about.focus": "performance, maintainability, and user experience",
  "about.end": ".",
  "about.statFocus": "Full-Stack focus",
  "about.statYears": "Years coding",
  "about.statLocation": "Based in Córdoba",
  "about.statTech": "Technologies",

  // Sections
  "experience.title": "Experience",
  "skills.title": "Skills",
  "projects.title": "Projects",
  "projects.github": "GitHub",
  "projects.githubLabel": "{name} on GitHub",
  "projects.live": "Live ↗",
  "projects.liveLabel": "{name} live demo",
  "projects.previewAlt": "Project preview",
  "projects.previewOf": "Preview of {name}",

  // Contact
  "contact.title": "Contact",
  "contact.headline1": "Let's build",
  "contact.headline2": "something",
  "contact.headlineAccent": "great.",
  "contact.emailLabel": "Send email to {email}",
  "contact.linkedinLabel": "LinkedIn profile (opens in new tab)",
  "contact.githubLabel": "GitHub profile (opens in new tab)",

  // Breadcrumbs
  "breadcrumbs.label": "Breadcrumb",
  "breadcrumbs.home": "Home",

  // Privacy
  "privacy.title": "Privacy Policy | Agustín Arenas",
  "privacy.description":
    "Privacy policy for agustinarenas.vercel.app - Learn how your data is handled.",
  "privacy.heading": "Privacy Policy",
  "privacy.lastUpdated": "Last updated: June 2026",

  // CV
  "cv.title": "Agustín Arenas — Curriculum Vitae",
  "cv.role": "Full-Stack Developer",
  "cv.location": "Córdoba, Argentina",
  "cv.skills": "Skills",
  "cv.education": "Education",
  "cv.experience": "Experience",
  "cv.groupFrontend": "Frontend",
  "cv.groupJavascript": "JavaScript",
  "cv.groupBackend": "Backend",
  "cv.groupDatabases": "Databases",
  "cv.groupTools": "Tools",
  "cv.summary":
    "Full-Stack Developer with 3+ years of professional experience building and maintaining scalable web products. Focused on performance, clean code, and pragmatic solutions from frontend to backend. Experienced across the full stack: React, Next.js, Node.js, PHP/Laravel, and relational/non-relational databases.",
} as const;

export type UIKey = keyof typeof en;

const es: Record<UIKey, string> = {
  // Layout / SEO
  "meta.title": "Agustín Arenas — Desarrollador de Software",
  "meta.description":
    "Portafolio personal de Agustín Arenas, desarrollador Full-Stack enfocado en crear productos web rápidos, confiables y mantenibles.",
  "meta.imageAlt": "Agustín Arenas — Vista previa del portafolio de desarrollador Full-Stack",
  "meta.siteName": "Portafolio de Agustín Arenas",
  "schema.jobTitle": "Desarrollador de Software",
  "schema.personDescription":
    "Desarrollador Full-Stack con experiencia en desarrollo web, resolución de problemas y contribuciones de código abierto",
  "layout.skipLink": "Saltar al contenido principal",

  // Home page
  "home.title": "Agustín Arenas — Desarrollador Full-Stack | Mi Portafolio",
  "home.description":
    "Desarrollador Full-Stack de Argentina. TypeScript, React, Node.js. Proyectos, experiencia laboral y contribuciones de código abierto. Disponible para nuevas oportunidades.",
  "home.schemaName": "Agustín Arenas | Desarrollador de Software",
  "home.schemaDescription":
    "Desarrollador Full-Stack de Argentina. Experiencia en JavaScript, TypeScript, React, Node.js y tecnologías web modernas.",
  "home.experienceListName": "Experiencia laboral",
  "home.experienceListDescription":
    "Experiencia profesional de Agustín Arenas como desarrollador de software.",
  "home.projectsListName": "Proyectos",
  "home.projectsListDescription":
    "Proyectos de código abierto y profesionales desarrollados por Agustín Arenas.",

  // Nav
  "nav.label": "Navegación principal",
  "nav.homeLabel": "Agustín Arenas — inicio",
  "nav.toggleMenu": "Alternar menú",
  "nav.openMenu": "Abrir menú",
  "nav.closeMenu": "Cerrar menú",
  "nav.about": "sobre mí",
  "nav.experience": "experiencia",
  "nav.skills": "habilidades",
  "nav.projects": "proyectos",
  "nav.contact": "contacto",
  "nav.aboutLabel": "Ir a la sección Sobre mí",
  "nav.experienceLabel": "Ir a la sección Experiencia",
  "nav.skillsLabel": "Ir a la sección Habilidades",
  "nav.projectsLabel": "Ir a la sección Proyectos",
  "nav.contactLabel": "Ir a la sección Contacto",
  "theme.toLight": "Cambiar al tema claro",
  "theme.toDark": "Cambiar al tema oscuro",

  // Shared
  "common.opensNewTab": "(se abre en una pestaña nueva)",
  "common.email": "Correo",

  // Hero
  "hero.label": "Desarrollador Full-Stack · Córdoba, ARG",
  "hero.subtitleBefore": "Construyo productos web — ",
  "hero.subtitleStrong": "de la base de datos al deploy",
  "hero.subtitleAfter": ".",
  "hero.subtitleLine2": "Actualmente en Dequo.",
  "hero.downloadCv": "Descargar CV",
  "hero.downloadCvHint": "(PDF, se abre en una pestaña nueva)",
  "hero.viewProjects": "Ver proyectos",
  "hero.photoAlt": "Agustín Arenas — Desarrollador Full-Stack",
  "hero.badgeStrong": "Disponible",
  "hero.badge": "para remoto",

  // About
  "about.title": "Sobre mí",
  "about.intro": "Soy ",
  "about.role": "desarrollador Full-Stack",
  "about.body":
    " enfocado en resolver problemas reales de producto con soluciones web limpias y escalables. Desde Argentina, trabajo tanto en frontend como en backend, con un fuerte foco en ",
  "about.focus": "el rendimiento, la mantenibilidad y la experiencia de usuario",
  "about.end": ".",
  "about.statFocus": "Enfoque Full-Stack",
  "about.statYears": "Años programando",
  "about.statLocation": "Con base en Córdoba",
  "about.statTech": "Tecnologías",

  // Sections
  "experience.title": "Experiencia",
  "skills.title": "Habilidades",
  "projects.title": "Proyectos",
  "projects.github": "GitHub",
  "projects.githubLabel": "{name} en GitHub",
  "projects.live": "Demo ↗",
  "projects.liveLabel": "Demo en vivo de {name}",
  "projects.previewAlt": "Vista previa del proyecto",
  "projects.previewOf": "Vista previa de {name}",

  // Contact
  "contact.title": "Contacto",
  "contact.headline1": "Construyamos",
  "contact.headline2": "algo",
  "contact.headlineAccent": "increíble.",
  "contact.emailLabel": "Enviar un correo a {email}",
  "contact.linkedinLabel": "Perfil de LinkedIn (se abre en una pestaña nueva)",
  "contact.githubLabel": "Perfil de GitHub (se abre en una pestaña nueva)",

  // Breadcrumbs
  "breadcrumbs.label": "Ruta de navegación",
  "breadcrumbs.home": "Inicio",

  // Privacy
  "privacy.title": "Política de privacidad | Agustín Arenas",
  "privacy.description":
    "Política de privacidad de agustinarenas.vercel.app: cómo se manejan los datos de los visitantes.",
  "privacy.heading": "Política de privacidad",
  "privacy.lastUpdated": "Última actualización: junio de 2026",

  // CV
  "cv.title": "Agustín Arenas — Currículum Vitae",
  "cv.role": "Desarrollador Full-Stack",
  "cv.location": "Córdoba, Argentina",
  "cv.skills": "Habilidades",
  "cv.education": "Educación",
  "cv.experience": "Experiencia",
  "cv.groupFrontend": "Frontend",
  "cv.groupJavascript": "JavaScript",
  "cv.groupBackend": "Backend",
  "cv.groupDatabases": "Bases de datos",
  "cv.groupTools": "Herramientas",
  "cv.summary":
    "Desarrollador Full-Stack con más de 3 años de experiencia profesional creando y manteniendo productos web escalables. Enfocado en el rendimiento, el código limpio y las soluciones pragmáticas del frontend al backend. Experiencia en todo el stack: React, Next.js, Node.js, PHP/Laravel y bases de datos relacionales y no relacionales.",
};

export const ui: Record<Locale, Record<UIKey, string>> = { en, es };
