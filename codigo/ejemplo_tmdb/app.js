// ==================================
// CONFIGURACIÓN
// ==================================
const API_KEY = "19db551a358b181770c2fa393f1f790c"; // <-- Inserta tu API KEY
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