# Guía rápida: Claude Code para Product Owners

## Qué es Claude Code

Claude Code es un asistente de IA que **lee los archivos de un proyecto** (código, documentación, componentes) y conversa contigo sobre ellos. Puedes preguntarle qué hay y cómo funciona, pedirle resúmenes en el formato que necesites y, cuando quieras, pedirle que **construya prototipos** clicables con los componentes reales del sistema de diseño. Antes de cambiar o ejecutar algo, te pide permiso.

## Cómo abrirlo en VS Code

1. Abre **VS Code**.
2. **Archivo → Abrir carpeta…** y elige la carpeta del proyecto (`designing-with-code`).
3. Pulsa el **icono de Claude** (barra lateral o arriba a la derecha).
4. Escribe en el chat y pulsa Intro.

¿Primera vez? Mira [`instalacion.md`](instalacion.md). Si pide iniciar sesión: en ajustes, marca **Disable Login Prompt** (usamos el acceso de la empresa por Bedrock).

## Anatomía de una buena petición

| Parte | Pregunta | Ejemplo |
|---|---|---|
| **Contexto** | ¿Quién soy y qué tengo entre manos? | "Soy PO del equipo de devoluciones, no programo." |
| **Objetivo** | ¿Qué quiero conseguir? | "Quiero explicar el componente Alert en el sprint review." |
| **Formato** | ¿Cómo lo quiero? | "En una tabla", "en 5 líneas", "listo para Jira". |
| **Límites** | ¿Qué no debe hacer? | "No cambies archivos", "máximo 8 criterios", "si no lo sabes, dímelo". |

**Ejemplo completo**

```text
Soy PO y no programo. Quiero saber qué estados tiene el componente Input para escribir una historia de un formulario de devolución. Dámelo en una tabla con ejemplos. No cambies ningún archivo.
```

## 10 peticiones útiles para un PO

1. `Explícame qué hay en este proyecto como si fuera mi primer día. Máximo 10 líneas.`
2. `¿Hay algún componente para <necesidad>? Dime cómo se llama y cómo verlo en Storybook.`
3. `Explica el componente <nombre> para un sprint review, en 6 líneas y sin tecnicismos.`
4. `Dame una tabla con las variantes y estados de <componente>.`
5. `Escribe una historia de usuario con criterios Dado / Cuando / Entonces para <funcionalidad>.`
6. `¿Qué reglas de <componente o funcionalidad> no están definidas? No te las inventes.`
7. `/ev-prd <tu idea en una frase>` → convierte una idea en requisitos.
8. `/ev-wireframe` → convierte los requisitos en un prototipo clicable.
9. `Arranca el proyecto y dime la dirección para verlo.`
10. `Prepara un resumen de handoff de este prototipo para diseño y desarrollo, en una página.`

Comodines: *"Resúmelo en 5 viñetas"*, *"Sin palabras técnicas"*, *"¿En qué archivo lo has visto?"*, *"Deshaz el último cambio"*.

## Qué NO hacer

| No hagas esto | Por qué | Haz esto |
|---|---|---|
| Pegar **datos sensibles** (clientes, contratos, información interna, contraseñas). | Sale de tu ordenador y no hace falta. | Usa contenido inventado de ejemplo. |
| **Aceptar cambios sin mirar** lo que Claude va a hacer. | Puede tocar archivos que no querías. | Lee la petición de permiso. Si no la entiendes, di que no y pregunta. |
| Pedir **todo a la vez** ("haz la app completa con 10 cambios"). | Algo saldrá mal y no sabrás qué. | Un cambio por petición, y revisa. |
| **Creerte todo** lo que responde. | Puede equivocarse o inventar. | Compruébalo en Storybook o pregunta "¿dónde lo has visto?". |
| Tratar un prototipo como **producto final**. | No tiene datos reales, ni revisión, ni pruebas. | Úsalo para validar y para hablar con diseño y desarrollo. |
| Subir cambios a `main`. | Todo pasa por revisión y Chromatic. | Trabaja en tu rama o sandbox. Pide ayuda para guardar. |

## Glosario mini

| Palabra | Qué es |
|---|---|
| **Repo** (repositorio) | La carpeta del proyecto, con todo su historial de cambios, guardada en GitHub. |
| **Rama** | Una copia paralela del proyecto para trabajar sin tocar la versión buena (`main`). |
| **Pull request** (PR) | Una propuesta de cambio: se revisa y, si se aprueba, se une a `main`. |
| **Componente** | Una pieza reutilizable de interfaz: botón, tarjeta, campo de texto… |
| **Storybook** | El catálogo vivo de componentes, hecho con el código real. |
| **Chromatic** | Hace fotos de cada componente y avisa si algo ha cambiado. Una persona aprueba el cambio. |
| **Prototipo** | Pantallas clicables para probar una idea. No es producción. |
| **Token** | Un valor de diseño con nombre (un color, un espaciado) que se usa igual en Figma y en código. Ej.: `primary`. |
| **Skill** | Una receta que Claude sabe seguir. Las de Evergreen empiezan por `/ev-`. |

## Dónde encontrar las cosas

| Qué | Dónde |
|---|---|
| Storybook (catálogo de componentes) | https://main--6ad355a31aa6572453b3566f.chromatic.com |
| Figma: componentes (Evergreen DS) | https://www.figma.com/design/a1gmYfPaf761xDNLendLgY/Evergreen-DS |
| Figma: fundamentos (colores, tipografía, espaciado) | https://www.figma.com/design/M63J2aWwAS4Ec1fjhl4QuU |
| Figma: iconos (178) | https://www.figma.com/design/T8Cwl1JJ0lrXnGeihwBcv4 |
| Repo en GitHub | https://github.com/cecivera/designing-with-code |
| Tu prototipo (con el proyecto arrancado) | http://localhost:3000 |
| Ejercicios para practicar | [`ejercicios.md`](ejercicios.md) |

¿Dudas? Pregunta a Cecilia. ¿Problemas de acceso? Pregunta a IT.
