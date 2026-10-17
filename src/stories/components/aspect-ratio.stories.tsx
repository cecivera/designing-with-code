import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { AspectRatio } from "@/components/ui/aspect-ratio"

const meta = {
  title: "Layout/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** contenedor que mantiene una proporción fija (16:9, 1:1…) sea cual sea el ancho.

**Cuándo usarlo:** imágenes de producto, vídeos o mapas, para que no "salten" al cargar y mantengan la forma en todos los tamaños de pantalla.

**Archivo:** \`src/components/ui/aspect-ratio.tsx\` → \`AspectRatio\` (prop obligatoria \`ratio\`, p. ej. \`16 / 9\`).
`,
      },
    },
  },
  argTypes: {
    ratio: {
      control: "select",
      options: [16 / 9, 4 / 3, 1, 3 / 4, 9 / 16],
      labels: { [16 / 9]: "16:9", [4 / 3]: "4:3", 1: "1:1", [3 / 4]: "3:4", [9 / 16]: "9:16" },
      description: "Proporción ancho / alto.",
    },
  },
  args: { ratio: 16 / 9 },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <AspectRatio {...args} className="rounded-lg bg-muted">
      <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
        {args.ratio === 16 / 9 ? "16:9" : args.ratio.toFixed(2)}
      </div>
    </AspectRatio>
  ),
}

export const Cuadrado: Story = { name: "Cuadrado (1:1)", args: { ratio: 1 }, render: Default.render }

export const Vertical: Story = { name: "Vertical (3:4)", args: { ratio: 3 / 4 }, render: Default.render }
