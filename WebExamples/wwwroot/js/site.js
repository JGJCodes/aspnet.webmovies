
// Web API Movies.
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

// Seleccionando los elementos de la pagina web.
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

/* Llame a la función ShowMovies que solicita los datos de la película de la API usando FETCH.
 Luego pone esos datos en la etiqueta HTML principal mediante la creación de ellos para esos datos. */
showMovies(apiUrl);

function showMovies(url) {
    fetch(url).then(res => res.json())
        .then(function (data) {
            data.results.forEach(element => {

                //Creando los elementos de los datos de cada pelicula 
                const movie = document.createElement('div');
                const image = document.createElement('img');
                const text = document.createElement('h2');

               // movie.className = "card";
                image.className = "card-img-top";
                text.className = "card-title text-center";

                text.innerHTML = `${element.title}`;
                image.src = IMGPATH + element.poster_path;
                movie.appendChild(image);
                movie.appendChild(text);
                main.appendChild(movie);
            });
        });
}

// Evitar que la forma envíe si la barra de búsqueda está vacía.
form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchTerm = search.value;
    /* Agregando el valor escrito en la barra de búsqueda a la API de búsqueda,
       Para obtener las películas que buscamos. */
    if (searchTerm) {
        showMovies(SEARCHAPI + searchTerm);
        search.value = "";
    }
});
