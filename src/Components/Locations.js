import { useState, useEffect } from "react";
import Location from "./Location";

function Locations() {
  const [clicked, setClicked] = useState(false);
  const [sortedLocations, setSortedLocations] = useState([]);

  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await fetch("https://resource-ghibli-api.onrender.com/locations");
        const data = await response.json();
        setSortedLocations([...data]);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    }
    fetchLocations();
  }, []);

  function handleClick(event) {
    event.preventDefault();
    setClicked(!clicked);
  }

  function handleSort(event) {
     const sorter = event.target.value;
     setSortedLocations([...sortedLocations].sort((a, b) => {
       if (a[sorter] < b[sorter]) {
         return -1;
       }
       if (a[sorter] > b[sorter]) {
         return 1;
       }
       return 0;
     }));
   }

  let text = "";
  if (clicked === false) {
    text = "Show Locations";
  }
  if (clicked === true) {
    text = "Hide Locations";
  }

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <button onClick={handleClick}>{text}</button>
      {!clicked ? null : (
        <div>
          <button value="name" onClick={handleSort}>Sort by Name</button>
          <button value="climate" onClick={handleSort}>Sort by Climate</button>
          <button value="terrain" onClick={handleSort}>Sort by Terrain</button>

          <ul className="locations-data">
            {sortedLocations &&
              sortedLocations.map((locationData) => {
                return <li><Location locationData={locationData} key={locationData.id} /></li>;
              })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Locations;