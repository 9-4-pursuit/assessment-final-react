import { useState, useEffect } from "react";
import { fetchApi } from "../../api/fetch";
import Location from "./Location";

function Locations() {
  const [allLocations, setAllLocations] = useState([]);
  const [toggleShow, setToggleShow] = useState(false);
  const [sortedBy, setSortedBy] = useState("");

  useEffect(() => {
    fetchApi("locations")
      .then((response) => {
        setAllLocations(response);
      })
      .catch((error) => console.log(error));
  }, [])

  function handleShowLocations() {
    setToggleShow(!toggleShow);
  }

  function showSortButtons() {
    return(
      <>
        <button onClick={() => handleShowLocations()}>Hide Locations</button>
        <button onClick={() => setSortedBy("name")}>Sort by Name</button>
        <button onClick={() => setSortedBy("climate")}>Sort by Climate</button>
        <button onClick={() => setSortedBy("terrain")}>Sort by Terrain</button>
      </>
    )
  }

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      {
        !toggleShow
        ? <button onClick={() => handleShowLocations()}>Show Locations</button>
        : showSortButtons()
      }

      {
        toggleShow && <Location locations={allLocations} sortedBy={sortedBy} />
      }
    </div>
  )
}

export default Locations;