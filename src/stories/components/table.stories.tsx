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
  title: "Data/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a table to display data in rows and columns, with header, footer and caption.

**When to use it:** to compare records with the same fields (orders, products, customers). Right-align numbers. For sorting/filtering/pagination, combine it with your own logic (e.g. TanStack Table) and **Pagination**.

**File:** \`src/components/ui/table.tsx\` → \`Table\`, \`TableHeader\`, \`TableBody\`, \`TableFooter\`, \`TableRow\`, \`TableHead\`, \`TableCell\`, \`TableCaption\`.
`,
      },
    },
  },
  decorators: [(Story) => <div className="w-[560px]"><Story /></div>],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const orders = [
  { id: "ORD-001", customer: "Downtown Store", status: "Shipped", total: 1250 },
  { id: "ORD-002", customer: "City Runners", status: "Pending", total: 830 },
  { id: "ORD-003", customer: "Goal Sports", status: "Cancelled", total: 420 },
  { id: "ORD-004", customer: "North Outdoor", status: "Shipped", total: 2100 },
]

const variant = {
  Shipped: "default",
  Pending: "secondary",
  Cancelled: "destructive",
} as const

const eur = (n: number) => n.toLocaleString("en-GB", { style: "currency", currency: "EUR" })

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableCaption>Wholesale orders for October.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((p) => (
          <TableRow key={p.id}>
            <TableCell className="font-medium">{p.id}</TableCell>
            <TableCell>{p.customer}</TableCell>
            <TableCell>
              <Badge variant={variant[p.status as keyof typeof variant]}>{p.status}</Badge>
            </TableCell>
            <TableCell className="text-right tabular-nums">{eur(p.total)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right tabular-nums">
            {eur(orders.reduce((s, p) => s + p.total, 0))}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const SelectedRow: Story = {
  name: "Selected row",
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>Order</TableHead>
          <TableHead>Customer</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((p, i) => (
          <TableRow key={p.id} data-state={i === 1 ? "selected" : undefined}>
            <TableCell className="font-medium">{p.id}</TableCell>
            <TableCell>{p.customer}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}
