import React from 'react'

function People(props) {

    function handleSubmitClick(){}

  

  return (
    <div className='people'>

        <h1>Search for a Person</h1>

        <input className='person-search'></input>
        <button className='person-search-button' onClick={handleSubmitClick}>Search</button>

       {/* <h2>Name: {person.name}</h2> 

        Age: {person.age}
       
        Eye Color: {person.eye_color}
       
        Hair Color: {person.hair_color} */}

    </div>
  )
}

export default People