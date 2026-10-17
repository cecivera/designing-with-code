import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"

const meta = {
  title: "Data/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a circular image representing a person or entity, with fallback initials if the image doesn't load.

**When to use it:** next to user names, in comments, assignments or team lists. Use \`AvatarGroup\` to show several people.

**File:** \`src/components/ui/avatar.tsx\` → \`Avatar\` (prop \`size\`), \`AvatarImage\`, \`AvatarFallback\`, \`AvatarBadge\`, \`AvatarGroup\`, \`AvatarGroupCount\`.
`,
      },
    },
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "default", "lg"], table: { defaultValue: { summary: "default" } } },
  },
  args: { size: "default" },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}

export const InitialsOnly: Story = {
  name: "Initials only (fallback)",
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>CV</AvatarFallback>
    </Avatar>
  ),
}

export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div className="flex items-center gap-3">
      {(["sm", "default", "lg"] as const).map((s) => (
        <Avatar key={s} size={s}>
          <AvatarFallback>CV</AvatarFallback>
        </Avatar>
      ))}
    </div>
  ),
}

export const WithStatus: Story = {
  name: "With indicator (badge)",
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>CV</AvatarFallback>
      <AvatarBadge className="bg-green-600" />
    </Avatar>
  ),
}

export const Group: Story = {
  name: "Group",
  render: (args) => (
    <AvatarGroup>
      {["AB", "CD", "EF"].map((i) => (
        <Avatar key={i} {...args}>
          <AvatarFallback>{i}</AvatarFallback>
        </Avatar>
      ))}
      <AvatarGroupCount>+4</AvatarGroupCount>
    </AvatarGroup>
  ),
}
