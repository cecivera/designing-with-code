import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { ProductTag } from "@/components/product-tag"

const meta = {
  title: "Propios/ProductTag",
  component: ProductTag,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** etiqueta de estado de un producto.

| Tipo | Significado |
|---|---|
| \`new\` | Novedad de temporada |
| \`co\` | Carry over: continúa de la temporada anterior |
| \`sale\` | Rebajado |
| \`bestseller\` | Más vendido |
| \`low-stock\` | Quedan pocas unidades |
| \`sold-out\` | Agotado |

**Archivo:** \`src/components/product-tag.tsx\` → \`ProductTag\` (prop \`type\`).
`,
      },
    },
  },
  argTypes: {
    type: { control: "select", options: ["new", "co", "sale", "bestseller", "low-stock", "sold-out"] },
  },
  args: { type: "new" },
} satisfies Meta<typeof ProductTag>

export default meta
type Story = StoryObj<typeof meta>

export const New: Story = {}

export const Todas: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <ProductTag type="new" />
      <ProductTag type="co" />
      <ProductTag type="sale" />
      <ProductTag type="bestseller" />
      <ProductTag type="low-stock" />
      <ProductTag type="sold-out" />
    </div>
  ),
}
