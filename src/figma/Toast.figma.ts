// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=16-89
// source=src/components/ui/sonner.tsx
// component=Toaster
import figma from 'figma'
const instance = figma.selectedInstance
const type = instance.getEnum('Type', { default: 'default', success: 'success', loading: 'loading' })

export default {
  example: figma.code`${type === 'default' ? figma.code`toast("Evento creado", { description: "Viernes, 17 de octubre de 2026" })` : ''}${type === 'success' ? figma.code`toast.success("Proyecto publicado", { description: "Viernes, 17 de octubre de 2026" })` : ''}${type === 'loading' ? figma.code`toast.loading("Guardando…")` : ''}`,
  imports: ['import { toast } from "sonner"'],
  id: 'toast',
  metadata: { nestable: false },
}
