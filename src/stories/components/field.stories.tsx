import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

const meta = {
  title: "Formularios/Field",
  component: Field,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** la estructura de un campo de formulario: label + control + descripción + error. También agrupa campos (\`FieldGroup\`, \`FieldSet\` con \`FieldLegend\`).

**Cuándo usarlo:** para construir cualquier formulario con espaciados y estados de error coherentes. Es la pieza que une **Label**, **Input**, **Checkbox**, **Switch**, etc.

**Archivo:** \`src/components/ui/field.tsx\` → \`Field\` (prop \`orientation\`), \`FieldLabel\`, \`FieldDescription\`, \`FieldError\`, \`FieldGroup\`, \`FieldSet\`, \`FieldLegend\`, \`FieldSeparator\`, \`FieldContent\`, \`FieldTitle\`.
`,
      },
    },
  },
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["vertical", "horizontal", "responsive"],
      description: "Label encima (vertical), al lado (horizontal) o según el ancho (responsive).",
      table: { defaultValue: { summary: "vertical" } },
    },
  },
  args: { orientation: "vertical" },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Field {...args}>
      <FieldLabel htmlFor="nombre">Nombre de la tienda</FieldLabel>
      <Input id="nombre" placeholder="adidas Store Madrid" />
      <FieldDescription>Aparecerá en las facturas.</FieldDescription>
    </Field>
  ),
}

export const ConError: Story = {
  name: "Con error",
  render: (args) => (
    <Field {...args} data-invalid>
      <FieldLabel htmlFor="email-error">Email</FieldLabel>
      <Input id="email-error" aria-invalid defaultValue="pedidos@" />
      <FieldError>Introduce un email válido.</FieldError>
    </Field>
  ),
}

export const Horizontal: Story = {
  args: { orientation: "horizontal" },
  render: (args) => (
    <Field {...args}>
      <Checkbox id="factura" defaultChecked />
      <FieldContent>
        <FieldLabel htmlFor="factura">Enviar factura por email</FieldLabel>
        <FieldDescription>Recibirás un PDF con cada pedido.</FieldDescription>
      </FieldContent>
    </Field>
  ),
}

export const FormularioCompleto: Story = {
  name: "Formulario completo",
  render: () => (
    <form onSubmit={(e) => e.preventDefault()}>
      <FieldSet>
        <FieldLegend>Datos del cliente</FieldLegend>
        <FieldDescription>Información para el pedido mayorista.</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="empresa">Empresa</FieldLabel>
            <Input id="empresa" placeholder="Deportes García S.L." />
          </Field>
          <Field>
            <FieldLabel htmlFor="notas">Notas</FieldLabel>
            <Textarea id="notas" placeholder="Horario de entrega, muelle…" />
          </Field>
          <FieldSeparator />
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="avisos">Avisos de stock</FieldLabel>
              <FieldDescription>Te avisamos cuando haya reposición.</FieldDescription>
            </FieldContent>
            <Switch id="avisos" />
          </Field>
          <Field orientation="horizontal">
            <Button type="submit">Guardar</Button>
            <Button variant="outline" type="button">Cancelar</Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  ),
}
