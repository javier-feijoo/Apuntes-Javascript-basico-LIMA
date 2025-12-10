# Introducción a los apuntes de JavaScript, DOM y JSON

Este repositorio contiene apuntes en Markdown y ejemplos prácticos para la parte de JavaScript (DOM y datos JSON) del curso de LIMA en ASIR.

## Contenido
- `apuntes.md`: apuntes completos en texto (conceptos, sintaxis y retos guiados).
- `ejemplo.md`: ejemplo documentado (TMDB) con HTML, CSS y JS en un solo archivo.
- `codigo/ejemplo_tmdb/`: versión separada por archivos (`index.html`, `estilos.css`, `app.js`) lista para probar con tu propia API Key.
- `codigo/basicos/`: ejemplos pequeños alineados con los apuntes.
- Nuevos: `ejemplo_api_f1`, `ejemplo_api_memes`, `ejemplo_json`.

## Cómo usarlo
1. Lee `apuntes.md` como referencia teórica y de ejercicios.
2. Revisa `ejemplo.md` para ver un caso completo en un solo documento.
3. Prueba los recursos en `codigo/basicos/` para practicar sintaxis, DOM y fetch con JSON local.
4. Ejecuta `codigo/ejemplo_tmdb/` en tu navegador para practicar el flujo con fetch y render de tarjetas (añade tu API Key en `app.js`).
5. Explora los ejemplos de API (`ejemplo_api_f1`, `ejemplo_api_memes`) para ver fetch con servicios públicos.

## Recursos en `codigo/basicos/`
- `variables_condicionales.html`: variables, arrays, bucle y condicional con salida en consola/DOM.
- `dom_eventos.html`: selección de nodos, eventos y creación dinámica de tarjetas.
- `json_local.html`: carga `productos.json` con `fetch` y renderiza tarjetas con datos locales.
- `eventos_dom_demo.html`: demo combinada de eventos (click/doble click), control de vídeo y validación básica de formulario.

## Recursos en `codigo/ejemplo_json/`
- `prueba1.html` + `viajes.json` + `estilos.css`: fetch a un JSON local de viajes y tarjetas responsive.

## Recursos en `codigo/ejemplo_api_f1/`
- `index.html` + `estilos.css`: fetch a `https://f1api.dev/api/current/drivers`, tarjetas de pilotos y fallback de avatar generado.

## Recursos en `codigo/ejemplo_api_memes/`
- `index1.html`: lista completa de memes de `https://api.imgflip.com/get_memes`.
- `index2.html`: selector numérico para mostrar un solo meme según posición.

## Requisitos
- Navegador moderno (soporta `fetch` y ES6).
- Para APIs externas (p. ej. TMDB) necesitas una API Key propia.

## Próximos pasos sugeridos
- Añadir más ejemplos en `codigo/` si amplías ejercicios.
- Incluir capturas o GIFs de funcionamiento cuando prepares material para clase.
