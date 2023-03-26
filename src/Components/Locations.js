import { useState, useEffect } from 'react';

export default function Locations({ locations }) {
    const [toggleShowLocationsButton, setToggleShowLocationsButton] = useState(true);
    const [buttonText, setButtonText] = useState("Show Locations");
    const [locationsList, setLocationsList] = useState([]);

    useEffect(() => {
        if (toggleShowLocationsButton) {
            setButtonText("Show Locations");
        } else {
            setButtonText("Hide Locations");
        }
    }, [toggleShowLocationsButton])

    useEffect(() => {
        setLocationsList(locations)
    }, [locations])

    function handleClick() {
        setToggleShowLocationsButton(previous => !previous)
    }

    function sortByProperty(property) {
        return function sortName(a, b) {
            if (a[property] < b[property]) {
                return -1;
            } else if (a[property] > b[property]) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    // function sortName(a, b) {
    //     console.log(a, b)
    //     if (a.name < b.name) {
    //         return -1;
    //     } else if (a.name > b.name) {
    //         return 1;
    //     } else {
    //         return 0;
    //     }
    // }

    // function handleSortName() {
    //     console.log("Testing sort name")
    //     const sorted = locations.slice().sort(sortName)
    //     console.log(sorted);
    //     setLocationsList(sorted);
    // }
    function handleSortName() {
        const sorted = locations.slice().sort(sortByProperty("name"))
        setLocationsList(sorted);
    }
    function handleSortClimate() {
        const sorted = locations.slice().sort(sortByProperty("climate"))
        setLocationsList(sorted);
    }
    function handleSortTerrain() {
        const sorted = locations.slice().sort(sortByProperty("terrain"))
        setLocationsList(sorted);
    }

    function renderMoreButtons() {
        if (toggleShowLocationsButton) {
            return (
                <span></span>
            )
        } else {
            return (
                <>
                    <button onClick={handleSortName}>Sort by Name</button>
                    <button onClick={handleSortClimate}>Sort by Climate</button>
                    <button onClick={handleSortTerrain}>Sort by Terrain</button>
                </>
            )
        }
    }

    function renderLocationsList() {
        if (toggleShowLocationsButton) {
            return (
                <ul></ul>
            )
        } else {
            return (
                <ul>
                    {locationsList.map(location => {
                        return (
          
                                <ul key={location.name}>
                                    <li><span>Name:</span> <span>{location.name}</span></li>
                                    <li><span>Climate:</span> <span>{location.climate}</span></li>
                                    <li><span>Terrain:</span> <span>{location.terrain}</span></li>
                                </ul>

                        )
                    })}
                </ul>
            )
        }
    }

    return (
        <div className="locations">
            <h3>List of Locations</h3>
            <button onClick={handleClick}>{buttonText}</button>
            {renderMoreButtons()}
            {renderLocationsList()}
        </div>
    )
}