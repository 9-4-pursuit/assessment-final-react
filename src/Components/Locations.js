import React from 'react'
import { useState, useEffect } from 'react'
import { returnLocations } from '../api/fetch';

function Locations() {
    const [locations, setLocations] =useState([]);
    const [clicked, setClicked]=useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const buttonText = clicked ? "Hide Locations" : "Show Locations";


    const listLocations = locations.map((location, index) => {  //index is needed for warning and for a key
        return(
            <div key={ index }>
                <h2> { location.name }</h2>
                <p>{ location.climate }</p>
                <p>{ location.terrain }</p>
            </div>
        );  
        });


    useEffect(() => {
        async function fetchLocations(){
            try {
                const response = await returnLocations()
   
                setLocations(response);
        } catch (error) {
            console.error(error);
        }
    }
    
    fetchLocations();
}, []);




    function handleButtonClick(){
        setClicked(!clicked);
    };

    function handleSortByName() {
        const sortedLocations = locations.sort((a, b) => a.name.localeCompare(b.name)); // Sort locations array by name using localeCompare()
        setSelectedOption("name");
        setClicked(true); // Setting clicked state to true shows sorted locations
      };
    
      function handleSortByClimate() {
        const sortedLocations = locations.sort((a, b) => a.climate.localeCompare(b.climate)); 
        setSelectedOption("climate"); 
        setClicked(true); 
      };
    
      function handleSortByTerrain() {
        const sortedLocations = locations.sort((a, b) => a.terrain.localeCompare(b.terrain)); 
        setSelectedOption("terrain");
        setClicked(true); 
      };


  return (
    <div className='locations'>
        <h1>List of Locations</h1>

        <button onClick={handleButtonClick}>
            {buttonText}
            </button>

        {clicked && (
        <>
          <p>Sorted by {selectedOption}</p> {/* Displaying the selected option */}
          <button onClick={handleSortByName}>Sort by Name</button>
          <button onClick={handleSortByClimate}>Sort by Climate</button>
          <button onClick={handleSortByTerrain}>Sort by Terrain</button>
        </>
      )}

{clicked && <div className='information'>{listLocations}</div>}
    </div>
  );
}



export default Locations

//Not using:          
// <label htmlFor='location'>Show Location</label>
{/* <div className='information'>
<h2>{name}</h2>
<p>{climate}</p>
<p>{terrain}</p>
</div> */}
{/* <ul>{ listLocations }</ul> */}

    // function handleSelectOption(event){
    //     setSelectOption(event.target.value)
    //     console.log(selectOption) //to check this value
    // }