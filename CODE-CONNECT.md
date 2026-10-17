# Code Connect: Figma ↔ código

Cada componente del archivo de Figma **[Evergreen DS](https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS)** tiene una plantilla de [Code Connect](https://developers.figma.com/docs/code-connect/) en `src/figma/`. La plantilla le dice a Figma Dev Mode qué código mostrar cuando alguien inspecciona ese componente.

## Qué hay

- **57 plantillas de componente** en `src/figma/*.figma.ts`, una por cada componente de `src/components/ui/`.
- **24 plantillas de iconos** en `src/figma/icons/`, que mapean cada icono de Figma a su import de `lucide-react`.
- Cada plantilla lee las **propiedades del componente en Figma** (variantes, textos, booleanos, iconos intercambiables) y genera el JSX real con las props del código.

  Por ejemplo, el `Button` de Figma con `Variant=outline`, `Size=sm`, el icono visible y el texto "Guardar" genera:

  ```tsx
  <Button variant="outline" size="sm"><PlusIcon />Guardar</Button>
  ```

- Formato: plantillas *parserless* (`.figma.ts` con `figma.code`).

## Comandos

```bash
npm run figma:check     # valida y lee todas las plantillas (no publica nada)
npm run figma:publish   # las publica en Figma (necesita FIGMA_ACCESS_TOKEN)
```

## Estado

Las plantillas están completas y validadas: `figma:check` lee las 81. **Todavía no están publicadas**, porque publicar Code Connect requiere un plan de Figma Organization o Enterprise. En un equipo con ese plan se activan con un solo comando, `npm run figma:publish`.

Mientras tanto, la conexión Figma ↔ código funciona así:

- **Variables:** los colores, radios y espaciados de Figma tienen los mismos nombres que `src/app/globals.css`.
- **Enlace a GitHub:** cada componente de Figma lleva un enlace de documentación a su archivo en GitHub.
- **Storybook Connect:** muestra la historia publicada en Chromatic dentro de Figma.
- **Figma MCP:** permite a Claude Code leer un diseño y construirlo con estos mismos componentes.
