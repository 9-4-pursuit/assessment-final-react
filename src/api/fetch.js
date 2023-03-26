const baseURL = "https://resource-ghibli-api.onrender.com"

// export function getShows(){
//     return fetch{'${baseURL'}
// }


export function returnLocations(){
    return fetch(`${baseURL}/locations`)
    .then((response) => response.json());
}

export function returnPeople(){
    return fetch(`${baseURL}/people`)
    .then((response) => response.json());
}