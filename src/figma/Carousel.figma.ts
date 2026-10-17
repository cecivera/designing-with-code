// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=11-211
// source=src/components/ui/carousel.tsx
// component=Carousel
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Carousel>
  <CarouselContent>
    <CarouselItem>1</CarouselItem>
    <CarouselItem>2</CarouselItem>
    <CarouselItem>3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
  imports: ['import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"'],
  id: 'carousel',
  metadata: { nestable: false },
}
