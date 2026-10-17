import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const meta = {
  title: "Acciones/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** un conjunto de Toggles que funcionan juntos. Puede permitir una sola opción (alineación) o varias (negrita + cursiva).

**Cuándo usarlo:** para cambiar entre vistas o formatos con pocas opciones visibles a la vez. Con muchas opciones, usa **Select**; para navegar entre secciones, **Tabs**.

**Archivo:** \`src/components/ui/toggle-group.tsx\` → \`ToggleGroup\`, \`ToggleGroupItem\` (props \`variant\`, \`size\`, \`spacing\`, \`orientation\`, \`multiple\`).
`,
      },
    },
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "outline"] },
    size: { control: "inline-radio", options: ["sm", "default", "lg"] },
    spacing: {
      control: { type: "number", min: 0, max: 4 },
      description: "Separación entre items. `0` los une en un bloque.",
      table: { defaultValue: { summary: "2" } },
    },
    orientation: { control: "inline-radio", options: ["horizontal", "vertical"] },
    multiple: { control: "boolean", description: "Permite activar varias opciones." },
    disabled: { control: "boolean" },
  },
  args: { variant: "outline", size: "default", spacing: 2, orientation: "horizontal" },
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const SeleccionUnica: Story = {
  name: "Selección única",
  args: { defaultValue: ["left"] },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="left" aria-label="Alinear a la izquierda"><AlignLeftIcon /></ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Centrar"><AlignCenterIcon /></ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Alinear a la derecha"><AlignRightIcon /></ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Multiple: Story = {
  name: "Selección múltiple",
  args: { multiple: true, defaultValue: ["bold", "italic"] },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Negrita"><BoldIcon /></ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Cursiva"><ItalicIcon /></ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Subrayado"><UnderlineIcon /></ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Unidos: Story = {
  name: "Unidos (spacing 0)",
  args: { spacing: 0, defaultValue: ["semana"] },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="dia">Día</ToggleGroupItem>
      <ToggleGroupItem value="semana">Semana</ToggleGroupItem>
      <ToggleGroupItem value="mes">Mes</ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Vertical: Story = {
  args: { orientation: "vertical", defaultValue: ["center"] },
  render: SeleccionUnica.render,
}

export const Deshabilitado: Story = {
  args: { disabled: true, defaultValue: ["left"] },
  render: SeleccionUnica.render,
}
