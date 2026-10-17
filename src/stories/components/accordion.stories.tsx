import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const meta = {
  title: "Layout/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** lista de secciones que se expanden y contraen para mostrar su contenido.

**Cuándo usarlo:** FAQs, ajustes agrupados o fichas técnicas largas, cuando el usuario solo necesita ver parte del contenido. Para un único bloque desplegable usa **Collapsible**.

**Archivo:** \`src/components/ui/accordion.tsx\` → \`Accordion\` (props \`multiple\`, \`defaultValue\`), \`AccordionItem\`, \`AccordionTrigger\`, \`AccordionContent\`.
`,
      },
    },
  },
  argTypes: {
    multiple: { control: "boolean", description: "Permite tener varias secciones abiertas a la vez." },
    disabled: { control: "boolean" },
  },
  args: { multiple: false, defaultValue: ["envios"] },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

const faqs = [
  { value: "envios", q: "¿Cuánto tarda el envío?", a: "Entre 3 y 5 días laborables en península." },
  { value: "devoluciones", q: "¿Puedo devolver un pedido?", a: "Sí, dispones de 30 días desde la entrega." },
  { value: "factura", q: "¿Dónde descargo la factura?", a: "En Pedidos › Detalle › Descargar factura." },
]

export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      {faqs.map((f) => (
        <AccordionItem key={f.value} value={f.value}>
          <AccordionTrigger>{f.q}</AccordionTrigger>
          <AccordionContent>{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}

export const Multiple: Story = {
  name: "Varias abiertas",
  args: { multiple: true, defaultValue: ["envios", "factura"] },
  render: Default.render,
}

export const ItemDeshabilitado: Story = {
  name: "Con item deshabilitado",
  render: (args) => (
    <Accordion {...args}>
      {faqs.map((f, i) => (
        <AccordionItem key={f.value} value={f.value} disabled={i === 1}>
          <AccordionTrigger>{f.q}</AccordionTrigger>
          <AccordionContent>{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}
