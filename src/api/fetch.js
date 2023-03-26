const baseURL = "https://resource-ghibli-api.onrender.com"



export function getAllMovies(){
    return fetch(`${baseURL}/films`)
    .then((response) => response.json());
}


export function returnLocations(){
    return fetch(`${baseURL}/locations`)
    .then((response) => response.json());
}

export function returnPeople(){
    return fetch(`${baseURL}/people`)
    .then((response) => response.json());
}