# Ejercicios del workshop

Hay **más ejercicios de los que caben**. Cecilia elegirá unos cuantos en cada bloque; el resto quedan para practicar después.

Cómo usar esta página:
- Copia el **prompt sugerido** (el bloque gris) y pégalo en el panel de Claude Code en VS Code.
- Cambia lo que está entre `<ángulos>` por tu caso.
- Compara lo que obtienes con **qué deberías ver**. Si no se parece, mira las **pistas**.
- Contenido siempre de ejemplo: catálogo de productos, pedidos, devoluciones, favoritos. Nada de datos reales.

Enlaces útiles:
- Storybook: https://main--6ad355a31aa6572453b3566f.chromatic.com
- Figma (componentes): https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS
- Figma (fundamentos): https://www.figma.com/design/M63J2aWwAS4Ec1fjhl4QuU
- Figma (iconos): https://www.figma.com/design/T8Cwl1JJ0lrXnGeihwBcv4

## Resumen

| # | Ejercicio | Día | Nivel | Tiempo aprox. |
|---|---|---|---|---|
| 1.1 | Explorar el sistema | 1 | ● | 5' |
| 1.2 | Encontrar un componente | 1 | ● | 5' |
| 1.3 | ¿Qué componente uso para…? | 1 | ● | 5' |
| 1.4 | Explicar un componente para un sprint review | 1 | ●● | 7' |
| 1.5 | Comparar Figma y Storybook | 1 | ●● | 10' |
| 1.6 | Las etiquetas de la Product Card | 1 | ●● | 7' |
| 1.7 | Una tabla de variantes y estados | 1 | ●● | 7' |
| 1.8 | Criterios de aceptación a partir de un componente | 1 | ●● | 8' |
| 1.9 | Un glosario para el equipo | 1 | ● | 5' |
| 1.10 | Entender la regla de paridad | 1 | ●●● | 8' |
| 2.1 | Afinar la idea antes de construir | 2 | ● | 5' |
| 2.2 | De idea a requisitos con `/ev-prd` | 2 | ●● | 15' |
| 2.3 | Revisar el PRD como un PO exigente | 2 | ●● | 8' |
| 2.4 | Primer prototipo con `/ev-wireframe` | 2 | ●●● | 20' |
| 2.5 | Recorrer el prototipo como usuario | 2 | ● | 5' |
| 2.6 | Añadir una segunda pantalla | 2 | ●● | 10' |
| 2.7 | Iterar: un cambio cada vez | 2 | ●● | 15' |
| 2.8 | Ver el prototipo en móvil | 2 | ● | 5' |
| 2.9 | Describir el handoff | 2 | ●● | 7' |
| R1–R5 | Retos opcionales | — | ●●● | libre |

---

## Día 1: preguntar, no construir

Regla del día: **Claude no cambia archivos**. Si te pide permiso para modificar algo, di que no y recuérdale: *"Solo quiero que me respondas, no cambies archivos."*

### 1.1 · Explorar el sistema

**Objetivo:** tener una visión general de qué hay en el proyecto.

**Prompt sugerido**

```text
Soy Product Owner y no programo. Explícame qué hay en este proyecto como si fuera mi primer día: qué es Evergreen DS, qué tipos de componentes tiene (agrupados por para qué sirven) y dónde puedo verlos. Máximo 10 líneas. No cambies ningún archivo.
```

**Qué deberías ver**
- Que es un sistema de diseño hecho con Next.js y shadcn/ui, en modo claro y con esquinas rectas.
- Grupos de componentes: acciones (botones…), formularios (campos, selectores…), navegación, contenido (tarjetas, tablas…), avisos (alertas, toasts…).
- Una mención a Storybook y a Figma.

**Pistas si te atascas**
- Si la respuesta es muy técnica, añade: *"Sin palabras técnicas, por favor."*
- Si es muy larga, di: *"Resúmelo en 5 viñetas."*

**Buena práctica:** **di quién eres** ("soy PO, no programo"). Claude ajusta el nivel de la respuesta.

### 1.2 · Encontrar un componente

**Objetivo:** saber si existe un componente y cómo se llama.

**Prompt sugerido**

```text
Quiero mostrar un mensaje de aviso cuando un pedido no se ha podido enviar. ¿Hay algún componente en este proyecto que sirva? Dime cómo se llama, qué variantes tiene y cómo encontrarlo en Storybook. No cambies ningún archivo.
```

**Qué deberías ver**
- Uno o varios candidatos: `Alert`, `Sonner`/`Toast`, quizá `Alert Dialog`.
- Diferencia entre ellos (fijo en la página, mensaje flotante, ventana que pide confirmación).
- Cómo buscarlo en Storybook (buscador de la izquierda).

**Pistas si te atascas**
- Abre [Storybook](https://main--6ad355a31aa6572453b3566f.chromatic.com) y escribe el nombre en el buscador para comprobarlo.
- Si propone varios, pregunta: *"¿Cuál recomiendas para este caso y por qué?"*

**Buena práctica:** describe **la necesidad**, no el componente. Claude conoce el catálogo mejor que tú.

### 1.3 · ¿Qué componente uso para…?

**Objetivo:** relacionar necesidades de producto con componentes.

**Prompt sugerido**

```text
Para cada una de estas necesidades, dime qué componente del proyecto usarías y por qué, en una tabla con columnas "Necesidad", "Componente", "Por qué":
1. Elegir talla de un producto
2. Confirmar antes de cancelar un pedido
3. Mostrar el progreso de una devolución
4. Marcar un producto como favorito
5. Ver la lista de pedidos de un cliente
No cambies ningún archivo.
```

**Qué deberías ver**
- Una tabla de 5 filas. Por ejemplo: `Select` o `Toggle Group` / `Radio Group` para la talla, `Alert Dialog` para confirmar, `Progress` para el progreso, `Toggle` o `Button` con icono para favorito, `Table` para pedidos.

**Pistas si te atascas**
- Si no te da tabla, repite: *"En formato tabla, por favor."*
- Si un componente no te convence, pregunta: *"¿Qué alternativa hay?"*

**Buena práctica:** **pide el formato** que necesitas. Una tabla se pega directamente en Confluence o en un documento.

### 1.4 · Explicar un componente para un sprint review

**Objetivo:** convertir información técnica en un mensaje para personas de negocio.

**Prompt sugerido**

```text
Tengo que explicar el componente Button en un sprint review a personas de negocio. Escríbeme un texto de máximo 6 líneas que diga: para qué sirve, qué variantes tiene (con un ejemplo de uso de cada una en una tienda online) y por qué es bueno que todos los equipos usen el mismo. Tono cercano, sin tecnicismos. No cambies ningún archivo.
```

**Qué deberías ver**
- Variantes como principal, secundario, contorno (*outline*), fantasma (*ghost*), destructivo y enlace, con ejemplos ("Añadir a la cesta", "Ver detalles", "Eliminar de favoritos"…).
- Un argumento de consistencia: el cliente reconoce las acciones, menos errores, menos trabajo.

**Pistas si te atascas**
- Cambia `Button` por otro componente: `Card`, `Badge`, `Tabs`, `Dialog`.
- Si suena a manual técnico: *"Reescríbelo como si se lo contaras a alguien de ventas."*

**Buena práctica:** di **quién va a leerlo**. El mismo contenido cambia mucho según el público.

### 1.5 · Comparar Figma y Storybook

**Objetivo:** entender en la práctica qué significa "idéntico" entre diseño y código.

> Este ejercicio necesita el conector de Figma (MCP). Si no lo tienes, **hazlo a mano**: abre el componente en Figma y en Storybook y usa la lista de criterios del prompt.

**Prompt sugerido**

```text
Quiero comprobar si el componente Badge es igual en Figma y en código. Usa estos criterios de la regla de paridad del proyecto (están en CLAUDE.md): color, tamaño, espaciado, radio, tipografía, bordes y sombras, variantes y estados, y estructura. Dame una tabla con una fila por criterio y columnas "Criterio", "Figma", "Código", "¿Coincide?". Si no puedes ver Figma, dime qué tendría que mirar yo en cada criterio. No cambies ningún archivo.
```

Archivo de Figma: https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS

**Qué deberías ver**
- Una tabla de 8 filas con ✅ o ❌.
- Radio 0 (esquinas rectas) en ambos lados.
- Los mismos nombres de variantes en Figma (propiedades) y en código.

**Pistas si te atascas**
- Si Claude no puede ver Figma, compara tú: abre la página del Badge en Figma y la historia del Badge en [Storybook](https://main--6ad355a31aa6572453b3566f.chromatic.com), y rellena la tabla con su ayuda.
- Recuerda: el texto de ejemplo puede ser distinto; lo que importa es la **estructura**.

**Buena práctica:** da a Claude **los criterios** con los que quieres que evalúe. Así la respuesta es comprobable, no una opinión.

### 1.6 · Las etiquetas de la Product Card

**Objetivo:** entender un componente de producto concreto y sus reglas.

**Prompt sugerido**

```text
Explícame la Product Card de este proyecto: qué partes tiene y en qué orden, qué campos son obligatorios u opcionales, y qué etiquetas puede llevar (New, CO · Carry over, Sale, Bestseller, Low stock, Sold out). Para cada etiqueta dime en una tabla: qué significa para el cliente, cómo se ve y si puede combinarse con otras. Si alguna regla no está definida en el código, dímelo en vez de inventarla. No cambies ningún archivo.
```

**Qué deberías ver**
- Partes: imagen, nombre, descripción corta, precio, precio anterior (opcional) y etiquetas.
- Una tabla con las 6 etiquetas.
- Una lista de **reglas sin definir** (por ejemplo: ¿*Sale* sin precio anterior? ¿*Sold out* y *Low stock* a la vez?).

**Pistas si te atascas**
- Si Claude dice que no encuentra la Product Card, puede que aún no esté en el código. Pregunta: *"¿Cómo montarías una tarjeta de producto con Card y Badge?"*
- Las reglas sin definir son oro: llévalas a refinamiento.

**Buena práctica:** pide a Claude que **diga lo que no sabe** ("si no está definido, dímelo"). Reduce las respuestas inventadas.

### 1.7 · Una tabla de variantes y estados

**Objetivo:** saber qué estados existen antes de escribir una historia de usuario.

**Prompt sugerido**

```text
Para el componente Input, dame una tabla con todas sus variantes y estados (por ejemplo: normal, con foco, deshabilitado, con error…). Columnas: "Estado", "Cuándo aparece", "Cómo se ve", "Ejemplo en un formulario de devolución". No cambies ningún archivo.
```

**Qué deberías ver**
- Estados como normal, foco, deshabilitado, error (*aria-invalid*), con texto de ayuda.
- Ejemplos tipo "número de pedido", "motivo de la devolución".

**Pistas si te atascas**
- Prueba con `Checkbox`, `Select` o `Button`.
- Comprueba los estados en Storybook: en cada historia hay controles para cambiarlos.

**Buena práctica:** los **estados** (error, vacío, cargando, deshabilitado) son lo que más se olvida en una historia. Pregúntalos siempre.

### 1.8 · Criterios de aceptación a partir de un componente

**Objetivo:** usar Claude para escribir mejores historias de usuario.

**Prompt sugerido**

```text
Escribe una historia de usuario con criterios de aceptación (formato Dado / Cuando / Entonces) para esta funcionalidad: "Como cliente, quiero marcar productos como favoritos desde la tarjeta de producto". Usa los componentes que existen en este proyecto y menciona cuáles. Incluye los estados de error y vacío. Máximo 8 criterios. No cambies ningún archivo.
```

**Qué deberías ver**
- Una historia con 5–8 criterios Dado / Cuando / Entonces.
- Componentes reales nombrados (`Button`, `Toggle`, `Sonner`, `Empty`…).
- Casos como "sin sesión iniciada", "error al guardar", "lista vacía".

**Pistas si te atascas**
- Si hay demasiados criterios: *"Quédate con los 5 más importantes."*
- Pide el formato de tu herramienta: *"Dámelo listo para pegar en Jira."*

**Buena práctica:** pide **límites** ("máximo 8"). Sin límites, Claude tiende a escribir de más.

### 1.9 · Un glosario para el equipo

**Objetivo:** perder el miedo a las palabras técnicas.

**Prompt sugerido**

```text
Hazme un glosario de 10 palabras técnicas que aparecen en este proyecto y que un Product Owner debería entender (por ejemplo: componente, token, variante, Storybook, Chromatic, rama, pull request). Para cada una: definición en una frase sencilla y un ejemplo de este proyecto. Formato tabla. No cambies ningún archivo.
```

**Qué deberías ver**
- Una tabla de 10 filas con definiciones claras y ejemplos de Evergreen.

**Pistas si te atascas**
- Si una definición no se entiende: *"Explícame 'token' con una metáfora."*

**Buena práctica:** si no entiendes una palabra, **pregúntala**. Claude no se cansa.

### 1.10 · Entender la regla de paridad

**Objetivo:** entender por qué el sistema evita que el producto salga distinto al diseño.

**Prompt sugerido**

```text
En CLAUDE.md hay una "Regla de paridad Figma ↔ código". Explícamela en 5 pasos sencillos, como si fuera el recorrido de un cambio desde que una diseñadora lo hace en Figma hasta que llega al producto. Para cada paso: quién lo hace, dónde (Figma, GitHub, Storybook, Chromatic) y qué se comprueba. Termina con una frase sobre qué gana un Product Owner con esto. No cambies ningún archivo.
```

**Qué deberías ver**
- Los pasos: cambio en Figma → cambio en código en una rama → pull request con tabla de comparación → Chromatic compara capturas → una persona aprueba y se fusiona.
- Que Claude **no** fusiona en `main`: lo aprueba una persona.

**Pistas si te atascas**
- Pide un dibujo: *"Hazme un diagrama sencillo con flechas en texto."*

**Buena práctica:** pide a Claude que **lea un documento concreto** ("en CLAUDE.md…"). Las respuestas se basan en lo que hay, no en lo que imagina.

---

## Día 2: prototipar

Hoy Claude **sí crea archivos**, pero solo en tu prototipo. Antes de empezar, trabaja en tu rama o en el repo sandbox (Cecilia te dirá cuál):

```text
Crea una rama llamada prototipo-<tu-nombre> y cámbiate a ella. No subas nada a GitHub.
```

### 2.1 · Afinar la idea antes de construir

**Objetivo:** convertir la idea de los deberes en algo pequeño y concreto.

**Prompt sugerido**

```text
Esta es mi idea para un prototipo: <pega aquí tu idea de 3-5 líneas>. Hazme 5 preguntas que me ayuden a concretarla y a recortarla para que quepa en un prototipo de 1 o 2 pantallas. No crees archivos todavía.
```

**Qué deberías obtener**
- 5 preguntas sobre usuario, problema, pantalla principal, acciones clave y qué dejar fuera.

**Pistas si te atascas**
- ¿No tienes idea? Usa una de estas: *lista de favoritos*, *seguimiento de un pedido*, *solicitar una devolución*, *filtrar el catálogo por etiquetas*, *aviso de "vuelve a estar disponible"*.

**Buena práctica:** **pregunta antes de construir**. Cinco minutos de preguntas ahorran media hora de rehacer.

### 2.2 · De idea a requisitos con `/ev-prd`

**Objetivo:** tener un mini documento de requisitos (PRD) de tu idea.

**Prompt sugerido**

```text
/ev-prd
```

Elige **Guided walkthrough** (guiado) y contesta a las 5 preguntas. Cuando te ofrezca investigación de mercado, di que **no** por hoy.

Alternativa rápida (sin preguntas):

```text
/ev-prd Una pantalla de favoritos para una tienda online: el cliente ve los productos que ha guardado, puede quitarlos o añadirlos a la cesta, y ve si alguno está en Sale o Sold out.
```

**Qué deberías obtener**
- Un PRD con: resumen, usuario objetivo, problema, objetivos con métrica, funcionalidades (MVP / siguiente / más adelante), flujos, **fuera de alcance** y preguntas abiertas.
- Se guarda en `docs/prd.json` y se ve en el navegador en `http://localhost:3000/ev/prd` (o la dirección que te diga Claude).

**Pistas si te atascas**
- Si Claude dice que **ya existe un PRD** y te recomienda refinarlo: responde *"Quiero uno nuevo para mi idea que sustituya al actual."*
- Si no ves el navegador: *"Arranca el proyecto y dime la dirección para ver el PRD."*
- Si una respuesta tuya era vaga, puedes corregir después: *"Cambia el usuario objetivo a…"*.

**Buena práctica:** usa las **skills** (`/ev-…`). Son recetas probadas: hacen las preguntas correctas y guardan el resultado donde toca.

### 2.3 · Revisar el PRD como un PO exigente

**Objetivo:** usar a Claude como revisor crítico.

**Prompt sugerido**

```text
Revisa el PRD que acabamos de crear como lo haría un Product Owner exigente. Dime: 3 cosas que están bien, 3 cosas vagas o difíciles de medir, y 2 riesgos. Después propón cómo recortar el MVP para que quepa en un prototipo de 1 o 2 pantallas. No cambies nada hasta que te diga.
```

**Qué deberías obtener**
- Una crítica concreta y una propuesta de recorte.

**Pistas si te atascas**
- Si estás de acuerdo con el recorte: *"Aplica el recorte al PRD."*

**Buena práctica:** "**no cambies nada hasta que te diga**" te deja revisar antes de que Claude toque archivos.

### 2.4 · Primer prototipo con `/ev-wireframe`

**Objetivo:** pasar de los requisitos a una pantalla clicable con componentes reales.

**Prompt sugerido**

```text
/ev-wireframe
```

Claude leerá tu PRD y te preguntará. Respuestas recomendadas:
- ¿Qué hacer? → **Pick specific screens** (elige 1 pantalla, la más importante).
- Preguntas de aclaración → **Here are my answers** y escribe 2–3 líneas, o **Just go for it** si tienes prisa.

Al terminar:

```text
Arranca el proyecto y dime la dirección para verlo.
```

**Qué deberías ver**
- Una pantalla en grises en `http://localhost:3000` hecha con componentes del sistema (tarjetas, botones, etiquetas…), con esquinas rectas.
- Que puedes **hacer clic** (botones, pestañas, navegación).
- Un archivo nuevo `docs/wireframe-log.md` con lo que se hizo.

**Pistas si te atascas**
- Tarda unos minutos: es normal. Acepta los permisos para crear archivos y arrancar el proyecto.
- Si la página sale en blanco o con error, copia el error y pégalo: *"Me sale este error en el navegador: <error>. ¿Lo arreglas?"*
- Si quieres algo más pequeño: *"Solo la pantalla principal, con 4 productos de ejemplo."*

**Buena práctica:** **empieza pequeño**. Una pantalla que funciona vale más que cinco a medias.

### 2.5 · Recorrer el prototipo como usuario

**Objetivo:** mirar el prototipo con ojos de cliente antes de pedir cambios.

**Qué haces (sin Claude)**
1. Abre `http://localhost:3000`.
2. Haz la tarea principal de tu PRD como lo haría un cliente.
3. Apunta: 2 cosas que funcionan, 2 que te frenan, 1 que falta.

**Prompt sugerido (después)**

```text
He probado el prototipo. Esto me frena: <tus 2 cosas>. Esto falta: <tu cosa>. Antes de cambiar nada, propón cómo lo resolverías, con una frase por punto.
```

**Qué deberías obtener**
- Propuestas concretas que puedes aceptar o no.

**Buena práctica:** **prueba primero, pide después**. Así tus peticiones salen de un problema real.

### 2.6 · Añadir una segunda pantalla

**Objetivo:** conectar dos pantallas en un flujo.

**Prompt sugerido**

```text
Añade una segunda pantalla al prototipo: el detalle de un producto. Al hacer clic en una tarjeta de la pantalla principal, se abre el detalle; desde el detalle, un enlace "Volver" lleva a la principal. Usa solo componentes del sistema. Cuando acabes, dime qué dirección tengo que abrir.
```

**Qué deberías ver**
- Dos pantallas enlazadas que se recorren con clics.

**Pistas si te atascas**
- Si no navega: *"Al hacer clic en la tarjeta no pasa nada. ¿Puedes revisarlo?"*

**Buena práctica:** describe **el recorrido** (dónde hago clic y a dónde voy), no solo la pantalla.

### 2.7 · Iterar: un cambio cada vez

**Objetivo:** mejorar el prototipo conversando.

**Prompts sugeridos (uno cada vez, recargando el navegador entre uno y otro)**

```text
Haz el botón principal más visible. Explícame qué has cambiado.
```

```text
Añade un filtro por la etiqueta New encima de la lista de productos.
```

```text
Cuando un producto está en Sale, muestra el precio anterior tachado al lado del precio actual.
```

```text
Si un producto está Sold out, desactiva su botón de añadir y explica por qué en un texto pequeño.
```

```text
Añade un estado vacío para cuando no hay productos que mostrar, con un mensaje y un botón para volver al catálogo.
```

```text
Deshaz el último cambio.
```

**Qué deberías ver**
- Cada cambio, uno a uno, en el navegador.
- Que Claude usa los **colores y variantes del sistema** (no inventa colores nuevos).

**Pistas si te atascas**
- Si el cambio no se ve: recarga el navegador (`Ctrl+R` / `Cmd+R`).
- Si Claude cambia más cosas de las pedidas: *"Solo quería cambiar X. Deja el resto como estaba."*
- Si pides un color concreto ("ponlo rojo"), Claude te propondrá la variante del sistema más parecida (por ejemplo, la destructiva). Es la regla funcionando.

**Buena práctica:** **un cambio por petición** y describe el problema ("la gente no ve el botón") además de la solución.

### 2.8 · Ver el prototipo en móvil

**Objetivo:** comprobar cómo se ve en pantallas pequeñas.

**Qué haces**
1. En el navegador, abre las herramientas de desarrollo (`F12`, o `Cmd+Opción+I` en Mac) y pulsa el icono de móvil. O simplemente estrecha la ventana.
2. Mira tu pantalla a 375 px de ancho.

**Prompt sugerido**

```text
En móvil (375 px de ancho) el prototipo se ve así: <describe qué falla>. Ajústalo para que en móvil se vea en una sola columna y el botón principal esté siempre visible.
```

**Qué deberías ver**
- Una columna en móvil y varias en escritorio.

**Buena práctica:** el sistema está pensado **móvil primero** (375 → 768 → 1280 px). Pruébalo siempre en los dos tamaños.

### 2.9 · Describir el handoff

**Objetivo:** preparar el paso del prototipo a diseño y desarrollo.

**Prompt sugerido**

```text
Prepara un resumen de handoff de este prototipo para la diseñadora y el equipo de desarrollo. Incluye: objetivo del prototipo, pantallas y recorrido, componentes del sistema usados, decisiones tomadas, preguntas abiertas, y qué NO está resuelto (datos reales, accesibilidad, casos de error, textos definitivos). Máximo una página. Recuerda que es un prototipo, no código de producción. No cambies archivos.
```

**Qué deberías obtener**
- Un resumen de una página listo para pegar en un ticket o en un documento.
- Una lista clara de lo que **falta** para producción.

**Pistas si te atascas**
- Claude puede usar `docs/wireframe-log.md` como memoria: *"Usa el registro del wireframe para el resumen."*

**Buena práctica:** un prototipo **no es producción**. El siguiente paso es diseño en Figma y código revisado, con Chromatic en verde.

---

## Retos opcionales

Para quien acabe pronto o quiera practicar después del workshop.

### R1 · Flujo de devolución en 3 pasos

```text
Prototipa un flujo de devolución en 3 pasos: 1) elegir el pedido, 2) elegir los productos y el motivo, 3) confirmación. Usa un indicador de progreso arriba y solo componentes del sistema. Pregúntame lo que necesites antes de empezar.
```

**Buena práctica:** deja que Claude **pregunte primero** en flujos de varios pasos.

### R2 · Catálogo con todas las etiquetas

```text
Crea una pantalla de catálogo con 8 tarjetas de producto de ejemplo que cubran todas las etiquetas: New, CO · Carry over, Sale (con precio anterior tachado), Bestseller, Low stock y Sold out. Añade filtros por etiqueta arriba. Después dime qué combinaciones de etiquetas te parecen raras o contradictorias.
```

**Buena práctica:** usa el prototipo para **descubrir reglas de negocio** que nadie ha definido.

### R3 · Dos versiones para comparar

```text
Haz dos versiones de la pantalla principal de mi prototipo en dos direcciones distintas (/version-a y /version-b): una centrada en la imagen del producto y otra centrada en el precio y las etiquetas. Dime las diferencias en una tabla.
```

**Buena práctica:** prototipar **opciones** para que el equipo elija, en vez de discutir en abstracto.

### R4 · Seguimiento de pedido

```text
Prototipa una pantalla de seguimiento de pedido: estado actual (preparando, enviado, en reparto, entregado), fecha estimada, lista de productos del pedido y un botón para pedir ayuda que abra un diálogo. Usa datos de ejemplo.
```

**Buena práctica:** pide **datos de ejemplo realistas** (pero inventados) para que el prototipo se entienda.

### R5 · Auditoría rápida de un componente

```text
Elige el componente Card y revisa su historia de Storybook (src/stories/components/card.stories.tsx). ¿Están representadas todas sus variantes y estados? ¿Falta algún caso típico de una tienda online? Responde en una lista. No cambies archivos.
```

**Buena práctica:** Storybook es documentación viva. Pregúntate **qué falta**, no solo qué hay.
