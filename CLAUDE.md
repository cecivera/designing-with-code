<!-- EVERGREEN:START — managed by /ev-update, do not edit below this line -->

# Evergreen Framework

## Stack
- **Framework**: Next.js (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Font**: Geist Sans + Geist Mono (via next/font)
- **Deploy**: Vercel

## Project Structure
```
src/
  app/
    layout.tsx      <- Root layout (clean shell: fonts + Tailwind, no chrome)
    page.tsx        <- User's app (blank starter)
    ev/             <- Evergreen dashboard and project pages (isolated from user app)
      page.tsx      <- Project dashboard
      roadmap/      <- Kanban board
      prd/          <- Product requirements
      research/     <- Research findings
      design-system/<- Visual design system reference
  components/
    ui/             <- shadcn/ui primitives (button, card, input, etc.)
    wireframe/      <- Wireframe-specific components (created by /wireframe)
  lib/
    utils.ts        <- cn() helper and shared utilities
docs/
  evergreen.json    <- Content manifest (single source of truth for skills, workflow, stack)
  project.json      <- Project config: repo, staging, production, figma URLs
  prd.json          <- Product requirements (created by /ev-prd)
  research.json     <- Research findings (created by /ev-research)
  roadmap.json      <- Product roadmap data (created by /ev-roadmap)
  design-system.md  <- Design system docs (created by /ev-designsystem)
.claude/
  skills/
    ev-prd/SKILL.md           <- Product requirements generator
    ev-research/SKILL.md      <- Market & competitive research
    ev-design/SKILL.md        <- UI components and pages
    ev-designsystem/SKILL.md  <- Colors, typography, spacing
    ev-wireframe/SKILL.md     <- Rapid prototyping
    ev-figma/SKILL.md         <- Figma-to-code workflow
    ev-roadmap/SKILL.md       <- Product roadmap kanban board
    ev-ship/SKILL.md          <- Deploy to Vercel
    ev-update/SKILL.md        <- Update Evergreen
    ev-help/SKILL.md          <- Show all skills
```

## Coding Conventions
- Use Tailwind theme tokens (`bg-primary`, `text-muted-foreground`, etc.) — never hardcode colors
- Use CSS variables defined in `globals.css` for custom values
- Use `cn()` from `@/lib/utils` for conditional class merging
- Use shadcn/ui components as building blocks — don't rebuild existing primitives
- Mobile-first responsive design: 375px -> 768px -> 1280px
- Server components by default; add `"use client"` only when needed

## Skills
All Evergreen skills are prefixed with `ev-`. Type `ev-` to see them all.
- `/ev-prd` — Generate a product requirements document
- `/ev-research` — Conduct market and competitive research
- `/ev-design` — Create and refine UI components and pages
- `/ev-designsystem` — Configure colors, typography, spacing, and audit consistency
- `/ev-wireframe` — Rapid low-fi prototyping
- `/ev-figma` — Pull designs from Figma, extract tokens, sync components
- `/ev-roadmap` — Manage a product roadmap with kanban board
- `/ev-ship` — Deploy to Vercel and set up feedback
- `/ev-update` — Update Evergreen to the latest version
- `/ev-help` — Show all skills and the recommended workflow

## Figma MCP Integration
This project supports Figma MCP via the `/ev-figma` skill. Available MCP tools:
- `mcp__figma__get_design_context` — Inspect Figma designs for layout, spacing, colors
- `mcp__figma__get_screenshot` — Capture Figma frames as reference
- `mcp__figma__get_code_connect_suggestions` — Map Figma components to code
- `mcp__figma__send_code_connect_mappings` — Push code mappings back to Figma
- `mcp__figma__get_variable_defs` — Pull Figma variables and tokens

When translating from Figma: extract tokens, map to the design system variables, and build components to match.

## Git & Commit Conventions
- Do NOT include `Co-Authored-By: Claude` in commit messages
- Do NOT list Claude as a contributor
- Write concise commit messages focused on the "why"
- Commit only when explicitly asked

## Workflow
1. Start with `/ev-prd` to define what you're building
2. Run `/ev-research` to validate assumptions
3. Use `/ev-wireframe` to quickly prototype screens
4. Run `/ev-roadmap` to plan what to build first
5. Refine with `/ev-design` (and `/ev-figma` when working from Figma files)
6. Run `/ev-designsystem` to formalize the visual system from what emerged
7. Deploy with `/ev-ship` when ready for feedback

<!-- EVERGREEN:END — add your project instructions below -->

# Project Instructions

## Design System
- **Mode**: Light only (`:root` tokens). No dark mode.
- **Palette**: shadcn/ui neutral (see `src/app/globals.css` `:root`)
- **Font**: Geist Sans (UI) + Geist Mono (code)
- **Radius**: 0 everywhere — `--radius: 0rem` in `globals.css` drives every `rounded-*` token. Only `rounded-full` (avatars, switch, radio, slider thumb, progress) stays circular.
- **Figma source of truth**: [Evergreen DS](https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS) — one page per component; variables named like the CSS tokens.
- **Storybook**: one story file per component in `src/stories/components/`, published to Chromatic on every push.
- **Code Connect**: templates in `src/figma/` (see `CODE-CONNECT.md`).

## Regla de paridad Figma ↔ código (obligatoria)

Ningún componente se publica en código si no coincide con su versión en Figma.

### 1. Antes de subir un cambio de componente
Cuando crees o cambies algo en `src/components/` o `src/app/globals.css`:
1. Captura el componente en Figma con el MCP de Figma (`get_screenshot` del componente o del set de variantes).
2. Captura la historia equivalente de Storybook: `npm run build-storybook`, sirve `storybook-static` y haz la captura con Playwright de `iframe.html?id=<story-id>`.
3. Compáralas con los criterios de "idéntico" de abajo y escribe en el PR una tabla con cada criterio: ✅ o ❌ y qué difiere.
4. Si algo difiere: o se arregla el código, o se arregla Figma, o se le pregunta a Cecilia. Nunca se sube "casi igual" sin decirlo.
5. Si el cambio es en Figma, actualiza también el código, y al revés. Los dos lados cambian en el mismo PR.

### 2. Nada llega a `main` sin aprobación
- Todo cambio va en una rama y un pull request. **Claude no fusiona PRs en `main`**: los aprueba y fusiona Cecilia.
- El check de **Chromatic** debe estar en verde. Si hay cambios visuales, Chromatic los marca y el check falla hasta que Cecilia los acepta en chromatic.com.

### 3. Qué significa "idéntico"
Coinciden, variante por variante y estado por estado:
- **Color:** el mismo token. Nada de colores a mano: en código, clases como `bg-primary`; en Figma, variables.
- **Tamaño:** alto y ancho del componente, y tamaño de los iconos.
- **Espaciado:** padding interior y separación entre elementos.
- **Radio:** 0, salvo los elementos circulares.
- **Tipografía:** familia, peso, tamaño e interlineado (estilos de texto `heading/*`, `body/*`, `code/*`).
- **Bordes y sombras:** grosor, color y si existen o no.
- **Variantes y estados:** los mismos nombres y la misma cantidad en Figma (propiedades) y en código (props): default, hover, focus, disabled, error…
- **Contenido:** el texto de ejemplo puede variar (Storybook usa casos reales); lo que debe coincidir es la estructura: qué partes tiene el componente y en qué orden.

No se exige el píxel exacto, porque el navegador y Figma dibujan el texto de forma algo distinta (antialiasing, ±1px).
