// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=14-42
// source=src/components/ui/hover-card.tsx
// component=HoverCard
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<HoverCard>
  <HoverCardTrigger render={<Button variant="link" />}>@cecivera</HoverCardTrigger>
  <HoverCardContent>…</HoverCardContent>
</HoverCard>`,
  imports: ['import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"', 'import { Button } from "@/components/ui/button"'],
  id: 'hover-card',
  metadata: { nestable: false },
}
