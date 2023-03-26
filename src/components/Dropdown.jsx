import React from 'react'
import { getDataByMovie } from '../fetch'
import { useState, useEffect } from 'react';


export default function Dropdown() {

    const [movieList, setMovieList] = useState([])
 
     // useEffect(async() => {
        
    //     // console.log(movieList);
    //     const result = await getDataByMovie()
    //     return(  
    //         console.log(result)
    //     //    setMovieList(result)
    //         )
    // },[])

    async function handleDropdownClick(e) {
        e.preventDefault();
        const result = await getDataByMovie()
            setMovieList(result)
    }

    const optionItems = movieList.map(el =>
        <option key={el.id} value={el.title}>{el.title}</option>
    );

    return (
        <div>
            
            <select onClick={handleDropdownClick}>
                <option value='' >Select a movie</option>
                <>{optionItems}</>
                <p></p>
            </select>

        </div>
    )
}

// &nbsp;