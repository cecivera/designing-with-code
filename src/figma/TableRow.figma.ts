// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=4-56
// source=src/components/ui/table.tsx
// component=TableRow
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<TableRow>
  <TableCell>Evergreen DS</TableCell>
  <TableCell>Product Designer</TableCell>
  <TableCell>2026</TableCell>
  <TableCell>Activo</TableCell>
</TableRow>`,
  imports: ['import { TableRow, TableCell } from "@/components/ui/table"'],
  id: 'table-row',
  metadata: { nestable: true },
}
