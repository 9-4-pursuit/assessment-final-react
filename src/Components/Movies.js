import React from 'react'
import { useState } from 'react'

function Movies() {

    const [selectOption, setSelectOption] = useState("");

    function handleSelectOption(event){
        setSelectOption(event.target.value)
        console.log(selectOption) //to check this value
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log("handle submit triggered")
    }
  return (
    <div className='movies'>
        <h1>Select a Movie</h1>
        <form className='movies-form' onSubmit={ handleSubmit }>
        <select id="movies" onChange={handleSelectOption}>
            <option value=""></option>
            <option value="create from fetch">Create From fetch</option>
        </select>
        <p>Create function to handle movie Selection here.</p>
        function populateSelection(){        }
     </form>


    </div>
  )
}

export default Movies