import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { ArrowRightIcon, Loader2Icon, MailIcon, PlusIcon } from "lucide-react"
import { fn } from "storybook/test"

import { Button } from "@/components/ui/button"

const meta = {
  title: "Acciones/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** el botón principal del sistema. Dispara una acción (enviar, guardar, abrir un diálogo).

**Cuándo usarlo:** para acciones. Si el elemento lleva a otra página, usa un enlace (puedes darle aspecto de botón con \`render={<a href="…" />}\` o la variante \`link\`).
Usa una sola variante \`default\` por vista para la acción principal; \`outline\`/\`secondary\`/\`ghost\` para acciones secundarias y \`destructive\` para acciones irreversibles.

**Archivo:** \`src/components/ui/button.tsx\` → componente \`Button\` (props \`variant\` y \`size\`). Es el archivo a mapear en Figma Code Connect.
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "secondary", "ghost", "destructive", "link"],
      description: "Estilo visual del botón.",
      table: { defaultValue: { summary: "default" } },
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
      description: "Tamaño. Los tamaños `icon*` son cuadrados, para botones solo con icono.",
      table: { defaultValue: { summary: "default" } },
    },
    disabled: { control: "boolean", description: "Desactiva el botón." },
    children: { control: "text", description: "Contenido (texto y/o icono)." },
  },
  args: {
    children: "Botón",
    variant: "default",
    size: "default",
    disabled: false,
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Outline: Story = { args: { variant: "outline" } }
export const Secondary: Story = { args: { variant: "secondary" } }
export const Ghost: Story = { args: { variant: "ghost" } }
export const Destructive: Story = { args: { variant: "destructive", children: "Eliminar" } }
export const Link: Story = { args: { variant: "link", children: "Ver más" } }

export const TodasLasVariantes: Story = {
  name: "Todas las variantes",
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Button {...args} variant="default">Default</Button>
      <Button {...args} variant="outline">Outline</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="destructive">Destructive</Button>
      <Button {...args} variant="link">Link</Button>
    </div>
  ),
}

export const Tamanos: Story = {
  name: "Tamaños",
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Button {...args} size="xs">Extra small</Button>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="default">Default</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
}

export const ConIcono: Story = {
  name: "Con icono",
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Button {...args}>
        <MailIcon data-icon="inline-start" />
        Enviar correo
      </Button>
      <Button {...args} variant="outline">
        Continuar
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  ),
}

export const SoloIcono: Story = {
  name: "Solo icono",
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Button {...args} size="icon-xs" aria-label="Añadir"><PlusIcon /></Button>
      <Button {...args} size="icon-sm" aria-label="Añadir"><PlusIcon /></Button>
      <Button {...args} size="icon" aria-label="Añadir"><PlusIcon /></Button>
      <Button {...args} size="icon-lg" aria-label="Añadir"><PlusIcon /></Button>
    </div>
  ),
}

export const Cargando: Story = {
  args: { disabled: true },
  render: (args) => (
    <Button {...args}>
      <Loader2Icon className="animate-spin" data-icon="inline-start" />
      Guardando…
    </Button>
  ),
}

export const Deshabilitado: Story = { args: { disabled: true } }
