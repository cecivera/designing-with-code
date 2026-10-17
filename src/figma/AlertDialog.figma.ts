// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=11-43
// source=src/components/ui/alert-dialog.tsx
// component=AlertDialog
import figma from 'figma'
const instance = figma.selectedInstance
const title = instance.getString('Title')
const description = instance.getString('Description')

export default {
  example: figma.code`<AlertDialog>
  <AlertDialogTrigger render={<Button variant="outline" />}>Abrir</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>${title}</AlertDialogTitle>
      <AlertDialogDescription>${description}</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancelar</AlertDialogCancel>
      <AlertDialogAction>Continuar</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
  imports: ['import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog"', 'import { Button } from "@/components/ui/button"'],
  id: 'alert-dialog',
  metadata: { nestable: false },
}
