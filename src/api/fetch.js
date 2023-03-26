const URL = 'https://resource-ghibli-api.onrender.com'

export function getMovies() {
    return fetch(`${URL}/films`).then((response) => response.json());
}