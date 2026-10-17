import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"

const meta = {
  title: "Formularios/NativeSelect",
  component: NativeSelect,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** el \`<select>\` nativo del navegador con el estilo del sistema.

**Cuándo usarlo:** en formularios sencillos y sobre todo en móvil, donde el selector nativo del sistema operativo es más cómodo. Para listas con diseño propio usa **Select**; con búsqueda, **Combobox**.

**Archivo:** \`src/components/ui/native-select.tsx\` → \`NativeSelect\` (prop \`size\`), \`NativeSelectOption\`, \`NativeSelectOptGroup\`.
`,
      },
    },
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "default"] },
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean" },
  },
  args: { size: "default" },
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <NativeSelect {...args} defaultValue="">
      <NativeSelectOption value="" disabled>
        Elige un país
      </NativeSelectOption>
      <NativeSelectOption value="es">España</NativeSelectOption>
      <NativeSelectOption value="de">Alemania</NativeSelectOption>
      <NativeSelectOption value="fr">Francia</NativeSelectOption>
    </NativeSelect>
  ),
}

export const ConGrupos: Story = {
  name: "Con grupos",
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOptGroup label="Europa">
        <NativeSelectOption value="es">España</NativeSelectOption>
        <NativeSelectOption value="de">Alemania</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="América">
        <NativeSelectOption value="mx">México</NativeSelectOption>
        <NativeSelectOption value="us">Estados Unidos</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
}

export const Pequeno: Story = { name: "Pequeño (sm)", args: { size: "sm" }, render: Default.render }

export const ConError: Story = { name: "Con error", args: { "aria-invalid": true }, render: Default.render }

export const Deshabilitado: Story = { args: { disabled: true }, render: Default.render }
