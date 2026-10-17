# Brand mark — "Slashes"

The mark is an **A typed in code**: a forward slash `/`, a backslash `\` and a dash `-` as the crossbar.
The dash is the accent: it doubles as the terminal cursor used across the site (it blinks on hover in the nav).

## Files

| File | Use |
|---|---|
| `logo-symbol-dark.svg` | Transparent mark for dark backgrounds (`--fg` + `--accent`, dark theme) |
| `logo-symbol-light.svg` | Transparent mark for light backgrounds (`--fg` + `--accent`, light theme) |
| `logo-symbol-black.svg` | One-colour master (print, stamps, single-ink) |
| `logo-tile.svg` | Rounded app tile — source of `public/favicon.svg` |
| `logo-tile-square.svg` | Full-bleed tile — source of PNG icons ≥ 57 px (maskable / apple-touch) |
| `logo-tile-small.svg` | Small-size cut (heavier strokes, bigger dash) — source of 16/32 px and `favicon.ico` |

## Construction

- Canvas `256 × 256`. Slashes are parallelograms at exactly **75°**, 32 units wide, spanning y 52–204.
- Gap between slashes at the top: ~16 units. Dash: 36 × 24, centred on x = 128.
- Small cut: slashes 40 units wide, dash 40 × 32.

## Colour

| Theme | Slashes | Dash | Tile |
|---|---|---|---|
| Dark | `#e8e6f0` (`--fg`) | `#7c5cbf` (`--accent`) | `#08080e` (`--bg`) |
| Light | `#14121e` (`--fg`) | `#5b35a8` (`--accent`) | — |

In the site, use the tokens (`var(--fg)`, `var(--accent)`), never hardcoded values.

## Rules

- **Clear space:** at least the dash width (36/256 of the mark) on every side.
- **Minimum size:** 24 px for the symbol; below that use the small cut (`logo-tile-small.svg`).
- **Don't:** recolour the slashes violet (the dash must stay the only accent), rotate, skew, outline,
  add gradients/glows, or set the mark in a typeface.

## Regenerating icons

Renderer: `.claude/skills/logo-design/scripts/render_png.py`.

```bash
python .claude/skills/logo-design/scripts/render_png.py brand/logo-tile-square.svg -o public/icons/favicon-192x192.png --size 192
python .claude/skills/logo-design/scripts/render_png.py brand/logo-tile-small.svg --ico public/favicon.ico --ico-sizes 16 32 48
```
