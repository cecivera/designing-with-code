"use client"

import * as React from "react"

/**
 * Bloques visuales para las páginas de documentación (Fundamentos).
 * Leen el valor REAL de cada variable CSS en tiempo de ejecución, así que
 * siempre reflejan lo que hay en src/app/globals.css (modo claro, :root).
 */

const noopSubscribe = () => () => {}

function useCssVar(name: string) {
  return React.useSyncExternalStore(
    noopSubscribe,
    () => getComputedStyle(document.documentElement).getPropertyValue(name).trim(),
    () => "",
  )
}

export type Token = { name: string; usage: string; text?: string }

function Swatch({ token }: { token: Token }) {
  const value = useCssVar(`--${token.name}`)
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-background">
      <div
        className="flex h-16 items-end p-2 text-xs font-medium"
        style={{
          background: `var(--${token.name})`,
          color: token.text ? `var(--${token.text})` : undefined,
        }}
      >
        {token.text ? "Aa" : null}
      </div>
      <div className="flex flex-col gap-0.5 border-t border-border p-2">
        <code className="font-mono text-xs font-semibold text-foreground">--{token.name}</code>
        <span className="text-xs text-muted-foreground">{token.usage}</span>
        <code className="font-mono text-[11px] break-all text-muted-foreground">{value || "…"}</code>
      </div>
    </div>
  )
}

export function SwatchGrid({ tokens }: { tokens: Token[] }) {
  return (
    <div className="my-4 grid grid-cols-2 gap-3 font-sans sm:grid-cols-3 lg:grid-cols-4">
      {tokens.map((t) => (
        <Swatch key={t.name} token={t} />
      ))}
    </div>
  )
}

const radii = [
  { name: "radius-sm", formula: "--radius × 0.6" },
  { name: "radius-md", formula: "--radius × 0.8" },
  { name: "radius-lg", formula: "--radius" },
  { name: "radius-xl", formula: "--radius × 1.4" },
  { name: "radius-2xl", formula: "--radius × 1.8" },
  { name: "radius-3xl", formula: "--radius × 2.2" },
  { name: "radius-4xl", formula: "--radius × 2.6" },
]

export function RadiusScale() {
  const base = useCssVar("--radius")
  return (
    <div className="my-4 font-sans">
      <p className="mb-3 text-sm text-muted-foreground">
        Valor base <code className="font-mono">--radius</code>: <strong className="text-foreground">{base || "…"}</strong>
      </p>
      <div className="flex flex-wrap gap-4">
        {radii.map((r) => (
          <div key={r.name} className="flex w-24 flex-col items-center gap-2">
            <div
              className="size-16 border-2 border-foreground/70 bg-muted"
              style={{ borderRadius: `var(--${r.name})` }}
            />
            <code className="font-mono text-xs font-semibold">rounded-{r.name.replace("radius-", "")}</code>
            <span className="text-center text-[11px] text-muted-foreground">{r.formula}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const scale = [
  { label: "Hero", className: "text-5xl font-semibold tracking-tight", sample: "Diseñar con código" },
  { label: "Section heading", className: "text-3xl font-semibold tracking-tight", sample: "Pedidos de la temporada" },
  { label: "Subheading", className: "text-xl font-medium", sample: "Resumen de ventas" },
  { label: "Body", className: "text-base", sample: "Texto de párrafo para la mayoría del contenido." },
  { label: "Label", className: "text-sm font-medium", sample: "Nombre de la tienda" },
  { label: "Caption", className: "text-xs text-muted-foreground", sample: "Actualizado hace 5 minutos" },
  { label: "Mono", className: "font-mono text-sm", sample: "src/components/ui/button.tsx" },
]

export function TypeScale() {
  return (
    <div className="my-4 flex flex-col divide-y divide-border rounded-lg border border-border font-sans">
      {scale.map((s) => (
        <div key={s.label} className="grid gap-1 p-4 sm:grid-cols-[180px_1fr] sm:items-baseline">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">{s.label}</span>
            <code className="font-mono text-[11px] text-muted-foreground">{s.className}</code>
          </div>
          <span className={`text-foreground ${s.className}`}>{s.sample}</span>
        </div>
      ))}
    </div>
  )
}

export function FontSpecimen({ family, variable }: { family: "sans" | "mono"; variable: string }) {
  const value = useCssVar(variable)
  return (
    <div className="my-4 rounded-lg border border-border p-4 font-sans">
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-sm font-medium">{family === "sans" ? "Geist Sans" : "Geist Mono"}</span>
        <code className="font-mono text-[11px] text-muted-foreground">
          font-{family} → {variable} = {value || "…"}
        </code>
      </div>
      <p className={family === "sans" ? "font-sans text-3xl" : "font-mono text-2xl"}>
        Aa Bb Cc Ññ 0123456789
      </p>
      <div className={`mt-2 flex flex-wrap gap-4 text-sm ${family === "sans" ? "font-sans" : "font-mono"}`}>
        <span className="font-light">Light 300</span>
        <span className="font-normal">Regular 400</span>
        <span className="font-medium">Medium 500</span>
        <span className="font-semibold">Semibold 600</span>
        <span className="font-bold">Bold 700</span>
      </div>
    </div>
  )
}
