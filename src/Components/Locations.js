
import { useState, useEffect } from "react";
import "./Locations.css";

function Locations() {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);

  useEffect(() => {
    fetch("https://resource-ghibli-api.onrender.com/locations/")
      .then((response) => response.json())
      .then((response) => {
        setLocations(response);
      });
  }, []);

  const handleButtonClick = () => {
    setShowLocations(showLocations ? null : true);
  };

  const handleSortByNameClick = () => {
    setLocations([...locations].sort((a, b) => {
      if (a.name < b.name) {
       return -1;
     }
      if (a.name > b.name) {
       return 1;
     }
      return 0;
    }));
  };

  const handleSortByClimateClick = () => {
    setLocations([...locations].sort((a, b) => {
      if (a.climate < b.climate) {
       return -1;
     }
      if (a.climate > b.climate) {
       return 1;
     }
      return 0;
    }));
  };

  const handleSortByTerrainClick = () => {
    setLocations([...locations].sort((a, b) => {
      if (a.terrain < b.terrain) {
       return -1;
     }
      if (a.terrain > b.terrain) {
       return 1;
     }
      return 0;
    }));
  };

  return (
    <div className="locations">
      <h2>List of Locations</h2>
      <button onClick={handleButtonClick}>
        {showLocations ? "Hide Locations" : "Show Locations"}
      </button>
      
      {/* <button onClick={handleSortByNameClick}>Sort by Name</button> */}

      {showLocations && (
        <>
        <button onClick={handleSortByNameClick}><span>Sort by Name</span></button>
        <button onClick={handleSortByClimateClick}>Sort by Climate</button>
        <button onClick={handleSortByTerrainClick}>Sort by Terrain</button>
        <ul>
          <ul>
        
          {locations.map((location) => (
            <li key={location.id}>
              <ul>
                <li>Name: {location.name}</li>
                <li>Climate: {location.climate}</li>
                <li>Terrain: {location.terrain}</li>
              </ul>
            </li>
          ))}
          </ul>
        </ul>
        </>
      )}
    </div>
  );
}

export default Locations;