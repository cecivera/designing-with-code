import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const meta = {
  title: "Data/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**What it is:** a swipeable carousel of items (built on Embla), with previous/next buttons and touch support.

**When to use it:** product galleries or highlights where seeing everything at once isn't essential. Avoid it for critical content: many people never get past the first slide.

**File:** \`src/components/ui/carousel.tsx\` → \`Carousel\` (props \`orientation\`, \`opts\`), \`CarouselContent\`, \`CarouselItem\`, \`CarouselPrevious\`, \`CarouselNext\`.
`,
      },
    },
  },
  argTypes: {
    orientation: { control: "inline-radio", options: ["horizontal", "vertical"] },
  },
  args: { orientation: "horizontal" },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Carousel {...args} className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, i) => (
          <CarouselItem key={i}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center">
                <span className="text-4xl font-semibold">{i + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

export const MultiplePerView: Story = {
  name: "Multiple per view",
  render: (args) => (
    <Carousel {...args} opts={{ align: "start" }} className="w-full max-w-sm">
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, i) => (
          <CarouselItem key={i} className="basis-1/3">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center">
                <span className="text-2xl font-semibold">{i + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: (args) => (
    <div className="py-12">
      <Carousel {...args} opts={{ align: "start" }} className="w-full max-w-xs">
        <CarouselContent className="h-48">
          {Array.from({ length: 5 }).map((_, i) => (
            <CarouselItem key={i} className="basis-1/2">
              <Card>
                <CardContent className="flex items-center justify-center py-4">
                  <span className="text-2xl font-semibold">{i + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}
