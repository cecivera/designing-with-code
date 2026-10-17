import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const meta = {
  title: "Navegación/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Qué es:** controles para moverse entre páginas de resultados.

**Cuándo usarlo:** en tablas y listados largos donde el usuario necesita saber en qué página está o saltar a una concreta. Para feeds continuos, considera "Cargar más".

**Archivo:** \`src/components/ui/pagination.tsx\` → \`Pagination\`, \`PaginationContent\`, \`PaginationItem\`, \`PaginationLink\` (prop \`isActive\`), \`PaginationPrevious\` / \`PaginationNext\` (prop \`text\`), \`PaginationEllipsis\`.
`,
      },
    },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Pagination {...args}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" text="Anterior" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">12</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" text="Siguiente" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}

export const Simple: Story = {
  name: "Solo anterior / siguiente",
  render: (args) => (
    <Pagination {...args}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" text="Anterior" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" text="Siguiente" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}
