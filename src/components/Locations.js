import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [hideLocations, setHideLocations] = useState(true);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetch("https://resource-ghibli-api.onrender.com/locations")
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleHideLocations = () => {
    setHideLocations(!hideLocations);
  };

  const sortByName = () => {
    setSortBy("name");
  };
  
  const sortByClimate = () => {
    setSortBy("climate");
  };
  
  const sortByTerrain = () => {
    setSortBy("terrain");
  };

  const sortedLocations = [...locations].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "climate") {
      return a.climate.localeCompare(b.climate) || a.name.localeCompare(b.name);
    } else if (sortBy === "terrain") {
      return a.terrain.localeCompare(b.terrain) || a.name.localeCompare(b.name);
    } else {
      return 0;
    }
  });

  return (
    <div className="locations">
      <h2>Locations</h2>
      <button  className="btn-secondary" onClick={handleHideLocations}>
        {hideLocations ? "Show Locations" : "Hide Locations"}
      </button>
      {!hideLocations && (
        <div>
          <button  className="btn-secondary" onClick={sortByName}>Sort by Name</button>
          <button  className="btn-secondary" onClick={sortByClimate}>Sort by Climate</button>
          <button  className="btn-secondary" onClick={sortByTerrain}>Sort by Terrain</button>
        </div>
      )}
      {locations.length === 0 ? (
        <p>Loading...</p>
      ) : hideLocations ? null : (
        <ul>
          {sortedLocations.map((location) => (
            <li key={location.id}>
              <ul>
                {sortBy === "name" && (
                  <li><span>Location Name:</span> <span>{location.name}</span></li>
                )}
                {sortBy === "climate" && (
                  <>
                    <li><span>Location Climate:</span> <span>{location.climate}</span></li>
                    <li><span>Location Name:</span> <span>{location.name}</span></li>
                  </>
                )}
                {sortBy === "terrain" && (
                  <>
                    <li><span>Location Terrain:</span> <span>{location.terrain}</span></li>
                    <li><span>Location Name:</span> <span>{location.name}</span></li>
                  </>
                )}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Locations;
