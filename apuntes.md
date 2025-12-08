# 1. Introducción a JavaScript

JavaScript es el lenguaje de programación que utilizan los navegadores web para dotar de interactividad a las páginas HTML. Permite responder a acciones del usuario, modificar elementos del DOM, crear componentes dinámicos y comunicarse con servidores y APIs.

## 1.1 ¿Dónde se ejecuta JavaScript?
JavaScript se ejecuta **en el cliente**, es decir, dentro del navegador. Cada navegador incorpora un motor propio:
- Chrome → V8
- Firefox → SpiderMonkey
- Safari → JavaScriptCore

## 1.2 Formas de incluir JavaScript en una web

### a) Script interno
```html
<script>
  console.log("Hola mundo");
</script>
```

### b) Script externo
```html
<script src="app.js"></script>
```

### c) Uso de `defer`
Carga el JS sin bloquear el HTML y lo ejecuta al final.
```html
<script src="app.js" defer></script>
```

---

# 2. Sintaxis básica de JavaScript

## 2.1 Variables
JavaScript utiliza **var**, **let** y **const**.

### let
- Permite reasignación.
- Vida de bloque.
```js
let contador = 0;
contador = 5;
```

### const
- No permite reasignación.
- Se usa para constantes o referencias que no cambian.
```js
const PI = 3.1416;
```

### var (evitar en desarrollos actuales)
- Ámbito de función, no de bloque.
- Puede generar errores por hoisting.

## 2.2 Tipos de dato principales

### Tipo | Ejemplo
- **string** (cadena): `"Hola"`
- **number**: `10`, `3.14`
- **boolean**: `true`, `false`
- **object**: `{nombre:"Ana", edad:20}`
- **array**: `[1,2,3]`
- **null**: ausencia de valor
- **undefined**: variable declarada pero sin valor

Ejemplos:
```js
let nombre = "Javier";
let edad = 22;
let activo = true;
let notas = [7, 8, 9];
let persona = {nombre:"Lucía", apellido:"Pérez"};
```

## 2.3 Operadores

### Aritméticos
```js
5 + 3   // suma
5 - 2   // resta
4 * 3   // multiplicación
10 / 2  // división
10 % 3  // resto
2 ** 3  // potencia → 8
```

### Comparación
```js
5 == "5"   // true (compara valor)
5 === "5"  // false (compara valor y tipo)
5 != 3      // true
5 !== 3     // true
```

### Lógicos
```js
true && false   // false
true || false   // true
!true           // false
```

### Asignación
```js
let x = 5;
x += 3; // 8
x *= 2; // 16
```

## 2.4 Condicionales

### if / else
```js
let nota = 7;
if (nota >= 5) {
    console.log("Aprobado");
} else {
    console.log("Suspenso");
}
```

### switch
```js
let dia = 3;
switch (dia) {
  case 1: console.log("Lunes"); break;
  case 2: console.log("Martes"); break;
  case 3: console.log("Miércoles"); break;
  default: console.log("Desconocido");
}
```

## 2.5 Iteraciones (bucles)

### for clásico
```js
for (let i = 0; i < 5; i++) {
  console.log("i vale", i);
}
```

### while
```js
let n = 0;
while (n < 3) {
  console.log("n es", n);
  n++;
}
```

### do...while
```js
let x = 1;
do {
  console.log("x =", x);
  x++;
} while (x <= 3);
```

### for...of (recorrer arrays)
```js
let colores = ["rojo", "verde", "azul"];
for (let c of colores) {
  console.log(c);
}
```

### for...in (recorrer propiedades de un objeto)
```js
let persona = {nombre:"Ana", edad:22};
for (let prop in persona) {
  console.log(prop, ":", persona[prop]);
}
```

---

# Minireto 1
Crea una página que muestre por consola:
1. Tu nombre.
2. Los números del 1 al 10.
3. Indica para cada número si es par o impar.

Ejemplo guía:
```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i, "es par");
  } else {
    console.log(i, "es impar");
  }
}
```

---

# Minireto 2
Crea un botón que genere un div cada vez que se pulse. Ese div debe:
- tener un color aleatorio (usa RGB o una lista de colores),
- contener un texto como "Caja nº X",
- añadirse a un contenedor principal.

Guía de ejemplo:
```html
<button id="crear">Crear caja</button>
<div id="zona"></div>

<script>
let contador = 1;

function colorAleatorio(){
  return `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
}

document.getElementById("crear").onclick = () => {
  const caja = document.createElement("div");
  caja.style.width = "100px";
  caja.style.height = "100px";
  caja.style.margin = "10px";
  caja.style.background = colorAleatorio();
  caja.textContent = `Caja nº ${contador++}`;
  document.getElementById("zona").appendChild(caja);
};
</script>
```


# 3. El DOM: Manipulación del documento HTML con JavaScript

El **DOM (Document Object Model)** es una representación en forma de árbol que el navegador crea a partir del documento HTML. Cada etiqueta HTML se convierte en un **nodo** que JavaScript puede leer, modificar, eliminar o crear.

Es la base de toda interacción visual con el usuario.

---

## 3.1 ¿Qué es el DOM exactamente?

Cuando el navegador carga una página como:

```html
<h1 id="titulo">Bienvenido</h1>
<p class="texto">Esto es un párrafo</p>
```

Internamente construye una estructura como:

```
DOCUMENT
└── html
    ├── head
    └── body
        ├── h1#titulo
        └── p.texto
```

JavaScript puede acceder, cambiar propiedades, estilos y contenido de cualquiera de estos nodos.

---

## 3.2 Selección de elementos del DOM

### Métodos más utilizados

#### **document.getElementById()**

Selecciona un único elemento por su atributo id.

```js
const titulo = document.getElementById("titulo");
titulo.style.color = "blue";
```

#### **document.querySelector()**

Acepta selectores CSS.

```js
const primero = document.querySelector(".texto");
```

#### **document.querySelectorAll()**

Selecciona todos los elementos que coincidan.

```js
const items = document.querySelectorAll("li");
```

#### **document.getElementsByClassName() / getElementsByTagName()**

(Devuelven colecciones dinámicas)

```js
const parrafos = document.getElementsByTagName("p");
```

---

## 3.3 Modificar contenido

### Cambiar texto

```js
titulo.textContent = "Nuevo título";
```

### Interpretar HTML

```js
titulo.innerHTML = "<span style='color:red'>Rojo</span>";
```

> **IMPORTANTE:** `innerHTML` permite insertar HTML, pero también puede introducir vulnerabilidades si se usa con contenido no controlado.

---

## 3.4 Modificar estilos desde JavaScript

```js
const caja = document.getElementById("caja");
caja.style.backgroundColor = "lightgreen";
caja.style.padding = "20px";
```

---

## 3.5 Crear nuevos elementos

```js
const lista = document.getElementById("lista");
const li = document.createElement("li");
li.textContent = "Elemento generado";
lista.appendChild(li);
```

### Insertar antes de otro elemento

```js
lista.insertBefore(li, lista.firstChild);
```

### Eliminar elementos

```js
lista.removeChild(lista.lastChild);
```

---

## 3.6 Eventos: reaccionar a acciones del usuario

Los eventos permiten ejecutar código cuando el usuario interactúa con la página.

### Evento clic

```js
boton.onclick = () => {
  alert("Has pulsado el botón");
};
```

### addEventListener (forma recomendada)

```js
boton.addEventListener("click", function(){
  console.log("Click detectado");
});
```

### Otros eventos comunes

- `mouseover` (ratón pasa por encima)
- `mouseout`
- `input` (cambia un campo de formulario)
- `submit` (envío de formulario)
- `keydown` (tecla pulsada)

---

## 3.7 Alterar clases CSS desde JavaScript

Usar clases es más limpio que modificar estilos uno por uno.

```js
elemento.classList.add("resaltado");
elemento.classList.remove("oculto");
elemento.classList.toggle("activo");
```

---

# RETOS DEL APARTADO 3

---

## **Reto 3.1 — Cambiar contenido al hacer clic**

Crea una página con:

- un botón,
- un párrafo.

Al pulsar el botón, el texto del párrafo debe cambiar.

**Guía:**

```html
<button id="cambiar">Cambiar texto</button>
<p id="mensaje">Texto inicial</p>

<script>
const boton = document.getElementById("cambiar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", ()=>{
  mensaje.textContent = "Texto cambiado dinámicamente";
});
</script>
```

---

## **Reto 3.2 — Crear tarjetas dinámicamente**

Cada vez que el usuario pulse un botón, debe añadirse una tarjeta con el siguiente formato:

```
+---------------------+
|  Tarjeta nº X       |
|  Contenido...       |
+---------------------+
```

**Pistas:**

- Usa `document.createElement("div")`.
- Usa `classList.add("tarjeta")`.
- Lleva un contador para numerarlas.

---

## **Reto 3.3 — Lista interactiva**

Crea una lista donde:

- puedas añadir un elemento mediante un input,
- cada elemento tenga un botón “Eliminar”.

**Guía de solución parcial:**

```js
const ul = document.getElementById("lista");
const input = document.getElementById("item");
const add = document.getElementById("agregar");

add.onclick = () => {
  const li = document.createElement("li");
  li.textContent = input.value;

  const borrar = document.createElement("button");
  borrar.textContent = "X";
  borrar.onclick = () => li.remove();

  li.appendChild(borrar);
  ul.appendChild(li);
};
```

---

## **Reto 3.4 — Cambiar temas (modo claro/oscuro)**

Crea un botón que alterne entre modo claro y modo oscuro utilizando `classList.toggle()`.

### Pistas

- Define `.oscuro { background:black; color:white; }` en CSS.
- Aplica esta clase al `<body>` con JavaScript.

```js
document.getElementById("tema").onclick = ()=>{
  document.body.classList.toggle("oscuro");
};
```

---

## **Reto 3.5 — Pequeño juego visual**

Crea un círculo que:

- se mueva a una posición aleatoria al hacer clic,
- cambie de color automáticamente cada vez que se reubique.

Ideal para practicar:

- estilos dinámicos,
- eventos,
- generación aleatoria.

---

# Conclusión del apartado

El DOM es la base de toda web interactiva. Dominar:

- selección de elementos,
- modificación de contenido,
- creación/eliminación de nodos,
- clases CSS,
- eventos, permite construir interfaces complejas sin necesidad de frameworks.

A partir de aquí, el siguiente paso natural es **usar datos dinámicos**, primero desde archivos JSON locales y después desde APIs.

# 4. JSON y Fetch: Datos dinámicos en la Web

El uso de **JSON (JavaScript Object Notation)** y la función **fetch()** es fundamental en las aplicaciones modernas. Permiten cargar y procesar datos externos, ya provengan de un archivo local o de una **API REST**, generando interfaces dinámicas.

---

# 4.1 ¿Qué es JSON?

JSON es un formato de datos **ligero**, **estructurado** y fácil de leer tanto por personas como por máquinas. Es el formato estándar de intercambio entre aplicaciones web.

Ejemplo básico:
```json
{
  "nombre": "Lucía",
  "edad": 23,
  "materias": ["LMSGI", "BD", "ISO"]
}
```

## Características principales:
- Basado en sintaxis de objetos JavaScript.
- Muy utilizado en APIs, servidores y aplicaciones móviles.
- Solo permite **strings, números, booleanos, null, arrays y objetos**.

---

# 4.2 Convertir JSON ↔ Objetos JavaScript

### JSON → Objeto JavaScript
```js
const texto = '{"color":"rojo","hex":"#f00"}';
const obj = JSON.parse(texto);
console.log(obj.color); // rojo
```

### Objeto JavaScript → JSON
```js
const persona = {nombre: "Ana", edad: 20};
const json = JSON.stringify(persona);
console.log(json);
```

---

# 4.3 Cargar JSON desde un archivo local con fetch()

Supongamos que tenemos **colores.json**:
```json
[
  {"color":"negro","hex":"#000"},
  {"color":"rojo","hex":"#f00"},
  {"color":"verde","hex":"#0f0"}
]
```

### Ejemplo básico de carga:
```js
fetch("colores.json")
  .then(respuesta => respuesta.json())
  .then(datos => {
    console.log("Datos recibidos:", datos);
  })
  .catch(error => console.error("Error:", error));
```

## ¿Qué hace fetch?
- Solicita un recurso (archivo o API).
- Devuelve una **Promise**.
- `respuesta.json()` transforma el texto JSON en un objeto utilizable.

---

# 4.4 Mostrar JSON en HTML de forma dinámica

### HTML base
```html
<div id="contenedor" class="grid"></div>
```

### Script
```js
fetch("colores.json")
  .then(r => r.json())
  .then(colores => {
    const cont = document.getElementById("contenedor");

    colores.forEach(item => {
      const caja = document.createElement("div");
      caja.className = "caja";
      caja.style.background = item.hex;
      caja.textContent = item.color;
      cont.appendChild(caja);
    });
  });
```

### CSS sugerido
```css
.grid {
  display: flex;
  gap: 10px;
}
.caja {
  width: 100px;
  height: 100px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
```

---

# 4.5 Fetch con APIs públicas

Las APIs permiten obtener datos remotos. Ejemplo con **PokéAPI**:
```js
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(r => r.json())
  .then(data => {
    console.log(data.name);
    console.log(data.sprites.front_default);
  });
```

### Ejemplo: mostrar tarjeta del Pokémon
```js
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(r => r.json())
  .then(p => {
    const tarjeta = `
      <div class="pokemon">
        <h2>${p.name}</h2>
        <img src="${p.sprites.front_default}">
        <p>Altura: ${p.height}</p>
        <p>Peso: ${p.weight}</p>
      </div>
    `;
    document.body.innerHTML += tarjeta;
  });
```

---

# 4.6 Manejo de errores

```js
fetch("datos.json")
  .then(r => {
    if (!r.ok) throw new Error("No se pudo cargar");
    return r.json();
  })
  .catch(err => console.error("Error detectado:", err));
```

---

# 4.7 Reto 4.1 — Generador dinámico de productos
Crea una aplicación que lea un archivo **productos.json** con este formato:
```json
[
  {"nombre":"Teclado","precio":19.99,"imagen":"img/teclado.jpg"},
  {"nombre":"Ratón","precio":9.99,"imagen":"img/raton.jpg"}
]
```

Tu programa debe:
- cargar los productos,
- generar una tarjeta para cada uno,
- mostrar la imagen, el nombre y el precio.

**Pista:** usa `innerHTML` para insertar fragmentos complejos.

---

# 4.8 Reto 4.2 — Buscador con API
Crea un input donde el usuario escriba un nombre de Pokémon.

Al pulsar un botón:
- haz una petición a la API,
- genera una tarjeta con la información,
- si el Pokémon no existe, muestra un mensaje de error.

**Ejemplo base:**
```js
async function buscar() {
  const nombre = document.getElementById("poke").value.toLowerCase();

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    if (!res.ok) throw new Error("No encontrado");

    const p = await res.json();
    mostrarPokemon(p);
  } catch(e) {
    alert("Pokémon no encontrado");
  }
}
```

---

# 4.9 Reto 4.3 — Crear una galería filtrable
Usa un archivo JSON con objetos que incluyan categoría:
```json
{"nombre":"Monitor","categoria":"pc"}
```

La aplicación debe:
- cargar todos los elementos,
- mostrarlos en tarjetas,
- incluir botones de filtrado: *Todos*, *PC*, *Accesorios*, etc.

Al pulsar un filtro, debe **re-renderizar** solo los elementos que coincidan.

---

# 4.10 Conclusión
Gracias a JSON y fetch:
- se pueden crear interfaces dinámicas,
- consumir APIs sin backend propio,
- integrar datos estructurados,
- construir aplicaciones web modernas.

El siguiente paso natural es combinar todo esto con **eventos, DOM y estilos avanzados**, creando proyectos completos.


