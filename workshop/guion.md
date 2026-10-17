# Guion del workshop: diseñar y prototipar con Claude Code

Guion para Cecilia. Sigue la agenda de [`README.md`](README.md). Cada bloque tiene: **mensajes clave** (lo que dices, en frases cortas), **en pantalla** (qué enseñas), **los POs hacen**, una **pregunta de transición** y notas para **si sobra / si falta tiempo**.

Materiales relacionados:
- [`ejercicios.md`](ejercicios.md): ejercicios con prompts para copiar y pegar (hay más de los que caben).
- [`guia-pos.md`](guia-pos.md): la chuleta de una página para que se la lleven.
- [`instalacion.md`](instalacion.md): la guía de instalación que se envía antes.

## Enlaces que vas a usar

| Qué | Enlace |
|---|---|
| Storybook publicado | https://main--6ad355a31aa6572453b3566f.chromatic.com |
| Figma: Evergreen Foundations (colores, tipografía, espaciado) | https://www.figma.com/design/M63J2aWwAS4Ec1fjhl4QuU |
| Figma: Evergreen Icons (178 iconos) | https://www.figma.com/design/T8Cwl1JJ0lrXnGeihwBcv4 |
| Figma: Evergreen DS (componentes) | https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS |
| Repo en GitHub | https://github.com/cecivera/designing-with-code |
| Pull requests del repo | https://github.com/cecivera/designing-with-code/pulls |
| Prototipo local (cuando está arrancado) | http://localhost:3000 |

Ten estas pestañas abiertas y en este orden antes de empezar: **Figma DS → GitHub → Storybook → Chromatic → VS Code**.

---

## Antes del workshop

### Checklist de preparación

| Cuándo | Qué | Hecho |
|---|---|---|
| **2 días antes** (miércoles) | Enviar [`instalacion.md`](instalacion.md) a los POs (y el vídeo corto si está listo). Pedir que respondan con ✅ o con una captura del error. | ☐ |
| 2 días antes | Confirmar con IT que los POs tienen acceso a Claude por **AWS Bedrock** y que pueden usar este repo público. | ☐ |
| 2 días antes | Confirmar que IT puede instalar **VS Code** y **Node.js 20+** a quien no tenga permisos. | ☐ |
| 1 día antes | Revisar quién ha respondido ✅. Escribir a quien no lo haya hecho. | ☐ |
| 1 día antes | Probar en **tu** VS Code: extensión Claude Code de Anthropic, *Disable Login Prompt* marcado, acceso Bedrock funcionando. | ☐ |
| 1 día antes | Con el repo abierto: `npm install` sin errores y `npm run dev` abre http://localhost:3000. | ☐ |
| 1 día antes | Hacer de principio a fin los ejercicios 1.1, 1.4, 1.8, 2.2, 2.3 y 2.4 de [`ejercicios.md`](ejercicios.md). Apuntar cuánto tarda cada uno. | ☐ |
| 1 día antes | Preparar la **demo del flujo** (ver Día 1, bloque 2): una rama con un cambio pequeño y su pull request abierta, con Chromatic marcando el cambio. | ☐ |
| 1 día antes | Comprobar que la Product Card está en Storybook. Si aún no está, usar `Card` + `Badge` en los ejercicios y decirlo con naturalidad ("está en camino"). | ☐ |
| 1 día antes | Decidir dónde prototipan los POs: rama propia dentro del repo o repo sandbox (`evergreen-workshop`). Ver "Decisiones pendientes" del README. | ☐ |
| El mismo día, 15' antes | Abrir la videollamada, compartir pantalla de prueba, tener las pestañas en orden y el zoom de VS Code al 125–150 %. | ☐ |
| El mismo día | Tener a mano la guía [`guia-pos.md`](guia-pos.md) para pegar el enlace en el chat al final. | ☐ |

### Plan B si a alguien le falla la instalación

- **No se arregla en directo más de 3 minutos.** Si no funciona a la primera, esa persona se **empareja** con otra que comparta pantalla. Hacen los ejercicios a medias: una teclea, la otra dicta. Cambian de rol a mitad.
- Si fallan **muchas** instalaciones a la vez (problema de Bedrock general): tú compartes pantalla y los POs **dictan los prompts por el chat**. Tú los pegas y comentáis el resultado. Los objetivos se cumplen igual.
- Apunta quién tuvo problemas y qué error salió, para resolverlo con IT antes del día 2.
- Si falla tu propio acceso: ten preparada una segunda persona (alguien de desarrollo) que pueda compartir su VS Code, y capturas de las respuestas del ensayo como último recurso.

### Reglas de la sala (decirlas al principio del día 1)

1. Cámaras encendidas si se puede. Micro silenciado si no hablas.
2. **No hay preguntas tontas.** Si algo no se entiende, es culpa de la explicación.
3. Usamos solo **contenido de ejemplo** (catálogo, pedidos, devoluciones…). Nada de datos reales de clientes ni información interna.
4. Claude puede equivocarse. Parte del aprendizaje es **revisar lo que responde**.

---

## Día 1: entender el flujo y hablar con Claude Code

**Duración:** 110' + 10' de margen · **Objetivos del día:** 1 (entender el flujo) y 2 (hablar con Claude Code).

### Bloque 1 · Por qué importa · 15'

**Mensajes clave**
- "¿Os ha pasado que el producto que sale no se parece al diseño que aprobasteis?" (deja que respondan, 2–3 ejemplos).
- "Eso pasa porque el diseño y el código viven en sitios distintos y cada uno se copia a mano del otro. En cada copia se pierde algo: un color, un margen, un estado que nadie dibujó."
- "Un sistema de diseño **conectado** tiene una sola fuente para cada pieza. Si cambia en Figma, cambia en código, y una máquina comprueba que se parecen."
- "Hoy no vais a aprender a programar. Vais a aprender a **preguntar** a quien sí sabe leer el código: Claude."

**En pantalla**
- Una imagen o captura sencilla: "Diseño aprobado" vs "Lo que salió" (prepárala con un ejemplo inventado: un botón con otro color, una tarjeta sin el precio tachado).
- Dibuja (o enseña) la cadena: **Figma → GitHub → Storybook → Chromatic → producto**.

**Los POs hacen**
- En el chat, cada uno escribe **un ejemplo** de "salió distinto al diseño" que hayan vivido (sin nombres de producto reales si no quieren).

**Pregunta de transición**
> "¿En qué punto de esa cadena creéis que se perdió vuestro ejemplo? Vamos a ver la cadena en vivo."

**Si sobra tiempo:** lee en voz alta 2 ejemplos del chat y pregunta "¿quién se dio cuenta y cuándo?". La respuesta suele ser "un cliente, tarde". Esa es la motivación.
**Si falta tiempo:** salta los ejemplos del chat; quédate con la frase "una sola fuente para cada pieza".

### Bloque 2 · Demo del flujo · 25'

Objetivo: que vean **un mismo cambio** pasar por los cuatro sitios.

**Preparación (el día antes):** elige un cambio pequeño y visible. Ejemplos:
- Cambiar el texto o el tono de la etiqueta *Low stock* de la Product Card.
- Añadir un tamaño o variante a `Badge`.
- Cambiar el espaciado interior de `Card`.

Haz el cambio en Figma y pide a Claude que lo lleve al código en una rama con su pull request. Deja la PR **abierta** con Chromatic en rojo (cambio visual pendiente de aceptar).

**Recorrido en pantalla (≈4' por paso)**

| Paso | Dónde | Qué enseñas | Qué dices |
|---|---|---|---|
| 1 | [Figma Evergreen DS](https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS) | La página del componente, sus variantes y estados. Luego [Foundations](https://www.figma.com/design/M63J2aWwAS4Ec1fjhl4QuU): las variables de color con los mismos nombres que en código. | "Aquí se diseña. Cada color es una variable con nombre, no un código de color suelto. El código usa **los mismos nombres**." |
| 2 | [GitHub](https://github.com/cecivera/designing-with-code/pulls) | La pull request de la demo: el título, la descripción con la **tabla de paridad** (✅/❌ por criterio) y los checks. | "Aquí vive el código. Nadie toca la versión buena directamente: cada cambio es una **propuesta** (pull request) que alguien revisa. Claude no puede aprobar sus propios cambios." |
| 3 | [Storybook](https://main--6ad355a31aa6572453b3566f.chromatic.com) | Busca el componente en el buscador de la izquierda. Enseña sus historias (variantes) y el panel de controles. | "Esto es el **catálogo vivo** de componentes, hecho con el código real. Lo que veis aquí es exactamente lo que verá el cliente." |
| 4 | Chromatic (desde el check de la PR) | La comparación antes/después, con las diferencias marcadas. Enseña el botón de aceptar. | "Chromatic hace una **foto** de cada componente y la compara con la anterior. Si algo cambia, se para todo hasta que una persona dice 'sí, era intencionado'." |
| 5 | Vuelta a GitHub | Acepta en Chromatic → el check se pone verde → (no fusiones en directo si no quieres; explícalo). | "Solo cuando Figma y código coinciden, y alguien lo ha aprobado, llega a producción. Así no se cuela 'casi igual'." |

**Mensaje de cierre del bloque**
- "La regla del proyecto es sencilla: **ningún componente se publica si no coincide con Figma**. Y 'coincide' tiene una lista: color, tamaño, espaciado, radio, tipografía, bordes, variantes y estructura."
- "¿Qué ganáis vosotros como POs? Que lo que aprobáis en diseño es lo que sale. Y que podéis **preguntar** en cualquier momento qué hay y cómo funciona."

**Los POs hacen**
- Abren el [Storybook](https://main--6ad355a31aa6572453b3566f.chromatic.com) en su navegador y buscan un componente que reconozcan (botón, tabla, tarjeta).

**Pregunta de transición**
> "Ahora que sabéis dónde vive cada cosa, ¿qué le preguntaríais a alguien que se sabe el código de memoria? Vamos a dejarlo listo."

**Si sobra tiempo:** enseña la página de [Evergreen Icons](https://www.figma.com/design/T8Cwl1JJ0lrXnGeihwBcv4) (178 iconos) y explica que también están conectados al código. O abre en Figma un componente y enseña el enlace a su historia de Storybook.
**Si falta tiempo:** junta los pasos 2 y 4: abre directamente la PR y enseña el check de Chromatic desde ahí. No enseñes Foundations.

### Bloque 3 · Instalación guiada · 20'

**Mensajes clave**
- "Claude Code es un asistente que **lee los archivos del proyecto** y responde sobre ellos. En VS Code aparece como un chat."
- "Hoy solo le vamos a **preguntar**. No vamos a dejar que cambie nada."

**En pantalla**
- Tu VS Code con el proyecto abierto. Enseña: la lista de archivos a la izquierda (sin entrar en detalle), el icono de Claude, el panel de chat.
- Enseña dónde está **Disable Login Prompt** en los ajustes.
- Haz la **primera prueba** de [`instalacion.md`](instalacion.md#paso-6-primera-prueba) en directo.
- Explica la **ventana de permisos**: "Cuando Claude quiere hacer algo (ejecutar un comando, cambiar un archivo), os pregunta. Leed siempre qué va a hacer antes de aceptar. Si no lo entendéis, decid que no y preguntadle qué es."

**Los POs hacen**
- Abren VS Code + Claude Code y lanzan la primera prueba:

  ```text
  Hola. Explícame en 3 frases qué es este proyecto y cuántos componentes tiene.
  ```

- Escriben ✅ en el chat de la videollamada cuando les responda.

**Si alguien falla:** aplica el **Plan B** (pareja con pantalla compartida). No pares la sala.

**Pregunta de transición**
> "Ya responde. ¿Qué es lo primero que os gustaría saber de este sistema de diseño?"

**Si sobra tiempo:** enseña que se puede escribir `/` en el chat para ver comandos y las skills `ev-` (solo enseñar, se usan mañana).
**Si falta tiempo:** si todos enviaron ✅ antes del workshop, reduce este bloque a 5' y pasa a los ejercicios.

### Bloque 4 · Primeras conversaciones · 40'

Ejercicios de **preguntar, no construir**. Usa los de [`ejercicios.md`, Día 1](ejercicios.md#día-1-preguntar-no-construir).

**Mensajes clave (antes de empezar, 3')**
- "Una buena petición tiene cuatro partes: **contexto**, **objetivo**, **formato** y **límites**." (Enséñalo con un ejemplo de [`guia-pos.md`](guia-pos.md).)
- "Pedid el formato que necesitáis: tabla, 3 frases, lista para Jira, texto para un sprint review."
- "Si la respuesta no os sirve, no empecéis de cero: decid **qué** no os sirve."
- "Añadid siempre 'no cambies archivos' cuando solo queráis preguntar."

**Ritmo**

| Min | Qué | Ejercicio |
|---|---|---|
| 0–3 | Explicación de la buena petición | — |
| 3–10 | Todos a la vez, el mismo ejercicio | **1.1** Explorar el sistema |
| 10–17 | Todos a la vez | **1.2** Encontrar un componente |
| 17–27 | Por libre, cada uno a su ritmo | **1.4** Explicar un componente para un sprint review y **1.6** Las etiquetas de la Product Card |
| 27–35 | Puesta en común: 2–3 POs comparten pantalla y enseñan su mejor respuesta | — |
| 35–40 | Tú haces en directo **1.5** Comparar Figma y Storybook (si tienes el MCP de Figma) | **1.5** |

**En pantalla:** tu VS Code mientras explicas; luego la pantalla de quien comparta.

**Qué observar y comentar**
- ¿Alguien recibió una respuesta muy larga? → "Pedid 'en 5 líneas' o 'en una tabla'."
- ¿Alguien recibió algo que no cuadra con Storybook? → "Comprobadlo siempre en Storybook. Claude puede equivocarse."
- ¿Claude pidió permiso para algo? → "¿Qué iba a hacer? ¿Hacía falta para una pregunta?"

**Pregunta de transición**
> "¿Qué pregunta os ha dado la respuesta más útil para vuestro día a día? Escribidla en el chat."

**Si sobra tiempo:** ejercicios **1.7** (tabla de estados), **1.8** (criterios de aceptación) o **1.9** (glosario para el equipo).
**Si falta tiempo:** quita los ejercicios por libre y haz solo 1.1, 1.2 y 1.4 todos juntos. La puesta en común, mínimo con 1 persona.

### Bloque 5 · Cierre y deberes · 10'

**Mensajes clave**
- "Hoy habéis visto **dónde vive** cada cosa y cómo **preguntar**. Mañana vamos a **construir**: de una idea a un prototipo clicable."
- "Los prototipos usarán los componentes reales del sistema. Por eso se parecerán al producto final."

**Deberes (dilo y pégalo en el chat)**

> Para mañana, escribe en 3–5 líneas la idea de un prototipo. Usa contenido de ejemplo (nada interno). Responde a:
> 1. ¿Qué pantalla o flujo quieres probar?
> 2. ¿Para quién es y qué problema resuelve?
> 3. ¿Qué tiene que poder hacer la persona usuaria?
>
> Ideas si no se te ocurre nada: lista de favoritos, seguimiento de un pedido, solicitar una devolución, filtrar el catálogo por etiquetas (*New*, *Sale*, *Bestseller*), aviso de "vuelve a estar disponible".

**Los POs hacen**
- Una frase cada uno en el chat: "Hoy me llevo…".
- Quien tuvo problemas de instalación: queda contigo o con IT antes de mañana.

**Si sobra tiempo:** que cada PO lea su idea en voz alta y la sala diga si cabe en 45'.
**Si falta tiempo:** pega los deberes en el chat y cierra.

---

## Día 2: prototipar con Claude Code

**Duración:** 120' · **Objetivo del día:** 3 (prototipar con Claude Code).

**Antes de empezar (tú, 15' antes):**
- Que cada PO trabaje en su **rama** o en el **repo sandbox** (según lo decidido). Si es rama, pídeles en el bloque 1 que le digan a Claude: *"Crea una rama llamada `prototipo-<tu-nombre>` y trabaja ahí. No subas nada."*
- Ten preparado un prototipo propio ya hecho (ensayo del miércoles) por si alguien se queda sin tiempo y quiere ver el resultado final.

### Bloque 1 · Repaso · 10'

**Mensajes clave**
- "Ayer: la cadena **Figma → GitHub → Storybook → Chromatic**, y cómo preguntar a Claude."
- "Hoy usamos dos **skills** de Evergreen. Una skill es una receta que Claude ya sabe seguir: `/ev-prd` convierte una idea en requisitos y `/ev-wireframe` convierte requisitos en pantallas."
- "Hoy sí vamos a dejar que Claude **cree archivos**. Pero solo en vuestro prototipo, nunca en la versión buena."

**Los POs hacen**
- Quiz rápido en el chat (respuestas de una palabra):
  1. ¿Dónde se ve el catálogo vivo de componentes? (*Storybook*)
  2. ¿Qué compara fotos de antes y después? (*Chromatic*)
  3. ¿Qué cuatro partes tiene una buena petición? (*contexto, objetivo, formato, límites*)
- Crear su rama (si aplica).

**Pregunta de transición**
> "¿Quién tiene ya su idea? Vamos a convertirla en requisitos."

**Si sobra tiempo:** que alguien enseñe la mejor respuesta que obtuvo ayer.
**Si falta tiempo:** solo el quiz, sin comentarios.

### Bloque 2 · De idea a requisitos (`/ev-prd`) · 25'

**Mensajes clave**
- "Un prototipo sin requisitos es un dibujo bonito. Primero decidimos **qué** y **para quién**."
- "`/ev-prd` os hará preguntas, una a una. Contestad como lo haríais en un refinamiento: corto y concreto."
- "Lo más valioso es la sección de **qué NO hacemos**. Eso mantiene el prototipo pequeño."

**En pantalla (5')**
- Haz tú el ejercicio **2.2** en directo con una idea de ejemplo ("lista de favoritos"). Enseña:
  - Que escribes `/ev-prd` y eliges el modo **guiado**.
  - Cómo responde a las 5 preguntas.
  - El resultado en http://localhost:3000/ev/prd (o la dirección que diga Claude) y el archivo `docs/prd.json`.
- Recuerda: si ofrece hacer investigación de mercado, para el workshop decid **que no** (ahorra tiempo).
- Aviso: el repo ya trae un `docs/prd.json` de ejemplo, así que Claude puede recomendar el modo *Refine*. Decid que queréis **un PRD nuevo que sustituya al actual** (en vuestra rama no pasa nada).

**Los POs hacen (15')**
- Ejercicio **2.1** (afinar la idea) si su idea es difusa, y luego **2.2** con su propia idea.

**Puesta en común (5')**
- Una persona lee en voz alta su "qué NO hacemos".

**Pregunta de transición**
> "Ya sabéis qué queréis construir. ¿Cuál es la pantalla más importante? Esa es la que vamos a prototipar primero."

**Si sobra tiempo:** ejercicio **2.3** (revisar el PRD como un PO exigente).
**Si falta tiempo:** usad el modo **rápido**: `/ev-prd <idea en una frase>` (sin preguntas).

### Bloque 3 · De requisitos a prototipo (`/ev-wireframe`) · 45'

**Mensajes clave**
- "`/ev-wireframe` lee vuestro PRD y **pregunta antes de construir**. Contestad: qué pantallas, qué interacciones, y si queréis 'tira para adelante'."
- "Usa **solo componentes del sistema** y sus colores. Por eso el prototipo parece una app real en grises, no un boceto."
- "Va a pediros permiso para crear archivos y arrancar el proyecto. Leed y aceptad."
- "Tarda unos minutos. Mientras, mirad qué archivos crea: así sabréis qué es cada cosa."

**En pantalla (8')**
- Ejercicio **2.4** en directo con tu PRD de ejemplo. Enseña:
  - Las preguntas que hace y cómo respondes.
  - Que al terminar pides: *"Arranca el proyecto y dime la dirección para verlo."*
  - El prototipo en http://localhost:3000 y que se puede **hacer clic**.

**Los POs hacen (30')**
- Ejercicio **2.4** con su PRD. Luego **2.5** (recorrer el prototipo como usuario).
- Tú vas pasando por cada persona: "¿Qué ves? ¿Qué te sorprende?". Si alguien se atasca más de 5', comparte tu prototipo de ejemplo y que siga iterando sobre él.

**Puesta en común (7')**
- 2 POs comparten pantalla y hacen clic en su prototipo. La sala dice una cosa que funciona y una que cambiaría.

**Pregunta de transición**
> "Lo que habéis dicho que cambiaríais, ¿cómo se lo pediríais a Claude? Vamos a hacerlo."

**Si sobra tiempo:** ejercicio **2.6** (añadir una segunda pantalla y navegar entre ellas).
**Si falta tiempo:** limita a **una sola pantalla**: *"Solo la pantalla principal, nada más."*

### Bloque 4 · Iterar · 25'

**Mensajes clave**
- "Iterar es **conversar**. Un cambio por petición. Si pedís diez cosas a la vez, alguna saldrá mal y no sabréis cuál."
- "Describid el problema, no solo la solución: 'la gente no ve el botón de añadir' es mejor que 'pon el botón rojo'."
- "Si algo sale peor, decid: *'Deshaz el último cambio'*."
- "Fijaos en que Claude **no inventa colores**: usa los del sistema. Si le pedís un rojo, os dirá qué variante del sistema es la más parecida. Eso es la regla de paridad funcionando."

**En pantalla (3')**
- Una iteración tuya en directo: *"Haz el botón principal más visible"* → recarga → comenta.

**Los POs hacen (17')**
- Ejercicio **2.7**: mínimo 3 iteraciones, de una en una, recargando el navegador después de cada una.
- Ideas para pegar en el chat:
  - "Haz el botón principal más visible."
  - "Añade un filtro por la etiqueta *New*."
  - "Enseña el precio anterior tachado cuando el producto esté en *Sale*."
  - "Si el producto está *Sold out*, desactiva el botón de añadir."
  - "Añade un estado vacío cuando no hay favoritos."

**Puesta en común (5')**
- ¿Qué petición funcionó a la primera? ¿Cuál hubo que repetir? ¿Por qué?

**Pregunta de transición**
> "Tenéis un prototipo que funciona. ¿Y ahora qué hacéis con él el lunes?"

**Si sobra tiempo:** ejercicio **2.8** (ver el prototipo en tamaño móvil).
**Si falta tiempo:** solo 2 iteraciones por persona, sin puesta en común.

### Bloque 5 · Qué hacer con un prototipo · 15'

**Mensajes clave**
- "Un prototipo es una **pregunta**, no una respuesta. Sirve para validar con usuarios y para alinear con diseño y desarrollo."
- "**No es producción.** No tiene datos reales, no está revisado, no tiene accesibilidad ni pruebas, y no pasa por Chromatic."
- "El camino correcto: prototipo → conversación con diseño → diseño en Figma → código con revisión → Chromatic → producción. Es la cadena de ayer."
- "Lo que sí ahorra: semanas de explicar con palabras lo que ahora podéis **enseñar**."

**En pantalla**
- La cadena del día 1, con el prototipo añadido al principio.
- El archivo `docs/wireframe-log.md` de tu ejemplo: "Claude apunta qué se hizo y qué quedó abierto. Es vuestra memoria del prototipo."

**Los POs hacen (7')**
- Ejercicio **2.9**: pedir a Claude un resumen de *handoff* para diseño y desarrollo.
- Una frase en el chat: "Voy a usar esto para…".

**Cierre (3')**
- Pega en el chat el enlace a [`guia-pos.md`](guia-pos.md).
- Encuesta rápida: del 1 al 5, ¿cuánto creéis que lo vais a usar? ¿Qué os falta?
- Recuerda: "**No subáis nada a `main`**. Si queréis guardar vuestro prototipo, pedidme ayuda."

**Si sobra tiempo:** retos opcionales de [`ejercicios.md`](ejercicios.md#retos-opcionales), o preguntas abiertas.
**Si falta tiempo:** salta el ejercicio 2.9 y quédate con los mensajes y el cierre.

---

## Preguntas frecuentes (para tener a mano)

| Pregunta | Respuesta corta |
|---|---|
| "¿Claude puede romper el producto?" | No, si trabajáis en una rama o en el sandbox. Nada llega a `main` sin que lo apruebe una persona y sin que Chromatic esté en verde. |
| "¿Puedo pegar datos de clientes o documentos internos?" | No. Usad contenido de ejemplo. Si dudáis, preguntad a IT por la política de uso de IA. |
| "¿Por qué el prototipo es gris?" | Porque usa los colores neutros del sistema. Es intencionado: así se discute la estructura, no el color. |
| "¿Esto sustituye a diseño?" | No. Ayuda a llegar a diseño con una idea más clara y algo que enseñar. |
| "Claude me ha dicho algo que no cuadra." | Pasa. Pedidle que lo compruebe ("¿en qué archivo lo has visto?") y miradlo en Storybook. |
| "¿Por qué Claude no puede fusionar sus propios cambios?" | Es una regla del proyecto: siempre aprueba una persona. Así nadie (ni humanos ni IA) publica algo sin revisión. |
| "¿Cuánto cuesta usarlo?" | Lo gestiona la empresa a través de Bedrock. Preguntad a IT por los límites de uso. |
