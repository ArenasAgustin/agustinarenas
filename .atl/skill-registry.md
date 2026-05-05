# Skill Registry

Este archivo documenta las **reglas compactas** y **skills relevantes** para agentes que trabajen en este proyecto.

---

## Compact Rules

Reglas específicas del proyecto para agentes. **Aplicar en todo momento**:

### 🎨 Sistema de Diseño
- **`DESIGN.md` es la única fuente de verdad** para estilos, colores, tipografía y componentes.
- **No modificar estilos sin consultar `DESIGN.md` primero**.
- **Tokens CSS obligatorios**: Usar **solo** variables de `:root` (ej: `var(--accent)`, `var(--bg)`).
  - ❌ **Prohibido**: Hardcodear valores como `#08080e` o `#7c5cbf`.
- **Componentes reutilizables**: Usar las clases definidas en `global.css`:
  - Botones: `.button-primary`, `.button-secondary`, `.button-error`, `.button-success`.
  - Inputs: `.input` (para `input`, `select`, `textarea`).
  - Cards: `.card`.

### 🛠️ Convenciones de Código
- **Stack**: Astro + TypeScript + Tailwind CSS.
- **Package Manager**: Usar **`pnpm`** (no `npm` o `yarn`).
- **Unidades**: Usar `rem` para espaciado y tamaños (base: `1rem = 16px`).
- **Animaciones**: Usar `.reveal` para animaciones de aparición. **Respetar `prefers-reduced-motion`**.
- **Accesibilidad**:
  - Todos los elementos interactivos deben tener estados `hover`, `active` y `focus-visible`.
  - Contraste mínimo: WCAG AA (4.5:1 para texto normal).

### 📁 Estructura del Proyecto
- **Estilos globales**: `src/styles/global.css` (tokens y estilos base).
- **Datos estáticos**: `src/constants/` (proyectos, tecnologías, etc.).
- **Componentes**: No hay carpeta `components/`, pero los estilos reutilizables están en `global.css`.

### 🚫 Restricciones
- **No modificar `global.css`** sin actualizar `DESIGN.md`.
- **No hardcodear estilos** fuera de `global.css`.
- **No ignorar `prefers-reduced-motion`** en animaciones.

---

## User Skills

Skills relevantes para este proyecto. **Usar cuando el contexto lo requiera**:

| Trigger (Contexto)                          | Skill                     | Descripción                                                                                     |
|---------------------------------------------|---------------------------|-------------------------------------------------------------------------------------------------|
| Diseño, estilos, tokens, componentes       | `frontend-design`        | Crear interfaces con alta calidad de diseño. Usar tokens de `DESIGN.md`.                     |
| Astro, componentes, páginas, SSR           | `astro`                   | Trabajar con Astro (componentes, páginas, colecciones de contenido, SSR).                    |
| Tailwind CSS, utilidades, responsive        | `tailwind-css-patterns`  | Estilizar componentes con Tailwind CSS. Usar variables CSS para colores.                    |
| Accesibilidad, WCAG, contraste, ARIA       | `accessibility`          | Auditar y mejorar accesibilidad (contraste, teclado, ARIA, screen readers).                 |
| SEO, meta tags, structured data             | `seo`                     | Optimizar para motores de búsqueda (meta tags, sitemap, structured data).                   |
| TypeScript, tipos avanzados, type safety   | `typescript-advanced-types` | Implementar tipos avanzados en TypeScript para mayor seguridad y mantenibilidad.            |
| Testing, Vitest, Jest, unit tests           | `go-testing`*            | *Nota: No hay test runner instalado. Usar solo si se añade Vitest/Jest en el futuro.*       |

---

## Project-Specific Skills

Skills creados específicamente para este proyecto (si los hubiera):

| Trigger (Contexto)                          | Skill                     | Descripción                                                                                     |
|---------------------------------------------|---------------------------|-------------------------------------------------------------------------------------------------|
| -                                           | -                         | -                                                                                               |

---

## Notes
- **Engram Persistence**: Las reglas compactas y skills están guardados en Engram (si está disponible).
- **Actualización**: Este archivo debe actualizarse ante cambios en el stack, convenciones o sistema de diseño.