# Ejemplo completo TMDB — Selector de categorías + Cards dinámicas

Este ejemplo muestra cómo consumir la API de **The Movie Database (TMDB)** usando JavaScript y fetch. Permite:

- Cargar categorías (géneros) desde la API.
- Mostrar esas categorías en un desplegable.
- Cargar películas recientes de la categoría seleccionada.
- Renderizar cards dinámicas con título, imagen y valoración.

Solo es necesario introducir tu propia **API Key de TMDB**.



# 1. Código HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Películas TMDB</title>
    <style>
        body {
            font-family: Arial;
            background: #f0f0f0;
            padding: 20px;
        }

        #categorias {
            padding: 10px;
            font-size: 1rem;
            margin-bottom: 20px;
        }

        #peliculas {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 20px;
        }

        .card {
            background: white;
            border-radius: 6px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .card img {
            width: 100%;
        }

        .info {
            padding: 10px;
        }

        .titulo {
            font-size: 1rem;
            font-weight: bold;
        }

        .rating {
            color: #e3b300;
        }
    </style>
</head>
<body>

    <h1>Explorar películas por categoría</h1>

    <select id="categorias">
        <option value="">Selecciona una categoría...</option>
    </select>

    <div id="peliculas"></div>

    <script src="app.js"></script>
</body>
</html>
```



# 2. Código JavaScript (app.js)

Inserta tu **API Key** en la variable `API_KEY`.

```javascript
// ==================================
// CONFIGURACIÓN
// ==================================
const API_KEY = "AQUI_TU_API_KEY"; // <-- Inserta tu API KEY
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

// Elementos del DOM
const selectCategorias = document.getElementById("categorias");
const contenedorPeliculas = document.getElementById("peliculas");

// ==================================
// 1. Cargar categorías (géneros TMDB)
// ==================================
async function cargarCategorias() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=es-ES`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    datos.genres.forEach(genero => {
        const option = document.createElement("option");
        option.value = genero.id;
        option.textContent = genero.name;
        selectCategorias.appendChild(option);
    });
}

// ==================================
// 2. Cargar películas por categoría
// ==================================
async function cargarPeliculasPorCategoria(idCategoria) {
    const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=es-ES&with_genres=${idCategoria}&sort_by=release_date.desc`;

    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    mostrarPeliculas(datos.results);
}

// ==================================
// 3. Mostrar cards
// ==================================
function mostrarPeliculas(lista) {
    contenedorPeliculas.innerHTML = ""; // limpiar antes de pintar

    lista.forEach(pelicula => {
        const card = document.createElement("div");
        card.classList.add("card");

        const imagen = pelicula.poster_path
            ? IMG_URL + pelicula.poster_path
            : "https://via.placeholder.com/300x450?text=Sin+Imagen";

        card.innerHTML = `
            <img src="${imagen}">
            <div class="info">
                <div class="titulo">${pelicula.title}</div>
                <div class="rating">⭐ ${pelicula.vote_average}</div>
                <div>Año: ${pelicula.release_date?.substring(0, 4) || "N/A"}</div>
            </div>
        `;

        contenedorPeliculas.appendChild(card);
    });
}

// ==================================
// EVENTO: cuando cambia la categoría
// ==================================
selectCategorias.addEventListener("change", () => {
    const categoria = selectCategorias.value;
    if (categoria) {
        cargarPeliculasPorCategoria(categoria);
    }
});

// ==================================
// INICIALIZACIÓN
// ==================================
cargarCategorias();
```



# 3. Explicación del funcionamiento

## 3.1 Cargar categorías
Se usa el endpoint:
```
/genre/movie/list
```
Este endpoint devuelve todos los géneros disponibles.

## 3.2 Cargar películas recientes de una categoría
Se usa:
```
/discover/movie?with_genres={ID}&sort_by=release_date.desc
```
Esto devuelve las películas más recientes del género seleccionado.

## 3.3 Generar las cards dinámicas
Cada película incluye:
- título
- imagen (`poster_path`)
- puntuación (`vote_average`)
- fecha de estreno

El script construye tarjetas con esa información.


# 4. Retos sugeridos

1. Añadir paginación (botones "Siguiente" / "Anterior").
2. Crear una vista de detalles al hacer clic en una card.
3. Añadir modo oscuro/claro con `classList.toggle()`.
4. Añadir un buscador global usando:
```
/search/movie?query=
```

