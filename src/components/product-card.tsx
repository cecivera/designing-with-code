"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { ProductTag, type ProductTagType } from "@/components/product-tag"

type ProductCardProps = React.ComponentProps<"article"> & {
  /** Nombre del producto. */
  name: string
  /** Descripción corta: se corta a 2 líneas. */
  description: string
  /** Precio actual ya formateado, por ejemplo "89,95 €". */
  price: string
  /** Precio anterior tachado (rebajas). Opcional. */
  oldPrice?: string
  /** URL de la foto. Sin foto se muestra un hueco gris. */
  image?: string
  imageAlt?: string
  /** Hasta 2 etiquetas: new, co, sale, bestseller, low-stock, sold-out. */
  tags?: ProductTagType[]
  /**
   * Colores disponibles del producto. `value` es el color real del producto
   * (un dato, no un token del sistema). Se muestran 4 y el resto como "+N".
   */
  colors?: { name: string; value: string }[]
  /** Color seleccionado al inicio (por nombre). Por defecto, el primero. */
  defaultColor?: string
  /** Se llama al elegir otro color. */
  onColorChange?: (name: string) => void
}

const MAX_SWATCHES = 4

/**
 * Tarjeta de producto: foto, etiquetas, nombre, descripción corta y precio.
 * Diseño en Figma: Evergreen DS → página "Product Card".
 */
function ProductCard({
  name,
  description,
  price,
  oldPrice,
  image,
  imageAlt = "",
  tags = [],
  colors = [],
  defaultColor,
  onColorChange,
  className,
  ...props
}: ProductCardProps) {
  const [selected, setSelected] = React.useState(defaultColor ?? colors[0]?.name)
  const hidden = colors.length - MAX_SWATCHES

  return (
    <article
      data-slot="product-card"
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground",
        className
      )}
      {...props}
    >
      <div data-slot="product-card-photo" className="relative aspect-[4/5] w-full bg-muted">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={imageAlt} className="absolute inset-0 size-full object-cover" />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
            Foto de producto
          </span>
        )}
        {tags.length > 0 && (
          <div data-slot="product-card-tags" className="absolute top-3 left-3 flex gap-1.5">
            {tags.slice(0, 2).map((tag) => (
              <ProductTag key={tag} type={tag} />
            ))}
          </div>
        )}
      </div>
      <div data-slot="product-card-body" className="flex flex-col gap-1 px-4 pt-3.5 pb-4">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
        {colors.length > 0 && (
          <div data-slot="product-card-colors" className="flex items-center gap-1 pt-1">
            {colors.slice(0, MAX_SWATCHES).map((color) => {
              const isSelected = color.name === selected
              return (
                <button
                  key={color.name}
                  type="button"
                  aria-label={color.name}
                  aria-pressed={isSelected}
                  onClick={() => {
                    setSelected(color.name)
                    onColorChange?.(color.name)
                  }}
                  className={cn(
                    "flex size-5 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isSelected && "ring-[1.5px] ring-foreground ring-inset"
                  )}
                >
                  <span
                    className="size-3.5 rounded-full border border-border"
                    style={{ backgroundColor: color.value }}
                  />
                </button>
              )
            })}
            {hidden > 0 && <span className="text-xs text-muted-foreground">+{hidden}</span>}
          </div>
        )}
        <p className="flex items-baseline gap-2 pt-1.5">
          <span className="text-base font-semibold">{price}</span>
          {oldPrice && (
            <span className="text-sm text-muted-foreground line-through">{oldPrice}</span>
          )}
        </p>
      </div>
    </article>
  )
}

export { ProductCard, type ProductCardProps }
