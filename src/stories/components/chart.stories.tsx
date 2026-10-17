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
  { mes: "Enero", running: 186, futbol: 80 },
  { mes: "Febrero", running: 305, futbol: 200 },
  { mes: "Marzo", running: 237, futbol: 120 },
  { mes: "Abril", running: 73, futbol: 190 },
  { mes: "Mayo", running: 209, futbol: 130 },
  { mes: "Junio", running: 214, futbol: 140 },
]

const config = {
  running: { label: "Running", color: "var(--chart-2)" },
  futbol: { label: "Fútbol", color: "var(--chart-4)" },
} satisfies ChartConfig

const meta = {
  title: "Datos/Chart",
  component: ChartContainer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** contenedor para gráficos de Recharts que aplica los colores del sistema (tokens \`--chart-1\` … \`--chart-5\`) y añade tooltip y leyenda con estilo propio.

**Cuándo usarlo:** dashboards e informes. Define en \`config\` el nombre y color de cada serie y usa \`var(--color-<serie>)\` en el gráfico.

**Archivo:** \`src/components/ui/chart.tsx\` → \`ChartContainer\` (prop \`config\`), \`ChartTooltip\`, \`ChartTooltipContent\`, \`ChartLegend\`, \`ChartLegendContent\`. Los gráficos (\`BarChart\`, \`LineChart\`…) vienen de \`recharts\`.
`,
      },
    },
  },
  args: { config, children: <></> },
  decorators: [(Story) => <div className="w-[520px]"><Story /></div>],
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Barras: Story = {
  render: (args) => (
    <ChartContainer config={args.config} className="min-h-64 w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="mes" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(v: string) => v.slice(0, 3)} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="running" fill="var(--color-running)" radius={0} />
        <Bar dataKey="futbol" fill="var(--color-futbol)" radius={0} />
      </BarChart>
    </ChartContainer>
  ),
}

export const Lineas: Story = {
  name: "Líneas",
  render: (args) => (
    <ChartContainer config={args.config} className="min-h-64 w-full">
      <LineChart accessibilityLayer data={data} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="mes" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(v: string) => v.slice(0, 3)} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line dataKey="running" type="monotone" stroke="var(--color-running)" strokeWidth={2} dot={false} />
        <Line dataKey="futbol" type="monotone" stroke="var(--color-futbol)" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  ),
}

export const Area_: Story = {
  name: "Área",
  render: (args) => (
    <ChartContainer config={args.config} className="min-h-64 w-full">
      <AreaChart accessibilityLayer data={data} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="mes" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(v: string) => v.slice(0, 3)} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <Area dataKey="futbol" type="natural" fill="var(--color-futbol)" fillOpacity={0.4} stroke="var(--color-futbol)" stackId="a" />
        <Area dataKey="running" type="natural" fill="var(--color-running)" fillOpacity={0.4} stroke="var(--color-running)" stackId="a" />
      </AreaChart>
    </ChartContainer>
  ),
}
