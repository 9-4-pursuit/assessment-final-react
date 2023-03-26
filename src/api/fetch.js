const URL = 'https://resource-ghibli-api.onrender.com'

export function getMovies() {
    return fetch(`${URL}/films`).then((response) => response.json());
}

export function getOneMovie(id) {
    return fetch(`${URL}/films<${id}>`).then((response) => response.json());
}

export function getOnePerson(id) {
    return fetch(`${URL}/people<${id}>`).then((response) => response.json());
}

export function getPeople() {
    return fetch(`${URL}/people`).then((response) => response.json());
}