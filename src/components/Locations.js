import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
      <Button variant="secondary" onClick={handleHideLocations}>
        {hideLocations ? "Show Locations" : "Hide Locations"}
      </Button>
      {!hideLocations && (
        <div>
          <Button variant="secondary" onClick={sortByName}>Sort by Name</Button>
          <Button variant="secondary" onClick={sortByClimate}>Sort by Climate</Button>
          <Button variant="secondary" onClick={sortByTerrain}>Sort by Terrain</Button>
        </div>
      )}
      {locations.length === 0 ? (
        <p>Loading...</p>
      ) : hideLocations ? null : (
        <div className="card-columns">
          {sortedLocations.map((location) => (
            <Card key={location.id}>
              <Card.Body>
                <Card.Title>{location.name}</Card.Title>
                <Card.Text>
                  <span>Climate: </span>{location.climate}<br />
                  <span>Terrain: </span>{location.terrain}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Locations;
