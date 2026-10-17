// url=https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS?node-id=18-20
// source=src/components/product-card.tsx
// component=ProductCard
import figma from 'figma'
const instance = figma.selectedInstance
const name = instance.getString('Name')
const description = instance.getString('Description')
const price = instance.getString('Price')
const showOldPrice = instance.getBoolean('Show old price')
const oldPrice = instance.getString('Old price')

export default {
  example: figma.code`<ProductCard
  name="${name}"
  description="${description}"
  price="${price}"${showOldPrice ? figma.code`
  oldPrice="${oldPrice}"` : ''}
  tags={["new", "co"]}
  colors={[{ name: "Navy", value: "#1a2650" }, { name: "Crudo", value: "#ebe8e0" }]}
/>`,
  imports: ['import { ProductCard } from "@/components/product-card"'],
  id: 'product-card',
  metadata: { nestable: false },
}
