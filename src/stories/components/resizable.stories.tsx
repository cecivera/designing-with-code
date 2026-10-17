import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const meta = {
  title: "Layout/Resizable",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** panels the user can resize by dragging the divider (based on react-resizable-panels).

**When to use it:** editor- or email-style tools (list + detail), where users decide how much space each part gets.

**File:** \`src/components/ui/resizable.tsx\` → \`ResizablePanelGroup\` (prop \`orientation\`), \`ResizablePanel\` (props \`defaultSize\`, \`minSize\`), \`ResizableHandle\` (prop \`withHandle\`).
`,
      },
    },
  },
  argTypes: {
    orientation: { control: "inline-radio", options: ["horizontal", "vertical"] },
  },
  args: { orientation: "horizontal" },
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ResizablePanelGroup {...args} className="min-h-52 w-[480px] rounded-lg border">
      <ResizablePanel defaultSize="30%">
        <div className="flex h-full items-center justify-center p-6 text-sm font-medium">List</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="70%">
        <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Detail</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const WithHandle: Story = {
  name: "With visible handle",
  render: (args) => (
    <ResizablePanelGroup {...args} className="min-h-52 w-[480px] rounded-lg border">
      <ResizablePanel defaultSize="50%">
        <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Left</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%">
        <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Right</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: (args) => (
    <ResizablePanelGroup {...args} className="min-h-72 w-80 rounded-lg border">
      <ResizablePanel defaultSize="40%">
        <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Top</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="60%">
        <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Bottom</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Nested: Story = {
  name: "Nested",
  render: (args) => (
    <ResizablePanelGroup {...args} className="min-h-72 w-[480px] rounded-lg border">
      <ResizablePanel defaultSize="40%">
        <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Navigation</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="60%">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="30%">
            <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Header</div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize="70%">
            <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Content</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}
