import React from "react";
import { getLocations } from "../services/constants";
import { useState, useEffect } from "react";

function Locations() {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);
  const [sortByName, setSortByName] = useState(false);
  const [sortByClimate, setSortByClimate] = useState(false);
  const [sortByTerrain, setSortByTerrain] = useState(false);

  useEffect(() => {
    async function fetchLocations() {
      const answer = await getLocations();
      setLocations(answer);
    }
    fetchLocations();
  }, []);

  const toggleLocations = () => {
    setShowLocations(!showLocations);
  };

  function toggleSortByName() {
    setSortByName(!sortByName);
  }

  function toggleSortByClimate() {
    setSortByClimate(!sortByClimate);
  }

  function toggleSortByTerrain() {
    setSortByTerrain(!sortByTerrain);
  }

  const toggleButtonText = showLocations ? "Hide Locations" : "Show Locations";

  let sortedLocations = [...locations];

  if (sortByName) {
    sortedLocations = sortedLocations.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sortByClimate) {
    sortedLocations = sortedLocations.sort((a, b) =>
      a.climate.localeCompare(b.climate)
    );
  }

  if (sortByTerrain) {
    sortedLocations = sortedLocations.sort((a, b) =>
      a.terrain.localeCompare(b.terrain)
    );
  }

  return (
    <div className="locations">
      <h3>List of Locations</h3>
      <button onClick={(event) => toggleLocations(event)}>
        {toggleButtonText}
      </button>
      {showLocations && (
        <>
          <button onClick={toggleSortByName}>Sort by Name</button>
          <button onClick={toggleSortByClimate}>Sort by Climate</button>
          <button onClick={toggleSortByTerrain}>Sort by Terrain</button>
        </>
      )}
      {showLocations && (
        <ul>
          {sortedLocations.map((location) => (
            <ul>
              <li>
                <span>Climate: {location.climate}</span>
              </li>
              <li key={location.id}>
                Name: <span>{location.name}</span>
              </li>
              <li>
                <span>Terrain: {location.terrain}</span>
              </li>
            </ul>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Locations;
