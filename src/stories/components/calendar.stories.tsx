import * as React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import type { DateRange } from "react-day-picker"
import { es } from "react-day-picker/locale"

import { Calendar } from "@/components/ui/calendar"

const meta = {
  title: "Formularios/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** calendario para elegir una fecha o un rango (basado en react-day-picker).

**Cuándo usarlo:** fechas de entrega, periodos de campaña, reservas. Para un selector compacto, ponlo dentro de un **Popover** abierto desde un botón o input.

**Archivo:** \`src/components/ui/calendar.tsx\` → \`Calendar\` (props de react-day-picker: \`mode\`, \`selected\`, \`onSelect\`, \`numberOfMonths\`, \`captionLayout\`, \`locale\`…).
`,
      },
    },
  },
  argTypes: {
    captionLayout: {
      control: "inline-radio",
      options: ["label", "dropdown", "dropdown-months", "dropdown-years"],
      description: "Cabecera con texto o con desplegables de mes/año.",
    },
    numberOfMonths: { control: { type: "number", min: 1, max: 3 } },
    showOutsideDays: { control: "boolean" },
    buttonVariant: { control: "select", options: ["ghost", "outline", "secondary"] },
  },
  args: { captionLayout: "label", numberOfMonths: 1, showOutsideDays: true, locale: es },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

function SingleDemo(props: React.ComponentProps<typeof Calendar>) {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2026, 9, 17))
  return (
    <Calendar
      {...props}
      mode="single"
      selected={date}
      onSelect={setDate}
      defaultMonth={new Date(2026, 9)}
      className="rounded-lg border"
    />
  )
}

export const Default: Story = { name: "Fecha única", render: (args) => <SingleDemo {...args} /> }

export const ConDesplegables: Story = {
  name: "Con desplegables de mes/año",
  args: { captionLayout: "dropdown" },
  render: (args) => <SingleDemo {...args} />,
}

function RangeDemo(props: React.ComponentProps<typeof Calendar>) {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(2026, 9, 5),
    to: new Date(2026, 9, 16),
  })
  return (
    <Calendar
      {...props}
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
      defaultMonth={new Date(2026, 9)}
      className="rounded-lg border"
    />
  )
}

export const Rango: Story = { name: "Rango de fechas", render: (args) => <RangeDemo {...args} /> }
