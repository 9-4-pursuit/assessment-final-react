const BASE_URL = "https://resource-ghibli-api.onrender.com";

export async function fetchApi(type) {
  try {
    const response = await fetch(`${BASE_URL}/${type}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
