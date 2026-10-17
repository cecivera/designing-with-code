import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { ArrowRightIcon, Loader2Icon, MailIcon, PlusIcon } from "lucide-react"
import { fn } from "storybook/test"

import { Button } from "@/components/ui/button"

const meta = {
  title: "Actions/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** the system's main button. It triggers an action (submit, save, open a dialog).

**When to use it:** for actions. If the element takes the user to another page, use a link (you can give it a button look with \`render={<a href="…" />}\` or the \`link\` variant).
Use a single \`default\` variant per view for the primary action; \`outline\`/\`secondary\`/\`ghost\` for secondary actions and \`destructive\` for irreversible actions.

**File:** \`src/components/ui/button.tsx\` → \`Button\` component (props \`variant\` and \`size\`). This is the file to map in Figma Code Connect.
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "secondary", "ghost", "destructive", "link"],
      description: "Visual style of the button.",
      table: { defaultValue: { summary: "default" } },
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
      description: "Size. The `icon*` sizes are square, for icon-only buttons.",
      table: { defaultValue: { summary: "default" } },
    },
    disabled: { control: "boolean", description: "Disables the button." },
    children: { control: "text", description: "Content (text and/or icon)." },
  },
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: false,
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Outline: Story = { args: { variant: "outline" } }
export const Secondary: Story = { args: { variant: "secondary" } }
export const Ghost: Story = { args: { variant: "ghost" } }
export const Destructive: Story = { args: { variant: "destructive", children: "Delete" } }
export const Link: Story = { args: { variant: "link", children: "See more" } }

export const AllVariants: Story = {
  name: "All variants",
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Button {...args} variant="default">Default</Button>
      <Button {...args} variant="outline">Outline</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="destructive">Destructive</Button>
      <Button {...args} variant="link">Link</Button>
    </div>
  ),
}

export const Sizes: Story = {
  name: "Sizes",
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Button {...args} size="xs">Extra small</Button>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="default">Default</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
}

export const WithIcon: Story = {
  name: "With icon",
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Button {...args}>
        <MailIcon data-icon="inline-start" />
        Send email
      </Button>
      <Button {...args} variant="outline">
        Continue
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  ),
}

export const IconOnly: Story = {
  name: "Icon only",
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Button {...args} size="icon-xs" aria-label="Add"><PlusIcon /></Button>
      <Button {...args} size="icon-sm" aria-label="Add"><PlusIcon /></Button>
      <Button {...args} size="icon" aria-label="Add"><PlusIcon /></Button>
      <Button {...args} size="icon-lg" aria-label="Add"><PlusIcon /></Button>
    </div>
  ),
}

export const Loading: Story = {
  name: "Loading",
  args: { disabled: true },
  render: (args) => (
    <Button {...args}>
      <Loader2Icon className="animate-spin" data-icon="inline-start" />
      Saving…
    </Button>
  ),
}

export const Disabled: Story = { name: "Disabled", args: { disabled: true } }
