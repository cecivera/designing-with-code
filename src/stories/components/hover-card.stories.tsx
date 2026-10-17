import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

const meta = {
  title: "Overlays/HoverCard",
  component: HoverCardContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** tarjeta de vista previa que aparece al pasar el ratón por un enlace.

**Cuándo usarlo:** para previsualizar el contenido detrás de un enlace (perfil de usuario, ficha de producto). Solo funciona con ratón: no pongas ahí información imprescindible. Para un texto corto, **Tooltip**.

**Archivo:** \`src/components/ui/hover-card.tsx\` → \`HoverCard\`, \`HoverCardTrigger\`, \`HoverCardContent\` (props \`side\`, \`align\`).
`,
      },
    },
  },
  argTypes: {
    side: { control: "select", options: ["top", "right", "bottom", "left"] },
    align: { control: "inline-radio", options: ["start", "center", "end"] },
  },
  args: { side: "bottom", align: "center" },
  decorators: [(Story) => <div className="flex min-h-56 items-start justify-center"><Story /></div>],
} satisfies Meta<typeof HoverCardContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <HoverCard>
      <HoverCardTrigger render={<Button variant="link" />}>@evergreen</HoverCardTrigger>
      <HoverCardContent {...args} className="w-72">
        <div className="flex gap-3">
          <Avatar>
            <AvatarFallback>EV</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <h4 className="text-sm font-semibold">Evergreen</h4>
            <p className="text-sm">Starter de Next.js + shadcn/ui para diseñar con código.</p>
            <span className="text-xs text-muted-foreground">Desde octubre 2026</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
