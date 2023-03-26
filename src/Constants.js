const URL = "https://resource-ghibli-api.onrender.com";
export function getFilms() {
  try {
    return fetch(`${URL}/films`).then((response) => response.json());
  } catch (e) {
    console.log(e);
  }
}

export function getPeople() {
  try {
    return fetch(`${URL}/people`).then((response) => response.json());
  } catch (e) {
    console.log(e);
  }
}
export function getLocations() {
  try {
    return fetch(`${URL}/locations`).then((response) => response.json());
  } catch (e) {
    console.log(e);
  }
}
