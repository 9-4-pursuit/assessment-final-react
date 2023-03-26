import axios from "axios";

export async function findMovies () {
    try{
    const response = await axios.get (`https://resource-ghibli-api.onrender.com/films`)
    return response
} catch (error){
    console.log (error)
}
}


export async function findPeople (){
    try {
        const response = await axios.get (`https://resource-ghibli-api.onrender.com/people`)
        return response 
     } catch (error){
            console.log (error)
        }
    }


export async function findLocation () {
    try {
        const response = await axios.get (`https://resource-ghibli-api.onrender.com/location`)
        return response 
    } catch (error) {
        console.log (error)
    }
    }


    // when you are looking to fetch data copy the resource URL NOT the SERVER:

    //https://resource-ghibli-api-pursuit.onrender.com/
    // SHOULD SAY ON-RENDER
