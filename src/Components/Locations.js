import { getLocations } from "../Constants";
import { useEffect, useState } from "react";
export default function Location() {
  const [locations, setLocations] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  function buttonHandler(E) {
    E.preventDefault();
    setButtonClicked(!buttonClicked);
  }
  useEffect(() => {
    getLocations()
      .then((data) => {
        setLocations(data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(locations);
  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <form>
        <button onClick={buttonHandler}>
          {" "}
          {!buttonClicked ? "Show Locations" : "Hide Locations"}
        </button>
      </form>
      {buttonClicked && (
        <ul>
          {locations.map((location, index) => (
            <ul key={index}>
              <li> Name: {location.name}</li>

              <li> Climate: {location.climate}</li>

              <li> Terrain: {location.terrain}</li>
            </ul>
          ))}
        </ul>
      )}
    </div>
  );
}
