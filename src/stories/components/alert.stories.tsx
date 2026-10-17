import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { AlertCircleIcon, CheckCircle2Icon, InfoIcon } from "lucide-react"

import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

const meta = {
  title: "Feedback/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** mensaje destacado dentro de la página para informar de algo importante (éxito, aviso, error).

**Cuándo usarlo:** para mensajes persistentes ligados a una sección ("Tu catálogo tiene 3 productos sin precio"). Para avisos efímeros usa **Sonner/Toast**; para pedir confirmación, **AlertDialog**.

**Archivo:** \`src/components/ui/alert.tsx\` → \`Alert\` (prop \`variant\`), \`AlertTitle\`, \`AlertDescription\`, \`AlertAction\`.
`,
      },
    },
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "destructive"], table: { defaultValue: { summary: "default" } } },
  },
  args: { variant: "default" },
  decorators: [(Story) => <div className="w-[480px]"><Story /></div>],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <CheckCircle2Icon />
      <AlertTitle>Pedido enviado</AlertTitle>
      <AlertDescription>Recibirás el número de seguimiento por email.</AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  args: { variant: "destructive" },
  render: (args) => (
    <Alert {...args}>
      <AlertCircleIcon />
      <AlertTitle>No se pudo procesar el pago</AlertTitle>
      <AlertDescription>Revisa los datos de la tarjeta e inténtalo de nuevo.</AlertDescription>
    </Alert>
  ),
}

export const SoloTitulo: Story = {
  name: "Solo título",
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>Los cambios se guardan automáticamente.</AlertTitle>
    </Alert>
  ),
}

export const ConAccion: Story = {
  name: "Con acción",
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>Nueva versión del catálogo</AlertTitle>
      <AlertDescription>Hay 24 productos nuevos para la temporada SS27.</AlertDescription>
      <AlertAction>
        <Button size="xs" variant="outline">Ver</Button>
      </AlertAction>
    </Alert>
  ),
}
