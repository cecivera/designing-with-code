import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const tallas = [
  { label: "Elige una talla", value: null },
  { label: "XS", value: "xs" },
  { label: "S", value: "s" },
  { label: "M", value: "m" },
  { label: "L", value: "l" },
  { label: "XL", value: "xl" },
]

const meta = {
  title: "Formularios/Select",
  component: SelectTrigger,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** desplegable para elegir una opción de una lista, con estilo propio del sistema.

**Cuándo usarlo:** con más de 5 opciones excluyentes o cuando hay poco espacio. Si el usuario necesita buscar/escribir, usa **Combobox**; si quieres el selector nativo del navegador (mejor en móvil), **NativeSelect**.

**Archivo:** \`src/components/ui/select.tsx\` → \`Select\`, \`SelectTrigger\` (prop \`size\`), \`SelectValue\`, \`SelectContent\`, \`SelectItem\`, \`SelectGroup\`, \`SelectLabel\`, \`SelectSeparator\`.
`,
      },
    },
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "default"], description: "Tamaño del trigger." },
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean" },
  },
  args: { size: "default" },
} satisfies Meta<typeof SelectTrigger>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Select items={tallas}>
      <SelectTrigger {...args} className="w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {tallas.map((t) => (
            <SelectItem key={t.label} value={t.value}>
              {t.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Pequeno: Story = { name: "Pequeño (sm)", args: { size: "sm" }, render: Default.render }

export const ConGrupos: Story = {
  name: "Con grupos",
  render: (args) => (
    <Select>
      <SelectTrigger {...args} className="w-56">
        <SelectValue placeholder="Elige una categoría" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Calzado</SelectLabel>
          <SelectItem value="running">Running</SelectItem>
          <SelectItem value="futbol">Fútbol</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Textil</SelectLabel>
          <SelectItem value="camisetas">Camisetas</SelectItem>
          <SelectItem value="sudaderas">Sudaderas</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const ConError: Story = { name: "Con error", args: { "aria-invalid": true }, render: Default.render }

export const Deshabilitado: Story = { args: { disabled: true }, render: Default.render }
