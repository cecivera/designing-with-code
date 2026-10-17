# Guía rápida: Evergreen + shadcn/ui + Figma MCP

Evergreen no es un DS propio. Es un starter con **shadcn/ui** como sistema de diseño, más skills de Claude Code (`/ev-...`) para diseñar, prototipar y conectar con Figma.

## 0. Antes de empezar

- Node 20 o superior.
- Claude Code instalado.
- Una cuenta de Figma con acceso al archivo que quieras usar.
- El repo viene con `origin` apuntando al repo original (`bobbydotdesign/evergreen`). **No hagas push ahí.** Mira el paso 6 para pasarlo a tu GitHub.

## 1. Arrancar el proyecto

```bash
npm install
npm run dev
```

Se abre en `http://localhost:3000`. El dashboard de Evergreen vive en `/ev`, separado de tu app (`src/app/page.tsx`, en blanco).

Nota: `npm install` avisa de vulnerabilidades en dependencias. Para prototipar no bloquea nada. No uses `npm audit fix --force` porque puede romper versiones. Revísalo con `npm audit` antes de publicar.

## 2. Conectar Figma MCP

En una terminal, dentro del proyecto:

```bash
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

Luego abre Claude Code y ejecuta `/mcp`, elige `figma` y autentica con tu cuenta. Si el comando o la URL han cambiado, la fuente de verdad es la documentación oficial del servidor MCP de Figma.

Comprobación: pídele "usa Figma para decirme quién soy" (la herramienta `whoami`). Si responde con tu usuario, está conectado.

## 3. Quitar el branding de Evergreen

El starter trae decisiones de marca propias que no son tuyas:

- Solo modo oscuro
- Acento chartreuse `#EAFC4E`
- Radio 0 en componentes
- Estilos en `src/app/evergreen-brand.css`

Ejecuta `/ev-designsystem setup` y define tus colores, tipografía y radio. Eso actualiza `src/app/globals.css` (bloques `:root` y `.dark`), la sección Design System de `CLAUDE.md` y `docs/design-system.md`.

## 4. Traer tokens y diseños desde Figma

Todo con la skill `/ev-figma`:

| Comando | Qué hace |
|---|---|
| `/ev-figma variables` | Compara las variables de Figma con las CSS de `globals.css` y te enseña el diff |
| `/ev-figma inspect <url>` | Lee un frame (layout, color, tipografía) y lo mapea a tus tokens |
| `/ev-figma build <url>` | Construye el componente o página en código usando shadcn y tus tokens |
| `/ev-figma sync` | Sugiere y envía mapeos de Code Connect a Figma |

La URL es el link de un frame de Figma (con `node-id`). Orden recomendado: primero `variables`, después `inspect`, después `build`.

## 5. Mapear componentes (Code Connect)

Esto hace que la IA use tus componentes reales y no se invente otros:

1. Ten los componentes de Figma publicados en una librería (el kit de shadcn/ui para Figma sirve de base).
2. Corre `/ev-figma sync`.
3. Revisa las sugerencias de mapeo (por ejemplo, `Button` de Figma con `src/components/ui/button.tsx`).
4. Confirma y se envían a Figma.

Code Connect depende del plan de Figma. Si tu organización no lo tiene activo, `inspect` y `build` siguen funcionando.

## 6. Pasarlo a tu GitHub

1. Crea un repo vacío en tu cuenta (sin README).
2. Dentro del proyecto:

```bash
git remote set-url origin https://github.com/<tu-usuario>/<tu-repo>.git
git push -u origin main
```

3. Opcional: borra el historial del starter con `rm -rf .git && git init` antes de crear tu primer commit.

## Flujo sugerido

1. `/ev-prd` para definir alcance y usuarios
2. `/ev-wireframe` para probar pantallas rápido
3. `/ev-designsystem` para fijar tokens
4. `/ev-figma` para traer o enviar diseño
5. `/ev-design` para pulir

## Skills disponibles

`/ev-prd`, `/ev-research`, `/ev-design`, `/ev-designsystem`, `/ev-wireframe`, `/ev-figma`, `/ev-roadmap`, `/ev-ship`, `/ev-update`, `/ev-help`.

## 7. Ver los componentes en Storybook

El repo incluye **Storybook**: un catálogo donde ves cada componente de `src/components/ui/` funcionando, con su documentación en español, sus variantes y controles para probarlas.

```bash
npm install
npm run storybook
```

Se abre en `http://localhost:6006`. Qué encontrarás:

- **Introducción**: cómo está montado el sistema y cómo se conecta con Figma.
- **Fundamentos**: los tokens de `globals.css` (colores, radio y tipografía Geist) como muestras visuales.
- **Componentes** agrupados por función (Acciones, Formularios, Navegación, Datos, Feedback, Overlays, Layout). Cada uno tiene una página **Docs** con qué es, cuándo usarlo, el archivo de código al que corresponde (el que se mapea con Code Connect) y ejemplos de todos sus estados.

Detalles:

- Storybook está configurado **solo en modo claro** (no cambia nada de la app).
- Configuración en `.storybook/`; historias en `src/stories/components/*.stories.tsx`; páginas de documentación en `src/stories/docs/*.mdx`.
- Para publicarlo como web estática: `npm run build-storybook` genera la carpeta `storybook-static/` (ignorada por git), que puedes subir a Vercel, Netlify o GitHub Pages.
- Si añades un componente nuevo con `npx shadcn@latest add <nombre>`, crea también su `<nombre>.stories.tsx` copiando la estructura de uno existente.
