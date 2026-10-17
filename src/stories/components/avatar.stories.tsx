import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"

const meta = {
  title: "Datos/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** imagen circular que representa a una persona o entidad, con iniciales de respaldo si la imagen no carga.

**Cuándo usarlo:** junto a nombres de usuario, en comentarios, asignaciones o listas de equipo. Usa \`AvatarGroup\` para mostrar varias personas.

**Archivo:** \`src/components/ui/avatar.tsx\` → \`Avatar\` (prop \`size\`), \`AvatarImage\`, \`AvatarFallback\`, \`AvatarBadge\`, \`AvatarGroup\`, \`AvatarGroupCount\`.
`,
      },
    },
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "default", "lg"], table: { defaultValue: { summary: "default" } } },
  },
  args: { size: "default" },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}

export const SoloIniciales: Story = {
  name: "Solo iniciales (fallback)",
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>CV</AvatarFallback>
    </Avatar>
  ),
}

export const Tamanos: Story = {
  name: "Tamaños",
  render: () => (
    <div className="flex items-center gap-3">
      {(["sm", "default", "lg"] as const).map((s) => (
        <Avatar key={s} size={s}>
          <AvatarFallback>CV</AvatarFallback>
        </Avatar>
      ))}
    </div>
  ),
}

export const ConEstado: Story = {
  name: "Con indicador (badge)",
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>CV</AvatarFallback>
      <AvatarBadge className="bg-green-600" />
    </Avatar>
  ),
}

export const Grupo: Story = {
  render: (args) => (
    <AvatarGroup>
      {["AB", "CD", "EF"].map((i) => (
        <Avatar key={i} {...args}>
          <AvatarFallback>{i}</AvatarFallback>
        </Avatar>
      ))}
      <AvatarGroupCount>+4</AvatarGroupCount>
    </AvatarGroup>
  ),
}
