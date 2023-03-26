
const BASE_URL = "https://resource-ghibli-api.onrender.com"

export async function getMovies() {
  return await fetch (`${BASE_URL}/films`)
  .then((res) => res.json())
  .catch((e) => console.log(e))
}