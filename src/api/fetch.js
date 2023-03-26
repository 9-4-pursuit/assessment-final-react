/// handle api fetches here, showing issue with code running, see if this will fix it

const BASE_URL = "https://resource-ghibli-api.onrender.com"

export function getMovies() {
    return fetch(`${BASE_URL}/films`).then((response) => response.json());
}

export function getPeople() {
    return fetch(`${BASE_URL}/people`).then((response) => response.json());
}

export function getLocations() {
    return fetch(`${BASE_URL}/locations`).then((response) => response.json());
}