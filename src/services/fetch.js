import axios from "axios";

const BASE_URL = "https://resource-ghibli-api.onrender.com";

// ALL THINGS
export async function allThings(type) {
    try {
        const response = await axios.get(`${BASE_URL}/${type}`);
        return response;
    } catch (err) {
        console.log(err);
    }
}

// SINGLE THING
export async function singleThing(type, id) {
    try {
        const response = await axios.get(`${BASE_URL}/${type}/${id}`);
        return response;
    } catch (err) {
        console.log(err);
    }
}

