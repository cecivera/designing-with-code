# Workshop: diseñar y prototipar con Claude Code

Material para un workshop con Product Owners. Usa **Evergreen DS** (este repo) como ejemplo real de sistema de diseño conectado entre Figma, código, Storybook y Chromatic.

## Datos del workshop

| | |
|---|---|
| **Formato** | Remoto, por videollamada compartiendo pantalla |
| **Duración** | 2 días · unas 2 horas cada día |
| **Público** | Hasta 6 Product Owners con poca experiencia técnica |
| **Herramienta de los POs** | Claude Code en **VS Code** (panel de chat) |
| **Fecha prevista** | Finales de la semana del 19 de octubre de 2026 |

## Objetivos

Al terminar, cada PO sabrá:

1. **Entender el flujo** Figma → GitHub → Storybook → Chromatic y por qué evita que el producto salga distinto al diseño.
2. **Hablar con Claude Code**: hacer preguntas útiles sobre un producto y pedir resultados en el formato que necesita.
3. **Prototipar con Claude Code**: pasar de una idea a requisitos y de ahí a un prototipo clicable hecho con componentes reales.

## Plan de preparación

| Día | Tarea | Estado |
|---|---|---|
| Sáb 17 – Dom 18 | Terminar la librería: iconos, librerías de Figma y Product Card en código | En curso |
| Lun 19 | Guion detallado y ejercicios (`workshop/guion.md`, `workshop/ejercicios.md`) | Pendiente |
| Mar 20 | Guía de una página para POs (`workshop/guia-pos.md`) y ajustes | Pendiente |
| Mié 21 | Ensayo completo de los ejercicios con Claude Code en VS Code | Pendiente |
| Jue 22 | Margen: instalaciones, permisos y vídeo corto de instalación para los POs | Pendiente |
| Vie 23 | **Workshop** | — |

## Agenda propuesta (con material de sobra)

### Día 1: entender el flujo y hablar con Claude Code

| Tiempo | Bloque | Contenido |
|---|---|---|
| 15' | Por qué importa | Diseño → código → producción: dónde se pierde calidad hoy y cómo lo evita un sistema conectado. |
| 25' | Demo del flujo | Figma → GitHub → Storybook → Chromatic con Evergreen en vivo: un cambio recorre los cuatro sitios. |
| 20' | Instalación guiada | VS Code + panel de Claude Code (o vídeo enviado antes). |
| 40' | Primeras conversaciones | Ejercicios de **preguntar**, no de construir: qué componentes hay, qué hace la Product Card, resumen para un sprint review… |
| 10' | Cierre y deberes | Cada PO escribe la idea de un prototipo para el día 2. |

### Día 2: prototipar con Claude Code

| Tiempo | Bloque | Contenido |
|---|---|---|
| 10' | Repaso | Lo aprendido el día 1. |
| 25' | De idea a requisitos | `/ev-prd`: Claude convierte la idea de cada PO en un mini documento de requisitos. |
| 45' | De requisitos a prototipo | `/ev-wireframe`: pantallas clicables con componentes de Evergreen, vistas en el navegador. |
| 25' | Iterar | Pedir cambios: "haz el botón principal más visible", "añade un filtro por *New*"… |
| 15' | Qué hacer con un prototipo | Cómo llevarlo a diseño y desarrollo, y qué **no** es (no es producción). |

### Material extra (por si sobra tiempo)
- Chuleta de buenas peticiones a Claude Code.
- Retos opcionales de prototipado.
- Revisar componentes en Storybook y entender Chromatic.
- Preguntas frecuentes.

## Enlaces del proyecto

- **Storybook publicado:** https://main--6ad355a31aa6572453b3566f.chromatic.com
- **Figma:** Evergreen Foundations, Evergreen Icons y Evergreen DS (componentes), en el equipo *Designing with CODE*
- **Guías del repo:** [`SETUP-FIGMA.md`](../SETUP-FIGMA.md), [`CODE-CONNECT.md`](../CODE-CONNECT.md)

## Decisiones pendientes

- [ ] ¿Repo aparte (`evergreen-workshop`) como sandbox para que los POs prototipen, o rama dentro de este repo?
- [ ] Confirmar con IT que los POs pueden usar este repo público con el Claude Code de la empresa (Bedrock).
- [ ] Fecha y hora exactas del workshop.
