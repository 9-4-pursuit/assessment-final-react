import React from 'react'
import { useState } from 'react'

function Locations() {

    const [clicked, setClicked]=useState(false);
    const [selectOption, setSelectOption] = useState("");
    //const listLocations = locations.map(location => {
        // return(
        //     <Locations
        //     name={location.name}
        //     climate={location.climate}
        //     terrain={location.terrain}
        //     />
        // );
    
    //);


    function handleButtonClick(){
        setClicked(!clicked)
    };
    function handleSelectOption(event){
        setSelectOption(event.target.value)
        console.log(selectOption) //to check this value
    }


  return (
    <div className='locations'>
        <h1>List of Locations</h1>

        <button onClick={handleButtonClick}>Show Locations</button>

        <p>If show locations button has been clicked and a location has been chosen..</p>
        <button onClick="">Sort by Name</button>
        <button onClick="">Sort by Climate</button>
        <button onClick="">Sort by Terrain</button>

        {/* <ul>{ listLocations }</ul> */}

    </div>
  )
}

export default Locations

//Not using:          
// <label htmlFor='location'>Show Location</label>