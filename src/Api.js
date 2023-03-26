// import axios from "axios";

// export async function resourceGhibli() {
//     try{
//         const response = await axios.get("https://resource-ghibli-api.onrender.com/**")
//         return response}
//         catch(error){console.log(error)}
//     }

import axios from 'axios';

const BASE_URL = 'https://resource-ghibli-api.onrender.com/**';

export const getMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movies`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movies/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};




