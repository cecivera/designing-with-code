// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=4-42
// source=src/components/ui/skeleton.tsx
// component=Skeleton
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<div className="flex items-center gap-3">
  <Skeleton className="size-10 rounded-full" />
  <div className="grid gap-2">
    <Skeleton className="h-4 w-[200px]" />
    <Skeleton className="h-4 w-[150px]" />
  </div>
</div>`,
  imports: ['import { Skeleton } from "@/components/ui/skeleton"'],
  id: 'skeleton',
  metadata: { nestable: true },
}
