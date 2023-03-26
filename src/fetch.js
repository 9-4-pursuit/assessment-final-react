import axios from "axios";

export async function getDataByMovie(){
    try{
    const resp = await axios.get(`https://resource-ghibli-api.onrender.com/films`)
    console.log(resp);
    return resp.data
}catch(err){
    console.log(err);
}


}