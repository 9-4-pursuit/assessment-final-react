
export function peopleSearch() {
   return fetch('https://resource-ghibli-api.onrender.com/people').then((response) => response.json()).catch((e) => console.log(e))
}


export function movies() {
   return fetch('https://resource-ghibli-api.onrender.com/films').then((response) => response.json()).catch((e) => console.log(e))
}

// export function peopleSearch() {
//     return fetch('https://resource-ghibli-api.onrender.com/people').then((response) => response.json()).catch((e) => console.log(e))
//  }


export function locations() {
    return fetch('https://resource-ghibli-api.onrender.com/locations').then((response) => response.json()).catch((e) => console.log(e))
 }