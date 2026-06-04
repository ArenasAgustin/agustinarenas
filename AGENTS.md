# AGENTS.md

Instrucciones **críticas y verificables** para agentes que trabajen en este repositorio. **Leer antes de modificar el código.**

---

## 🎨 Sistema de Diseño (Fuente de Verdad)
- **`DESIGN.md` es la ÚNICA fuente de verdad** para estilos, colores, tipografía y componentes.
- **ANTES de modificar cualquier estilo o componente visual**:
  1. **Consultar `DESIGN.md`** para confirmar tokens, componentes y reglas.
  2. **Verificar `global.css`** para implementación actual.
  3. **No asumir valores**: Usar **exclusivamente** lo documentado en `DESIGN.md`.
- **Tokens CSS obligatorios**: Usar **solo** variables de `:root` (ej: `var(--accent)`, `var(--bg)`).
  - ❌ **Prohibido**: Hardcodear valores como `#08080e` o `#7c5cbf`.

### Componentes Reutilizables
- **Botones**: `.button-primary`, `.button-secondary`, `.button-error`, `.button-success`.
- **Inputs**: `.input` (para `input`, `select`, `textarea`).
- **Cards**: `.card`.

### Temática
- **Modo claro/oscuro**: Soportado vía variables CSS (`:root` y `[data-theme="light"]`).
- **No añadir nuevos colores** sin actualizar `DESIGN.md` y `global.css`.

---

## 🛠️ Configuración y Convenciones

### Comandos
- **Desarrollo**:
  ```bash
  pnpm dev  # Iniciar servidor de desarrollo (si aplica)
  ```

### Estructura Clave
- **Estilos**: `src/styles/global.css` (tokens y estilos base).
- **Datos estáticos**: `src/constants/` (proyectos, tecnologías, etc.).

### Quirks Críticos
- **Animaciones**: Usar `.reveal` para apariciones. **Respetar `prefers-reduced-motion`** (ya implementado en `global.css`).
- **Accesibilidad**:
  - Todos los elementos interactivos **deben** tener `focus-visible`.
  - Contraste mínimo: WCAG AA (4.5:1 para texto normal).
- **Grid de fondo**: El `body` usa un grid sutil (`background-image`). **No modificar sin consultar `DESIGN.md`.**

---

## 🚫 Restricciones
- **No modificar `global.css`** sin actualizar `DESIGN.md`.
- **No hardcodear estilos** fuera de `global.css`.
- **No ignorar `prefers-reduced-motion`**.

---

## 📌 Referencias
- [DESIGN.md](./DESIGN.md): Tokens, componentes y reglas de diseño.
- [global.css](./src/styles/global.css): Estilos globales y tokens CSS.