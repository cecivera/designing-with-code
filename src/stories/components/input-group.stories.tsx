import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { ArrowUpIcon, CopyIcon, EuroIcon, SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"

const meta = {
  title: "Formularios/InputGroup",
  component: InputGroupAddon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** un Input (o Textarea) con elementos añadidos dentro del mismo borde: iconos, texto (prefijos/sufijos), atajos de teclado o botones.

**Cuándo usarlo:** buscadores con icono, precios con "€", URLs con "https://", campos con botón copiar o un compositor de mensajes con botón enviar.

**Archivo:** \`src/components/ui/input-group.tsx\` → \`InputGroup\`, \`InputGroupAddon\` (prop \`align\`), \`InputGroupInput\`, \`InputGroupTextarea\`, \`InputGroupText\`, \`InputGroupButton\`.
`,
      },
    },
  },
  argTypes: {
    align: {
      control: "select",
      options: ["inline-start", "inline-end", "block-start", "block-end"],
      description: "Dónde se coloca el addon: delante, detrás, arriba o abajo.",
    },
  },
  args: { align: "inline-start" },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof InputGroupAddon>

export default meta
type Story = StoryObj<typeof meta>

export const ConIcono: Story = {
  name: "Con icono",
  render: (args) => (
    <InputGroup>
      <InputGroupInput placeholder="Buscar productos…" />
      <InputGroupAddon {...args}>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const PrefijoYSufijo: Story = {
  name: "Prefijo y sufijo",
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <EuroIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="0,00" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>EUR</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const ConBoton: Story = {
  name: "Con botón",
  render: () => (
    <InputGroup>
      <InputGroupInput readOnly defaultValue="https://evergreen.app/p/123" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs" aria-label="Copiar">
          <CopyIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const ConAtajo: Story = {
  name: "Con atajo de teclado",
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Buscar…" />
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const ConTextarea: Story = {
  name: "Con textarea (compositor)",
  render: () => (
    <InputGroup>
      <InputGroupTextarea placeholder="Escribe un mensaje…" />
      <InputGroupAddon align="block-end">
        <InputGroupText>0/280</InputGroupText>
        <InputGroupButton variant="default" size="icon-xs" className="ml-auto" aria-label="Enviar">
          <ArrowUpIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}
