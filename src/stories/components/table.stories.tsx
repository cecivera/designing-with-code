import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const meta = {
  title: "Datos/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** tabla para mostrar datos en filas y columnas, con cabecera, pie y leyenda.

**Cuándo usarlo:** para comparar registros con los mismos campos (pedidos, productos, clientes). Alinea los números a la derecha. Para ordenar/filtrar/paginar se combina con lógica propia (p. ej. TanStack Table) y **Pagination**.

**Archivo:** \`src/components/ui/table.tsx\` → \`Table\`, \`TableHeader\`, \`TableBody\`, \`TableFooter\`, \`TableRow\`, \`TableHead\`, \`TableCell\`, \`TableCaption\`.
`,
      },
    },
  },
  decorators: [(Story) => <div className="w-[560px]"><Story /></div>],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const pedidos = [
  { id: "PED-001", cliente: "Deportes García", estado: "Enviado", total: 1250 },
  { id: "PED-002", cliente: "Runners Madrid", estado: "Pendiente", total: 830 },
  { id: "PED-003", cliente: "Fútbol Total", estado: "Cancelado", total: 420 },
  { id: "PED-004", cliente: "Outdoor Norte", estado: "Enviado", total: 2100 },
]

const variante = {
  Enviado: "default",
  Pendiente: "secondary",
  Cancelado: "destructive",
} as const

const eur = (n: number) => n.toLocaleString("es-ES", { style: "currency", currency: "EUR" })

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableCaption>Pedidos mayoristas de octubre.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Pedido</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pedidos.map((p) => (
          <TableRow key={p.id}>
            <TableCell className="font-medium">{p.id}</TableCell>
            <TableCell>{p.cliente}</TableCell>
            <TableCell>
              <Badge variant={variante[p.estado as keyof typeof variante]}>{p.estado}</Badge>
            </TableCell>
            <TableCell className="text-right tabular-nums">{eur(p.total)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right tabular-nums">
            {eur(pedidos.reduce((s, p) => s + p.total, 0))}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const FilaSeleccionada: Story = {
  name: "Fila seleccionada",
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>Pedido</TableHead>
          <TableHead>Cliente</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pedidos.map((p, i) => (
          <TableRow key={p.id} data-state={i === 1 ? "selected" : undefined}>
            <TableCell className="font-medium">{p.id}</TableCell>
            <TableCell>{p.cliente}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}
