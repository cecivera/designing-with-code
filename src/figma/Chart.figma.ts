// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=13-7
// source=src/components/ui/chart.tsx
// component=ChartContainer
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<ChartContainer config={chartConfig}>
  <BarChart data={data}>
    <Bar dataKey="escritorio" fill="var(--color-escritorio)" radius={0} />
    <Bar dataKey="movil" fill="var(--color-movil)" radius={0} />
    <ChartTooltip content={<ChartTooltipContent />} />
  </BarChart>
</ChartContainer>`,
  imports: ['import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"'],
  id: 'chart',
  metadata: { nestable: false },
}
