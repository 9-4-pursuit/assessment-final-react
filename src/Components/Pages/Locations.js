import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function Locations() {
  let [showLocations, setShowLocations] = useState(false);
  let [listLocations, setListLocations] = useState([]);

  useEffect(() => {
    fetch("https://resource-ghibli-api.onrender.com/locations")
      .then((response) => response.json())
      .then((res) => {
        setListLocations(res);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleLocations() {
    setShowLocations(!showLocations);
  }

  function nameSort() {
    let sorted = [...listLocations].sort((a, b) => 
    a.name > b.name ? 1 : -1);
    setListLocations(sorted);
  }

  function climateSort() {
    let sorted = [...listLocations].sort((a, b) =>
      a.climate > b.climate ? 1 : -1
    );
    setListLocations(sorted);
  }

  function terrainSort() {
    let sorted = [...listLocations].sort((a, b) =>
      a.terrain > b.terrain ? 1 : -1
    );
    setListLocations(sorted);
  }

  return (
    <section className="locations">
      <h1>List of Locations</h1>
      {!showLocations ? (
        <button onClick={handleLocations}>Show Locations</button>
      ) : (
        <>
          <button onClick={handleLocations}>Hide Locations</button>
          <button onClick={nameSort}>Sort by Name</button>
          <button onClick={climateSort}>Sort by Climate</button>
          <button onClick={terrainSort}>Sort by Terrain</button>
        </>
      )}
      {showLocations ? (
        <ul className="details">
          {listLocations.map((location) => {
            return (
              <ul key={uuid()}>
                <span>
                  <li key={uuid() + location.name}>
                    <strong>Name: </strong>
                    <span>{location.name}</span>
                  </li>
                </span>


                    <li key={uuid() + location.climate}>
                  <span><strong>Climate: </strong>
                  <span>{location.climate}</span></span>
                </li>



                <li key={uuid() + location.terrain}>
                  <strong>Terrain: </strong>
                  {location.terrain}
                </li>
              </ul>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </section>
  );
}
