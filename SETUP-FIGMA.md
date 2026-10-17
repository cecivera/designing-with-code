# Quick guide: Evergreen + shadcn/ui + Figma MCP

Evergreen isn't its own design system. It's a starter that uses **shadcn/ui** as the design system, plus Claude Code skills (`/ev-...`) to design, prototype and connect with Figma.

## 0. Before you start

- Node 20 or later.
- Claude Code installed.
- A Figma account with access to the file you want to use.
- The repo comes with `origin` pointing to the original repo (`bobbydotdesign/evergreen`). **Don't push there.** See step 6 to move it to your GitHub.

## 1. Run the project

```bash
npm install
npm run dev
```

It opens at `http://localhost:3000`. The Evergreen dashboard lives at `/ev`, separate from your app (`src/app/page.tsx`, blank).

Note: `npm install` warns about vulnerabilities in dependencies. It doesn't block anything for prototyping. Don't use `npm audit fix --force`, because it can break versions. Review it with `npm audit` before publishing.

## 2. Connect Figma MCP

In a terminal, inside the project:

```bash
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

Then open Claude Code, run `/mcp`, choose `figma` and authenticate with your account. If the command or URL has changed, the source of truth is the official Figma MCP server documentation.

Check: ask it "use Figma to tell me who I am" (the `whoami` tool). If it answers with your user, it's connected.

## 3. Remove the Evergreen branding

The starter comes with its own brand decisions that aren't yours:

- Dark mode only
- Chartreuse accent `#EAFC4E`
- Radius 0 on components
- Styles in `src/app/evergreen-brand.css`

Run `/ev-designsystem setup` and define your colors, typography and radius. That updates `src/app/globals.css` (`:root` and `.dark` blocks), the Design System section of `CLAUDE.md` and `docs/design-system.md`.

## 4. Bring tokens and designs from Figma

All with the `/ev-figma` skill:

| Command | What it does |
|---|---|
| `/ev-figma variables` | Compares Figma variables with the CSS ones in `globals.css` and shows you the diff |
| `/ev-figma inspect <url>` | Reads a frame (layout, color, typography) and maps it to your tokens |
| `/ev-figma build <url>` | Builds the component or page in code using shadcn and your tokens |
| `/ev-figma sync` | Suggests and sends Code Connect mappings to Figma |

The URL is a link to a Figma frame (with `node-id`). Recommended order: first `variables`, then `inspect`, then `build`.

## 5. Map components (Code Connect)

This makes the AI use your real components instead of inventing new ones:

1. Have your Figma components published in a library (the shadcn/ui kit for Figma works as a base).
2. Run `/ev-figma sync`.
3. Review the mapping suggestions (for example, Figma's `Button` with `src/components/ui/button.tsx`).
4. Confirm, and they're sent to Figma.

Code Connect depends on your Figma plan. If your organization doesn't have it enabled, `inspect` and `build` still work.

## 6. Move it to your GitHub

1. Create an empty repo in your account (no README).
2. Inside the project:

```bash
git remote set-url origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

3. Optional: delete the starter's history with `rm -rf .git && git init` before making your first commit.

## Suggested workflow

1. `/ev-prd` to define scope and users
2. `/ev-wireframe` to quickly try out screens
3. `/ev-designsystem` to set tokens
4. `/ev-figma` to bring in or send designs
5. `/ev-design` to polish

## Available skills

`/ev-prd`, `/ev-research`, `/ev-design`, `/ev-designsystem`, `/ev-wireframe`, `/ev-figma`, `/ev-roadmap`, `/ev-ship`, `/ev-update`, `/ev-help`.

## 7. View the components in Storybook

The repo includes **Storybook**: a catalog where you can see every component in `src/components/ui/` working, with its documentation, its variants and controls to try them out.

```bash
npm install
npm run storybook
```

It opens at `http://localhost:6006`. What you'll find:

- **Introduction**: how the system is put together and how it connects with Figma.
- **Foundations**: the tokens in `globals.css` (colors, radius and Geist typography) as visual swatches.
- **Components** grouped by purpose (Actions, Forms, Navigation, Data, Feedback, Overlays, Layout, Utilities). Each one has a **Docs** page with what it is, when to use it, the code file it maps to (the one mapped with Code Connect) and examples of all its states.

Details:

- Storybook is configured in **light mode only** (it doesn't change anything in the app).
- Configuration in `.storybook/`; stories in `src/stories/components/*.stories.tsx`; documentation pages in `src/stories/docs/*.mdx`.
- To publish it as a static site: `npm run build-storybook` generates the `storybook-static/` folder (ignored by git), which you can upload to Vercel, Netlify or GitHub Pages.
- If you add a new component with `npx shadcn@latest add <name>`, also create its `<name>.stories.tsx` by copying the structure of an existing one.

## 8. Publish Storybook to Chromatic

Every push to GitHub publishes Storybook to Chromatic with the `.github/workflows/chromatic.yml` Action.

1. In Chromatic: **Manage → Configure**, copy the project token (`chpt_…`).
2. In GitHub: **Settings → Secrets and variables → Actions → New repository secret**, named `CHROMATIC_PROJECT_TOKEN` with the token as its value.
3. Push. The link to the published Storybook appears in the Action's output and in your Chromatic project.

Never store the token in the code: the repo is public.

To publish manually from your computer:

```bash
CHROMATIC_PROJECT_TOKEN=chpt_… npm run chromatic
```
