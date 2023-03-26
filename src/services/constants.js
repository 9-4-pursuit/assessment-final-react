import axios from "axios";

export async function getMovies() {
    try {
        const response = await axios.get('https://resource-ghibli-api.onrender.com/films');
        return response;
    } catch(e) {
        console.log(e);
    }
}