// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=11-109
// source=src/components/ui/calendar.tsx
// component=Calendar
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Calendar mode="single" selected={date} onSelect={setDate} />`,
  imports: ['import { Calendar } from "@/components/ui/calendar"'],
  id: 'calendar',
  metadata: { nestable: false },
}
