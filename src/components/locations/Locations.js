
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

  //function for sorting
  function sortLocations(sortType) {
    let sortingArr = [...allLocations]
    sortingArr.sort((a, b) => {
      if (a[sortType].toUpperCase() < b[sortType].toUpperCase()) {
        return -1;
      }
      if (a[sortType].toUpperCase() > b[sortType].toUpperCase()) {
        return 1;
      }
      return 0;
    })
    setAllLocations(sortingArr);
  }

  return (<div className="locations">
    <h1>List of Locations</h1>
    <button onClick={toggleLocations}>{locationsShown ? "Hide Locations" : "Show Locations"}</button>
    {locationsShown ? (
      <section>
        <button onClick={() => sortLocations("name")}>Sort by Name</button>
        <button onClick={() => sortLocations("climate")}>Sort by Climate</button>
        <button onClick={() => sortLocations("terrain")}>Sort by Terrain</button>
      </section>
    )
    :null}

    {locationsShown ? 
    <ul>
      {allLocations.map((location) => {
        return <Location key={location.id} location={location}/>
      })}
      
    </ul> 
    : null}

  </div>);
};