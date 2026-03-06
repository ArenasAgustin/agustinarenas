# Progreso SEO + Posicionamiento en IA

Última actualización: 2026-03-05
Estado inicial: Auditoría completada

## Prioridad alta

- [x] Corregir enlace de CV en About a ruta absoluta (/curriculum/Curriculum_Agustin_Arenas.pdf)
- [x] Quitar nofollow en enlaces externos de identidad (GitHub / LinkedIn)
- [x] Completar metadatos Twitter (sin cuenta: eliminar tags vacíos twitter:site y twitter:creator)
- [x] Reemplazar textos genéricos de botones (Repo / Deploy) por anchor text descriptivo

## Prioridad media

- [x] Convertir tarjetas de proyectos a estructura semántica (article + h3)
- [x] Corregir typos de SEO/UX (Skils, agustin areanas, etc.)
- [x] Evaluar migración de output server a static si no hay necesidad real de SSR (migrado y validado con build OK)

## Posicionamiento en IAs (AI Search)

- [x] Crear archivo llms.txt en public
- [x] Ampliar JSON-LD con WebSite, ItemList de proyectos y entidad por proyecto
- [x] Añadir/reforzar sección “Experience” dentro de About (sin página nueva, sin logros cuantificados ni evidencia externa)

## Validación y medición

- [ ] Verificar indexación en Google Search Console
- [ ] Verificar rich results de schema
- [x] Revisar cobertura de sitemap y robots (validado en build; duplicados corregidos)
- [ ] Medir CTR y consultas que disparan impresiones de marca

## Notas

- Objetivo principal: mejorar comprensión semántica del perfil para buscadores tradicionales y motores de respuesta con IA.
- Recomendación de ejecución: atacar primero los ítems de prioridad alta y luego pasar a schema + llms.

## Runbook rápido (manual)

### 1) Google Search Console (indexación)

- Propiedad: `https://agustinarenas.vercel.app/`
- Ir a: `Inspección de URL`
- Probar estas URLs y solicitar indexación si corresponde:
	- `/`
	- `/about/`
	- `/projects/`
- Ir a: `Sitemaps`
- Enviar/validar: `https://agustinarenas.vercel.app/sitemap-index.xml`
- Resultado esperado: URLs indexables sin bloqueo por robots/noindex.

### 2) Rich Results / Schema

- Probar páginas en:
	- https://search.google.com/test/rich-results
	- https://validator.schema.org/
- URLs a validar:
	- `https://agustinarenas.vercel.app/`
	- `https://agustinarenas.vercel.app/about/`
	- `https://agustinarenas.vercel.app/projects/`
- Resultado esperado:
	- Sin errores críticos de JSON-LD.
	- `Person`, `WebSite`, `ProfilePage`, `CollectionPage`, `ItemList` y `CreativeWork` detectados.

### 3) Métricas (CTR y consultas)

- En Search Console > `Resultados de búsqueda`:
	- Filtro: `Últimos 28 días`
	- Métricas: `Clics`, `Impresiones`, `CTR medio`, `Posición media`
- Revisar consultas con marca y perfil técnico (ejemplos):
	- `agustin arenas`
	- `agustin arenas developer`
	- `agustin arenas portfolio`
	- `full-stack developer argentina`

## Registro semanal (copiar/pegar)

- Semana: YYYY-MM-DD
- Clics: 
- Impresiones: 
- CTR: 
- Posición media: 
- Top consultas: 
	- 
	- 
- Acciones aplicadas esa semana: 
	- 
