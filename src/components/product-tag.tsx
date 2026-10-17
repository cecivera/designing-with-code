import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const productTagVariants = cva(
  "inline-flex h-5 w-fit shrink-0 items-center justify-center rounded-4xl border border-transparent px-2 text-xs leading-4 font-medium whitespace-nowrap",
  {
    variants: {
      type: {
        new: "bg-primary text-primary-foreground",
        co: "border-border bg-secondary text-secondary-foreground",
        sale: "bg-destructive/10 text-destructive",
        bestseller: "border-border bg-background text-foreground",
        "low-stock": "border-border bg-background text-destructive",
        "sold-out": "border-border bg-muted text-muted-foreground",
      },
    },
    defaultVariants: { type: "new" },
  }
)

type ProductTagType = NonNullable<VariantProps<typeof productTagVariants>["type"]>

const productTagLabels: Record<ProductTagType, string> = {
  new: "New",
  co: "CO · Carry over",
  sale: "Sale",
  bestseller: "Bestseller",
  "low-stock": "Low stock",
  "sold-out": "Sold out",
}

/** Etiqueta de estado de un producto (New, CO, Sale…). */
function ProductTag({
  type = "new",
  className,
  ...props
}: React.ComponentProps<"span"> & { type?: ProductTagType }) {
  return (
    <span
      data-slot="product-tag"
      data-type={type}
      className={cn(productTagVariants({ type }), className)}
      {...props}
    >
      {productTagLabels[type]}
    </span>
  )
}

export { ProductTag, productTagLabels, productTagVariants, type ProductTagType }
