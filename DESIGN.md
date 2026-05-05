# DESIGN.md

```yaml
brand:
  name: "Portfolio Personal"
  personality: "Profesional, minimalista y futurista con toques de elegancia técnica"

colors:
  background: "#08080e"  # --bg
  surface: "#13131f"     # --surface
  text_primary: "#e8e6f0" # --fg
  text_secondary: "rgba(232,230,240,0.72)" # --fg2
  accent: "#7c5cbf"     # --accent
  accent_secondary: "#5e3fa3" # --accent2
  border: "rgba(120,100,220,0.12)" # --border
  border_secondary: "rgba(120,100,220,0.22)" # --border2
  error: "#ef4444"      # inferido (no definido en CSS)
  success: "#10b981"    # inferido (no definido en CSS)

typography:
  heading:
    font: "'Space Grotesk', sans-serif" # --sans
    size: "clamp(28px, 4vw, 42px)" # .section-title
    weight: "700"
    line_height: "1.2"
  body:
    font: "'Space Grotesk', sans-serif" # --sans
    size: "1rem"
    weight: "400"
    line_height: "1.5"
  caption:
    font: "'JetBrains Mono', monospace" # --mono
    size: "0.875rem"
    weight: "300"
    line_height: "1.4"

spacing:
  base_unit: "1rem"
  padding_section: "5rem 3rem" # .section
  gap_section_header: "1rem" # .section-header gap
  border_radius_default: "0.5rem" # inferido

breakpoints:
  mobile: "640px"       # inferido
  tablet: "768px"       # @media (max-width: 768px)
  desktop: "1024px"     # inferido
```

# Design System: Portfolio Personal

## Brand

El **Portfolio Personal** está diseñado para transmitir **profesionalismo, minimalismo futurista y elegancia técnica**. El tono visual combina **oscuridad profunda con acentos vibrantes** para crear una experiencia inmersiva y memorable.

- **Principios de diseño**:
  - **Jerarquía visual clara**: Destacar el contenido con tipografía expresiva y espaciado generoso.
  - **Coherencia**: Usar una paleta de colores limitada y patrones de diseño consistentes.
  - **Accesibilidad**: Asegurar contraste adecuado y soporte para `prefers-reduced-motion`.
  - **Creatividad técnica**: Incorporar detalles como *grid sutil*, animaciones fluidas y tipografía mono para reflejar precisión técnica.
  - **Temática**: Soporte para modo claro/oscuro con transiciones suaves.

---

## Colors

| Color                  | Valor HEX / RGBA               | Uso                                                                                     |
|------------------------|---------------------------------|-----------------------------------------------------------------------------------------|
| **Background**         | `#08080e`                     | Fondo principal de la aplicación.                                                      |
| **Surface**            | `#13131f`                     | Superficies elevadas (cards, modales, barras de navegación).                          |
| **Text Primary**       | `#e8e6f0`                     | Texto principal en interfaces.                                                         |
| **Text Secondary**     | `rgba(232,230,240,0.72)`      | Texto secundario (descripciones, captions, placeholders).                            |
| **Accent**             | `#7c5cbf`                     | Elementos interactivos (botones, enlaces, iconos destacados, focus states).           |
| **Accent Secondary**   | `#5e3fa3`                     | Variantes oscuras del acento (ej: hover en botones).                                  |
| **Border**             | `rgba(120,100,220,0.12)`      | Bordes sutiles (cards, inputs, separadores).                                          |
| **Border Secondary**   | `rgba(120,100,220,0.22)`      | Bordes más pronunciados (ej: líneas de sección).                                      |
| **Background Secondary** | `#0f0f1a` (oscuro), `#eeecf8` (claro) | Fondo secundario para elementos elevados.                                            |
| **Grid Color**         | `rgba(100,80,200,0.06)`       | Patrón de grid sutil en el fondo.                                                     |
| **Dim**                | `rgba(255,255,255,0.35)` (oscuro), `rgba(0,0,0,0.35)` (claro) | Texto desvanecido (placeholders, texto secundario). |
| **Error**              | `#ef4444`                     | Estados de error, alertas y mensajes críticos.                                        |
| **Success**            | `#10b981`                     | Estados de éxito, confirmaciones y acciones completadas.                              |

---

## Typography

### Jerarquía Tipográfica

| Estilo        | Fuente                          | Tamaño               | Peso  | Line Height | Uso                                                                                     |
|--------------|----------------------------------|----------------------|-------|-------------|-----------------------------------------------------------------------------------------|
| **Heading**  | `'Space Grotesk', sans-serif`   | `clamp(28px, 4vw, 42px)` | `700`  | `1.2`       | Títulos principales (H1 en secciones).                                                 |
| **Subheading**| `'Space Grotesk', sans-serif`   | `1.5rem`             | `600`  | `1.3`       | Subtítulos (H2, H3).                                                                   |
| **Body**     | `'Space Grotesk', sans-serif`   | `1rem`               | `400`  | `1.5`       | Texto principal en párrafos y descripciones.                                          |
| **Caption**  | `'JetBrains Mono', monospace`   | `0.875rem`           | `300`  | `1.4`       | Texto secundario (números de sección, metadatos, código).                              |

### Reglas de Uso

- **Headings**: Usar para títulos de secciones. Evitar más de 3 niveles de jerarquía. Usar `clamp()` para responsividad.
- **Body**: Texto principal en párrafos. Mantener alineación izquierda (nunca justificado).
- **Caption**: Usar para números de sección, metadatos o código. La fuente mono (`JetBrains Mono`) aporta precisión técnica.
- **Accesibilidad**: Asegurar contraste mínimo de 4.5:1 para texto (WCAG AA).

---

## Spacing

### Lógica del Sistema de Espaciado

- **Base Unit**: `1rem` (equivalente a `16px`). Usar múltiplos de esta unidad para mantener coherencia.
- **Padding en Secciones**: `5rem 3rem` (`.section`). En mobile: `3.75rem 1.25rem`.
- **Gap en Headers**: `1rem` (`.section-header`).
- **Border Radius**: `0.5rem` (inferido, no definido explícitamente en CSS).
- **Grid**: Fondo con patrón de grid de `64px x 64px` usando `var(--grid-color)`.

### Reglas de Uso

- **Consistencia**: Usar múltiplos de `1rem` para padding, margin y gaps.
- **Legibilidad**: Asegurar suficiente espaciado vertical entre secciones (`80px` en desktop).
- **Responsividad**: Reducir padding en mobile (`60px 20px`).
- **Grid**: Mantener el patrón de grid sutil en el fondo para dar profundidad.

---

## Components

### Botones

*Nota: Los botones no están definidos explícitamente en el CSS actual. Usar los siguientes patrones basados en los tokens:*

| Variante       | Color de Fondo | Color de Texto | Border               | Estados (Hover, Active, Focus)                     |
|---------------|-----------------|-----------------|------------------------|----------------------------------------------------|
| **Primary**   | `var(--accent)` | `#ffffff`            | `none`                   | Hover: `var(--accent2)`, Focus: `2px solid var(--accent)` |
| **Secondary** | `transparent`   | `var(--accent)`       | `1px solid var(--accent)` | Hover: `var(--surface)`, Focus: `2px solid var(--accent)` |
| **Error**      | `#ef4444`       | `#ffffff`            | `none`                   | Hover: `#dc2626`, Focus: `2px solid #ef4444`       |
| **Success**    | `#10b981`       | `#ffffff`            | `none`                   | Hover: `#059669`, Focus: `2px solid #10b981`       |

### Cards

| Propiedad      | Valor                     |
|---------------|---------------------------|
| **Background**| `var(--surface)`          |
| **Border**    | `1px solid var(--border)` |
| **Padding**   | `1.5rem`                  |
| **Border Radius** | `0.5rem`              |
| **Focus Within** | `border-color: var(--accent)` |

### Secciones (`.section`)

| Propiedad      | Valor                     |
|---------------|---------------------------|
| **Max Width** | `1200px`                  |
| **Padding**   | `5rem 3rem` (desktop)     |
| **Padding**   | `3.75rem 1.25rem` (mobile)|
| **Margin**    | `0 auto`                  |

### Headers de Sección (`.section-header`)

| Propiedad      | Valor                     |
|---------------|---------------------------|
| **Display**   | `flex`                    |
| **Align**     | `center`                  |
| **Gap**       | `1rem`                    |
| **Margin Bottom** | `3rem`               |

### Focus States

| Propiedad      | Valor                     |
|---------------|---------------------------|
| **Outline**   | `2px solid var(--accent)` |
| **Offset**    | `3px`                     |
| **Border Radius** | `4px`               |

### Animaciones (`.reveal`)

| Propiedad      | Valor                     |
|---------------|---------------------------|
| **Opacity**   | `0` → `1`                 |
| **Transform** | `translateY(24px)` → `none` |
| **Transition**| `opacity 0.6s ease, transform 0.6s ease` |
| **Delay**     | `0.1s`, `0.2s`, `0.3s` (opcional) |

---

## Do / Don't

### ✅ Do

- **Usar los tokens CSS definidos** (`--bg`, `--accent`, `--fg`, etc.) para mantener coherencia.
- **Priorizar accesibilidad**:
  - Contraste mínimo de 4.5:1 para texto (WCAG AA).
  - Soporte para `prefers-reduced-motion`.
  - Estados `focus-visible` para teclado.
- **Mantener la jerarquía tipográfica**: Usar `Space Grotesk` para headings/body y `JetBrains Mono` para código/metadatos.
- **Espaciado consistente**: Usar múltiplos de `1rem` para padding, margin y gaps.
- **Animaciones fluidas**: Usar transiciones suaves para revelar elementos (`.reveal`).
- **Temática**: Soporte para modo claro/oscuro con transiciones suaves.

### ❌ Don't

- **No usar colores fuera de la paleta definida** sin justificación.
- **No saturar la interfaz**: Mantener el grid sutil y espaciado generoso.
- **No ignorar la responsividad**: Asegurar que los estilos funcionen en mobile (`max-width: 768px`).
- **No usar tipografía inconsistente**: Evitar mezclar fuentes no definidas.
- **No dejar componentes sin estados interactivos**: Siempre definir `hover`, `active` y `focus-visible`.

---

## Deuda de Diseño

- **Documentación de tokens**: Los tokens CSS están definidos en `global.css` pero no documentados en un archivo centralizado (ej: `tokens.js`). Considerar extraerlos para mejor mantenibilidad.
- **Uso de componentes**: Integrar los nuevos estilos de botones y cards en los componentes del portfolio.
- **Pruebas de accesibilidad**: Verificar que todos los elementos interactivos (especialmente los nuevos) tengan estados `focus-visible` y contraste adecuado.
- **Temática**: Aunque los componentes nuevos soportan modo claro/oscuro, probar manualmente la experiencia en ambos modos.

---

*Este documento es una guía viva. Actualizarlo ante cambios en el diseño o nuevas decisiones visuales.*