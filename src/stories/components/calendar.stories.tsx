import * as React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import type { DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"

const meta = {
  title: "Forms/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a calendar for picking a date or a range (built on react-day-picker).

**When to use it:** delivery dates, campaign periods, bookings. For a compact picker, place it inside a **Popover** opened from a button or input.

**File:** \`src/components/ui/calendar.tsx\` → \`Calendar\` (react-day-picker props: \`mode\`, \`selected\`, \`onSelect\`, \`numberOfMonths\`, \`captionLayout\`, \`locale\`…).
`,
      },
    },
  },
  argTypes: {
    captionLayout: {
      control: "inline-radio",
      options: ["label", "dropdown", "dropdown-months", "dropdown-years"],
      description: "Header with text or with month/year dropdowns.",
    },
    numberOfMonths: { control: { type: "number", min: 1, max: 3 } },
    showOutsideDays: { control: "boolean" },
    buttonVariant: { control: "select", options: ["ghost", "outline", "secondary"] },
  },
  args: { captionLayout: "label", numberOfMonths: 1, showOutsideDays: true },
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

export const Default: Story = { name: "Single date", render: (args) => <SingleDemo {...args} /> }

export const WithDropdowns: Story = {
  name: "With month/year dropdowns",
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

export const Range: Story = { name: "Date range", render: (args) => <RangeDemo {...args} /> }
