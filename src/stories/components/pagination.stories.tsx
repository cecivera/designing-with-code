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
  title: "Navigation/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** controls for moving between pages of results.

**When to use it:** in tables and long lists where users need to know which page they're on or jump to a specific one. For continuous feeds, consider "Load more".

**File:** \`src/components/ui/pagination.tsx\` → \`Pagination\`, \`PaginationContent\`, \`PaginationItem\`, \`PaginationLink\` (prop \`isActive\`), \`PaginationPrevious\` / \`PaginationNext\` (prop \`text\`), \`PaginationEllipsis\`.
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
          <PaginationPrevious href="#" text="Previous" />
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
          <PaginationNext href="#" text="Next" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}

export const Simple: Story = {
  name: "Previous / next only",
  render: (args) => (
    <Pagination {...args}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" text="Previous" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" text="Next" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}
