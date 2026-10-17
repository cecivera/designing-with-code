// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=15-112
// source=src/components/ui/sheet.tsx
// component=Sheet
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>Editar perfil</SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Editar perfil</SheetTitle>
      <SheetDescription>Haz cambios en tu perfil y guarda al terminar.</SheetDescription>
    </SheetHeader>
    <SheetFooter>
      <Button>Guardar cambios</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
  imports: ['import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet"', 'import { Button } from "@/components/ui/button"'],
  id: 'sheet',
  metadata: { nestable: false },
}
