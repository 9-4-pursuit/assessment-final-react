import axios from "axios";


export async function getMovies() {
 try {
    const data = await axios.get("https://resource-ghibli-api.onrender.com/films");
    return data;
 } catch (error) {
    console.log(error);
    }
}
        

