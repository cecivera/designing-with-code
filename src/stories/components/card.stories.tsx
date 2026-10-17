import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Layout/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** contenedor con fondo y borde que agrupa información relacionada (cabecera, contenido y pie).

**Cuándo usarlo:** para KPIs de un dashboard, fichas de producto, formularios cortos o bloques de ajustes. No anides tarjetas dentro de tarjetas.

**Archivo:** \`src/components/ui/card.tsx\` → \`Card\` (prop \`size\`), \`CardHeader\`, \`CardTitle\`, \`CardDescription\`, \`CardAction\`, \`CardContent\`, \`CardFooter\`.
`,
      },
    },
  },
  argTypes: {
    size: { control: "inline-radio", options: ["default", "sm"], table: { defaultValue: { summary: "default" } } },
  },
  args: { size: "default" },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Ventas de octubre</CardTitle>
        <CardDescription>Canal wholesale · España</CardDescription>
        <CardAction>
          <Badge variant="secondary">+12%</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold tabular-nums">48.250 €</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">Ver informe</Button>
      </CardFooter>
    </Card>
  ),
}

export const Pequena: Story = { name: "Pequeña (sm)", args: { size: "sm" }, render: Default.render }

export const ConFormulario: Story = {
  name: "Con formulario",
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Inicia sesión</CardTitle>
        <CardDescription>Accede al portal de clientes.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="c-email">Email</Label>
          <Input id="c-email" type="email" placeholder="nombre@empresa.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="c-pass">Contraseña</Label>
          <Input id="c-pass" type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">Entrar</Button>
        <Button variant="link" className="w-full">¿Olvidaste tu contraseña?</Button>
      </CardFooter>
    </Card>
  ),
}

export const ConImagen: Story = {
  name: "Con imagen",
  render: (args) => (
    <Card {...args} className="w-72">
      {/* eslint-disable-next-line @next/next/no-img-element -- imagen de ejemplo inline */}
      <img
        src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='180'><rect width='100%25' height='100%25' fill='%23e5e5e5'/></svg>"
        alt="Imagen de producto"
        className="aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardTitle>Samba OG</CardTitle>
        <CardDescription>Calzado · Originals</CardDescription>
      </CardHeader>
    </Card>
  ),
}
