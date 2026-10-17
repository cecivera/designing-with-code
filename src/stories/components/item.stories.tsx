import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { BadgeCheckIcon, ChevronRightIcon, PackageIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"

const meta = {
  title: "Datos/Item",
  component: Item,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** fila flexible con media (icono/avatar/imagen), título, descripción y acciones. Es la base para listas.

**Cuándo usarlo:** listas de ajustes, notificaciones, miembros de un equipo, resultados. Para datos tabulares comparables usa **Table**.

**Archivo:** \`src/components/ui/item.tsx\` → \`Item\` (props \`variant\`, \`size\`, \`render\`), \`ItemMedia\` (prop \`variant\`), \`ItemContent\`, \`ItemTitle\`, \`ItemDescription\`, \`ItemActions\`, \`ItemGroup\`, \`ItemSeparator\`, \`ItemHeader\`, \`ItemFooter\`.
`,
      },
    },
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "outline", "muted"] },
    size: { control: "inline-radio", options: ["default", "sm", "xs"] },
  },
  args: { variant: "outline", size: "default" },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Item {...args}>
      <ItemContent>
        <ItemTitle>Pedido PED-002</ItemTitle>
        <ItemDescription>Runners Madrid · 830,00 €</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">Ver</Button>
      </ItemActions>
    </Item>
  ),
}

export const ConIcono: Story = {
  name: "Con icono",
  render: (args) => (
    <Item {...args}>
      <ItemMedia variant="icon">
        <PackageIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Nuevo envío</ItemTitle>
        <ItemDescription>Tu pedido sale hoy del almacén.</ItemDescription>
      </ItemContent>
    </Item>
  ),
}

export const ComoEnlace: Story = {
  name: "Como enlace",
  args: { size: "sm" },
  render: (args) => (
    <Item {...args} render={<a href="#" />}>
      <ItemMedia>
        <BadgeCheckIcon className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Tu perfil está verificado</ItemTitle>
      </ItemContent>
      <ItemActions>
        <ChevronRightIcon className="size-4" />
      </ItemActions>
    </Item>
  ),
}

export const Variantes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      {(["default", "outline", "muted"] as const).map((v) => (
        <Item key={v} variant={v}>
          <ItemContent>
            <ItemTitle>Variante {v}</ItemTitle>
            <ItemDescription>Descripción del item.</ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </div>
  ),
}

export const Lista: Story = {
  name: "Lista (ItemGroup)",
  render: () => (
    <ItemGroup>
      {["Ana López", "Bruno Díaz", "Carla Ruiz"].map((n, i) => (
        <div key={n}>
          {i > 0 && <ItemSeparator />}
          <Item>
            <ItemMedia>
              <Avatar>
                <AvatarFallback>{n.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{n}</ItemTitle>
              <ItemDescription>Account manager</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="ghost" size="sm">Contactar</Button>
            </ItemActions>
          </Item>
        </div>
      ))}
    </ItemGroup>
  ),
}
