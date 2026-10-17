import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { ProductCard } from "@/components/product-card"

const colorsSix = [
  { name: "Navy", value: "#1a2650" },
  { name: "Crudo", value: "#ebe8e0" },
  { name: "Burdeos", value: "#8c1a1f" },
  { name: "Verde bosque", value: "#405940" },
  { name: "Negro", value: "#0a0a0a" },
  { name: "Gris", value: "#9ca3af" },
]

const meta = {
  title: "Propios/ProductCard",
  component: ProductCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** tarjeta de producto con foto, hasta 2 etiquetas, nombre, descripción corta (máx. 2 líneas) y precio, con precio anterior tachado opcional.

**Cuándo usarlo:** catálogos, resultados de búsqueda, carruseles de producto y listas de favoritos.

**Archivo:** \`src/components/product-card.tsx\` → \`ProductCard\` (props \`name\`, \`description\`, \`price\`, \`oldPrice\`, \`image\`, \`tags\`, \`colors\`, \`defaultColor\`, \`onColorChange\`).

**Colores:** los círculos muestran el color real del producto (un dato, no un token). Se ven 4 y el resto como "+N"; clic para elegir.

**Figma:** Evergreen DS → página *Product Card*.
`,
      },
    },
  },
  argTypes: {
    tags: {
      control: "check",
      options: ["new", "co", "sale", "bestseller", "low-stock", "sold-out"],
      description: "Etiquetas (se muestran como máximo 2).",
    },
    oldPrice: { control: "text" },
    image: { control: "text" },
  },
  args: {
    name: "Zapatilla Runner Pro",
    description: "Malla transpirable y suela de espuma ligera para uso diario.",
    price: "89,95 €",
    tags: ["new", "co"],
    colors: [
      { name: "Navy", value: "#1a2650" },
      { name: "Crudo", value: "#ebe8e0" },
      { name: "Burdeos", value: "#8c1a1f" },
      { name: "Verde bosque", value: "#405940" },
      { name: "Negro", value: "#0a0a0a" },
      { name: "Gris", value: "#9ca3af" },
    ],
  },
  decorators: [
    (Story, { parameters }) =>
      parameters.wide ? <Story /> : <div className="w-[280px]"><Story /></div>,
  ],
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SinColores: Story = {
  name: "Sin colores",
  args: { colors: [] },
}

export const Rebajado: Story = {
  args: {
    name: "Sudadera Classic",
    description: "Felpa suave con capucha ajustable.",
    price: "49,95 €",
    oldPrice: "69,95 €",
    tags: ["sale", "co"],
  },
}

export const PocasUnidades: Story = {
  name: "Pocas unidades",
  args: {
    name: "Mochila Urban 20L",
    description: 'Compartimento para portátil de 15".',
    price: "59,95 €",
    tags: ["bestseller", "low-stock"],
  },
}

export const Agotado: Story = {
  args: {
    name: "Gorra Logo",
    description: "Ajuste trasero de velcro.",
    price: "24,95 €",
    tags: ["sold-out"],
    colors: [],
  },
}

export const DescripcionLarga: Story = {
  name: "Descripción larga (se corta a 2 líneas)",
  args: {
    description:
      "Malla transpirable, suela de espuma ligera, refuerzo en el talón y cordones reciclados para uso diario y entrenamientos suaves.",
  },
}

export const Rejilla: Story = {
  name: "Rejilla de catálogo",
  parameters: { wide: true },
  decorators: [(Story) => <div className="w-[1200px]"><Story /></div>],
  render: () => (
    <div className="grid grid-cols-4 items-start gap-6">
      <ProductCard name="Camiseta Essentials" description="Algodón orgánico, corte regular." price="29,95 €" tags={["new"]} colors={colorsSix} />
      <ProductCard name="Sudadera Classic" description="Felpa suave con capucha ajustable." price="49,95 €" oldPrice="69,95 €" tags={["sale", "co"]} colors={colorsSix.slice(0, 5)} />
      <ProductCard name="Mochila Urban 20L" description='Compartimento para portátil de 15".' price="59,95 €" tags={["bestseller", "low-stock"]} colors={colorsSix.slice(0, 4)} />
      <ProductCard name="Gorra Logo" description="Ajuste trasero de velcro." price="24,95 €" tags={["sold-out"]} />
    </div>
  ),
}
