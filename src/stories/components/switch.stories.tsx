import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const meta = {
  title: "Formularios/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** interruptor on/off.

**Cuándo usarlo:** para ajustes que se aplican al momento (activar notificaciones, modo avión). Si el valor se envía con un formulario, suele ser mejor **Checkbox**.

**Archivo:** \`src/components/ui/switch.tsx\` → \`Switch\` (props \`size\`, \`checked\` / \`defaultChecked\`, \`disabled\`).
`,
      },
    },
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "default"], table: { defaultValue: { summary: "default" } } },
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: { size: "default", defaultChecked: false, "aria-label": "Interruptor" },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Activado: Story = { args: { defaultChecked: true } }

export const Pequeno: Story = { name: "Pequeño (sm)", args: { size: "sm" } }

export const ConLabel: Story = {
  name: "Con label",
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch {...args} id="notificaciones" />
      <Label htmlFor="notificaciones">Notificaciones de pedidos</Label>
    </div>
  ),
}

export const Deshabilitado: Story = { args: { disabled: true, defaultChecked: true } }
