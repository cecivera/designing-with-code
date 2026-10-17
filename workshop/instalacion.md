# Guía de instalación para el workshop

Esta guía es para dejar todo listo **antes** del workshop. Son unos 20–30 minutos. No hace falta saber programar: solo seguir los pasos en orden.

> **Importante:** si algo no sale como dice la guía, **no improvises** (no instales cosas raras ni cambies configuraciones a ciegas). Escribe a IT o al equipo de desarrollo, o avisa a Cecilia. Para eso está el margen de antes del workshop.

## Qué vas a instalar

| Pieza | Qué es | Para qué la usamos |
|---|---|---|
| **VS Code** | Un editor de archivos gratuito de Microsoft. | Es la "casa" donde vive Claude Code. |
| **Extensión Claude Code** (de Anthropic) | Un panel de chat dentro de VS Code. | Hablar con Claude sobre el proyecto y pedirle prototipos. |
| **Acceso a Claude por la empresa** (AWS Bedrock) | La forma en que la empresa da acceso a Claude. | Que Claude funcione con la cuenta de la empresa, sin cuentas personales. |
| **El proyecto Evergreen DS** | Una carpeta con el sistema de diseño de ejemplo. | Es el material con el que trabajaremos los dos días. |
| **Node.js** (si IT no lo ha instalado ya) | Un programa que permite arrancar el proyecto en tu navegador. | Ver los prototipos en `http://localhost:3000`. |

## Paso 1. Instalar VS Code

1. Entra en https://code.visualstudio.com y descarga la versión para tu ordenador (Windows o Mac).
2. Instálalo como cualquier otro programa.
3. Ábrelo. Si te pregunta por temas o idioma, puedes saltártelo.

> Si tu ordenador de empresa no te deja instalar programas, pide VS Code a IT (suele estar en el catálogo de software de la empresa).

## Paso 2. Instalar la extensión "Claude Code"

1. En VS Code, abre el panel de **Extensiones**: el icono de cuatro cuadraditos en la barra de la izquierda (o `Ctrl+Shift+X` en Windows, `Cmd+Shift+X` en Mac).
2. Busca **Claude Code**.
3. Elige la que publica **Anthropic** (comprueba el nombre del autor: hay extensiones con nombres parecidos).
4. Pulsa **Instalar**.

Verás un icono nuevo de Claude en la barra lateral o en la parte superior derecha del editor.

## Paso 3. Configurar el acceso de la empresa (Bedrock)

En la empresa no entramos con una cuenta personal de Claude: el acceso va a través de **AWS Bedrock**, que configura IT. Por eso hay que decirle a la extensión que **no** pida iniciar sesión.

1. Abre los ajustes de VS Code: `Ctrl+,` (Windows) o `Cmd+,` (Mac).
2. En el buscador de ajustes escribe **Claude Code**.
3. Marca la casilla **Disable Login Prompt** (desactivar la pantalla de inicio de sesión).
4. Las credenciales de Bedrock (las "llaves" de acceso a AWS) **las proporciona IT**. Normalmente:
   - IT te da unas instrucciones o un script para dejar tus credenciales de AWS configuradas en el ordenador, o
   - IT ya lo ha dejado preparado si antes usabas Claude Code en la terminal (la extensión usa **la misma configuración** que la versión de terminal).

> Si no sabes si tienes acceso a Bedrock, **pregunta a IT** con este mensaje: *"Necesito usar la extensión Claude Code de VS Code con el acceso de la empresa por AWS Bedrock para un workshop el viernes. ¿Me ayudáis a dejar configuradas las credenciales?"*

## Paso 4. Abrir el proyecto

Hay dos opciones. Cecilia os dirá cuál usar.

**Opción A: ya tienes la carpeta** (te la han pasado o IT la ha preparado)
1. En VS Code: **Archivo → Abrir carpeta…** (en Mac, *File → Open Folder…*).
2. Elige la carpeta `designing-with-code`.
3. Si VS Code pregunta "¿Confías en los autores de esta carpeta?", responde **Sí, confío**.

**Opción B: descargarla desde GitHub**
1. En VS Code, abre la paleta de comandos: `Ctrl+Shift+P` (Windows) o `Cmd+Shift+P` (Mac).
2. Escribe **Git: Clone** y pulsa Intro.
3. Pega esta dirección: `https://github.com/cecivera/designing-with-code`
4. Elige dónde guardarla (por ejemplo, en *Documentos*) y pulsa **Abrir** cuando te lo pregunte.

> Si te sale un error de que "Git no está instalado", pide ayuda a IT o usa la opción A.

## Paso 5. Preparar el proyecto (una sola vez)

El proyecto necesita descargar sus piezas antes de poder verse en el navegador. Lo más fácil es **pedírselo a Claude**:

1. Abre el panel de Claude Code (icono de Claude).
2. Escribe:

   ```text
   Es la primera vez que abro este proyecto. Instala lo que necesite (npm install) y dime si ha ido bien. No cambies ningún archivo del proyecto.
   ```

3. Claude te pedirá permiso para ejecutar un comando. Lee lo que va a hacer y, si pone `npm install`, acepta.
4. Tarda unos minutos. Es normal ver avisos amarillos ("warnings" o "vulnerabilities"): no bloquean nada.

> Si Claude dice que **no encuentra `npm` o Node**, falta Node.js. Pide a IT que te instale **Node.js 20 o superior**.

## Paso 6. Primera prueba

En el panel de Claude Code, escribe:

```text
Hola. Explícame en 3 frases qué es este proyecto y cuántos componentes tiene.
```

**Si funciona**, Claude responde hablando de Evergreen DS, de componentes de shadcn/ui y de Storybook. ¡Listo!

Prueba extra (opcional, para verlo en el navegador):

```text
Arranca el proyecto y dime la dirección para verlo.
```

Claude arrancará el proyecto y te dará una dirección tipo `http://localhost:3000`. Ábrela en el navegador. Para pararlo, pídele: *"Para el proyecto"*.

## Lista rápida antes del workshop

- [ ] VS Code instalado y se abre.
- [ ] Extensión **Claude Code** de **Anthropic** instalada.
- [ ] **Disable Login Prompt** marcado.
- [ ] Credenciales de Bedrock configuradas (con ayuda de IT).
- [ ] Carpeta `designing-with-code` abierta en VS Code.
- [ ] `npm install` hecho sin errores rojos.
- [ ] Claude responde a la primera prueba.

Cuando lo tengas, manda un ✅ a Cecilia. Si algo falla, manda una captura de pantalla del error.

## Si algo falla

| Qué ves | Qué suele significar | Qué hacer |
|---|---|---|
| La extensión te pide **iniciar sesión** con una cuenta de Claude. | No está marcado *Disable Login Prompt*. | Vuelve al paso 3. Después cierra y abre VS Code. |
| Error de **credenciales**, *AWS*, *Bedrock*, *access denied* o *unauthorized*. | Falta o ha caducado el acceso de la empresa. | Escribe a IT con una captura del error. No intentes arreglarlo tú. |
| No aparece el icono de Claude. | La extensión no se ha activado. | Cierra y vuelve a abrir VS Code. Comprueba en Extensiones que está instalada y activada. |
| Claude no "ve" el proyecto o dice que la carpeta está vacía. | VS Code tiene abierta otra carpeta. | **Archivo → Abrir carpeta…** y elige `designing-with-code`. |
| `npm` o `node` "no se reconoce". | Falta Node.js. | Pide a IT Node.js 20 o superior. |
| `npm install` muestra avisos amarillos. | Es normal. | Nada. Solo preocupa si termina con **ERR!** en rojo: manda captura. |
| `localhost:3000` no carga. | El proyecto no está arrancado o usa otro puerto. | Pide a Claude: *"¿Está arrancado el proyecto? Dime en qué dirección."* |
| La empresa bloquea la instalación de programas. | Política de IT. | Pide VS Code y Node.js a IT con tiempo (al menos 2 días antes). |

**Plan B el día del workshop:** si aun así algo no funciona, no pasa nada. Te emparejaremos con otra persona que comparta pantalla y haréis los ejercicios juntos. Se aprende igual.
