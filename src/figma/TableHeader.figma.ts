// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=4-47
// source=src/components/ui/table.tsx
// component=TableHeader
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<TableHeader>
  <TableRow>
    <TableHead>Proyecto</TableHead>
    <TableHead>Rol</TableHead>
    <TableHead>Año</TableHead>
    <TableHead>Estado</TableHead>
  </TableRow>
</TableHeader>`,
  imports: ['import { TableHeader, TableRow, TableHead } from "@/components/ui/table"'],
  id: 'table-header',
  metadata: { nestable: true },
}
