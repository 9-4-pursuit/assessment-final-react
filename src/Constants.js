const URL = "https://resource-ghibli-api.onrender.com";
export function getFilms() {
  try {
    return fetch(`${URL}/films`).then((response) => response.json());
  } catch (e) {
    console.log(e);
  }
}
