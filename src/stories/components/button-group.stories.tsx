import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  ArchiveIcon,
  ArrowLeftIcon,
  ChevronDownIcon,
  ClockIcon,
  SearchIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"

const meta = {
  title: "Acciones/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** agrupa varios botones relacionados en un solo bloque visual (bordes unidos).

**Cuándo usarlo:** para acciones hermanas (Archivar / Posponer / Más), botones partidos ("split button") o un input con botón pegado. Si las opciones son excluyentes y tienen estado (on/off), usa **ToggleGroup**.

**Archivo:** \`src/components/ui/button-group.tsx\` → \`ButtonGroup\`, \`ButtonGroupSeparator\`, \`ButtonGroupText\` (prop \`orientation\`).
`,
      },
    },
  },
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
      description: "Dirección del grupo.",
      table: { defaultValue: { summary: "horizontal" } },
    },
  },
  args: { orientation: "horizontal" },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Archivar</Button>
      <Button variant="outline">Posponer</Button>
      <Button variant="outline">Más</Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: Default.render,
}

export const ConIconos: Story = {
  name: "Con iconos",
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline" size="icon" aria-label="Volver">
        <ArrowLeftIcon />
      </Button>
      <Button variant="outline">
        <ArchiveIcon data-icon="inline-start" />
        Archivar
      </Button>
      <Button variant="outline">
        <ClockIcon data-icon="inline-start" />
        Posponer
      </Button>
    </ButtonGroup>
  ),
}

export const BotonPartido: Story = {
  name: "Botón partido (split)",
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Publicar</Button>
      <ButtonGroupSeparator />
      <Button size="icon" aria-label="Más opciones">
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  ),
}

export const ConInputYTexto: Story = {
  name: "Con input y texto",
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroupText>https://</ButtonGroupText>
      <Input placeholder="mi-tienda.com" className="w-48" />
      <Button variant="outline" size="icon" aria-label="Buscar">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  ),
}
