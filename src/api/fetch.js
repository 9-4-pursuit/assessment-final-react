


export function getAllMovies() {
    return fetch(`https://resource-ghibli-api.onrender.com/films`).then((response) => response.json())
}

export function getAllPeople() {
    return fetch(`https://resource-ghibli-api.onrender.com/people`).then((response) => response.json())
}

export function getAllLocations() {
    return fetch(`https://resource-ghibli-api.onrender.com/locations`).then((response) => response.json())
}
