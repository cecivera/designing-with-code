import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { BoldIcon, BookmarkIcon, ItalicIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

const meta = {
  title: "Acciones/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** un botón con dos estados (activado / desactivado), como "negrita" en un editor o "guardar en favoritos".

**Cuándo usarlo:** para activar una opción que se ve aplicada al momento. Para ajustes de configuración que se guardan, usa **Switch**; para elegir entre varias opciones, **ToggleGroup**.

**Archivo:** \`src/components/ui/toggle.tsx\` → \`Toggle\` (props \`variant\`, \`size\`, \`pressed\` / \`defaultPressed\`).
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "outline"],
      table: { defaultValue: { summary: "default" } },
    },
    size: {
      control: "inline-radio",
      options: ["sm", "default", "lg"],
      table: { defaultValue: { summary: "default" } },
    },
    defaultPressed: { control: "boolean", description: "Estado inicial." },
    disabled: { control: "boolean" },
  },
  args: { variant: "default", size: "default", "aria-label": "Negrita" },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Toggle {...args}>
      <BoldIcon />
    </Toggle>
  ),
}

export const Outline: Story = {
  args: { variant: "outline", "aria-label": "Cursiva" },
  render: (args) => (
    <Toggle {...args}>
      <ItalicIcon />
    </Toggle>
  ),
}

export const ConTexto: Story = {
  name: "Con texto",
  args: { variant: "outline", "aria-label": "Guardar" },
  render: (args) => (
    <Toggle {...args}>
      <BookmarkIcon data-icon="inline-start" />
      Guardar
    </Toggle>
  ),
}

export const Activado: Story = {
  args: { defaultPressed: true },
  render: Default.render,
}

export const Tamanos: Story = {
  name: "Tamaños",
  args: { variant: "outline" },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Toggle {...args} size="sm"><BoldIcon /></Toggle>
      <Toggle {...args} size="default"><BoldIcon /></Toggle>
      <Toggle {...args} size="lg"><BoldIcon /></Toggle>
    </div>
  ),
}

export const Deshabilitado: Story = {
  args: { disabled: true },
  render: Default.render,
}
