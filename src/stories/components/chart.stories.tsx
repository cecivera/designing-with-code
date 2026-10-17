import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const data = [
  { month: "January", running: 186, football: 80 },
  { month: "February", running: 305, football: 200 },
  { month: "March", running: 237, football: 120 },
  { month: "April", running: 73, football: 190 },
  { month: "May", running: 209, football: 130 },
  { month: "June", running: 214, football: 140 },
]

const config = {
  running: { label: "Running", color: "var(--chart-2)" },
  football: { label: "Football", color: "var(--chart-4)" },
} satisfies ChartConfig

const meta = {
  title: "Data/Chart",
  component: ChartContainer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a container for Recharts charts that applies the system colors (tokens \`--chart-1\` … \`--chart-5\`) and adds a styled tooltip and legend.

**When to use it:** dashboards and reports. Define each series' name and color in \`config\` and use \`var(--color-<series>)\` in the chart.

**File:** \`src/components/ui/chart.tsx\` → \`ChartContainer\` (prop \`config\`), \`ChartTooltip\`, \`ChartTooltipContent\`, \`ChartLegend\`, \`ChartLegendContent\`. The charts (\`BarChart\`, \`LineChart\`…) come from \`recharts\`.
`,
      },
    },
  },
  args: { config, children: <></> },
  decorators: [(Story) => <div className="w-[520px]"><Story /></div>],
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Bars: Story = {
  name: "Bars",
  render: (args) => (
    <ChartContainer config={args.config} className="min-h-64 w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(v: string) => v.slice(0, 3)} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="running" fill="var(--color-running)" radius={0} />
        <Bar dataKey="football" fill="var(--color-football)" radius={0} />
      </BarChart>
    </ChartContainer>
  ),
}

export const Lines: Story = {
  name: "Lines",
  render: (args) => (
    <ChartContainer config={args.config} className="min-h-64 w-full">
      <LineChart accessibilityLayer data={data} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(v: string) => v.slice(0, 3)} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line dataKey="running" type="monotone" stroke="var(--color-running)" strokeWidth={2} dot={false} />
        <Line dataKey="football" type="monotone" stroke="var(--color-football)" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  ),
}

export const Area_: Story = {
  name: "Area",
  render: (args) => (
    <ChartContainer config={args.config} className="min-h-64 w-full">
      <AreaChart accessibilityLayer data={data} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(v: string) => v.slice(0, 3)} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <Area dataKey="football" type="natural" fill="var(--color-football)" fillOpacity={0.4} stroke="var(--color-football)" stackId="a" />
        <Area dataKey="running" type="natural" fill="var(--color-running)" fillOpacity={0.4} stroke="var(--color-running)" stackId="a" />
      </AreaChart>
    </ChartContainer>
  ),
}
