// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=6-2
// source=src/components/ui/dialog.tsx
// component=Dialog
import figma from 'figma'
const instance = figma.selectedInstance
const title = instance.getString('Title')
const description = instance.getString('Description')

export default {
  example: figma.code`<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>Abrir</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>${title}</DialogTitle>
      <DialogDescription>${description}</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose render={<Button variant="outline" />}>Cancelar</DialogClose>
      <Button>Eliminar</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  imports: ['import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"', 'import { Button } from "@/components/ui/button"'],
  id: 'dialog',
  metadata: { nestable: false },
}
