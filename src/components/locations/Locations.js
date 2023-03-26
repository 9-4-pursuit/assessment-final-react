
import { useState, useEffect } from "react";
import { getLocations } from "../../fetch/fetch";
import Location from "./Location"

export default function Locations() {
  const [allLocations, setAllLocations] = useState([]);
  const [locationsShown, setLocationsShown] = useState(false)

  //get the locations on page render
  useEffect(() => {
    getLocations()
    .then((res) => {
      console.log(res);
      setAllLocations([...res])
    });
  }, []);

  //function to show or hide the loactions
  function toggleLocations() {
    setLocationsShown(!locationsShown);
    console.log(allLocations)
  }

  return (<div className="locations">
    <h1>List of Locations</h1>
    <button onClick={toggleLocations}>{locationsShown ? "Hide Locations" : "Show Locations"}</button>

    {locationsShown ? 
    <ul>
      {allLocations.map((location) => {
        return <Location key={location.id} location={location}/>
      })}
      
    </ul> 
    : null}

  </div>);
};