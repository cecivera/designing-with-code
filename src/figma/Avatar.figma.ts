// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=4-17
// source=src/components/ui/avatar.tsx
// component=Avatar
import figma from 'figma'
const instance = figma.selectedInstance
const initials = instance.getString('Initials')
const size = instance.getEnum('Size', { sm: 'sm', default: 'default', lg: 'lg' })

export default {
  example: figma.code`<Avatar size="${size}">
  <AvatarImage src="/avatar.jpg" alt="" />
  <AvatarFallback>${initials}</AvatarFallback>
</Avatar>`,
  imports: ['import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"'],
  id: 'avatar',
  metadata: { nestable: true },
}
