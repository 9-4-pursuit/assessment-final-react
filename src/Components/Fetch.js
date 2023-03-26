export function getMovies() {
    return fetch(`https://resource-ghibli-api-pursuit.onrender.com/films`).then((response) => response.json()).catch((e) => console.log(e))
}

export function getPeople() {
    return fetch(`https://resource-ghibli-api-pursuit.onrender.com/people`).then((response) => response.json()).catch((e) => console.log(e))
}

export function getLocations() {
    return fetch(`https://resource-ghibli-api-pursuit.onrender.com/locations`).then((response) => response.json()).catch((e) => console.log(e))
}