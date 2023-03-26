import { useState, useEffect } from "react";
import { allThings } from "../services/fetch";

export default function Locations() {


    const [allLocations, setAllLocations] = useState([]);
    const [showContent, setShowContent] = useState(false);
    const [buttonText, setButtonText] = useState("Show Locations");

    async function handleLoad() {
        const answer = await allThings("locations");
        setAllLocations([...answer.data])
        console.log(allLocations);
    }

    useEffect(() => {
        handleLoad();
    }, [])

    function handleClick() {
        setShowContent(!showContent);
        if (!showContent) {
            setButtonText("Hide Locations");
        } else {
            setButtonText("Show Locations");
        }
    };

    function handleSort(type) {
        // let sortValue = event.target.value;
        // console.log(sortValue);
        let sortedArr = [...allLocations].sort(function (a, b) {
            if (a[type] < b[type]) {
                return -1
            }
            if (a[type] > b[type]) {
                return -1
            }
            return 0
        })       
        setAllLocations(sortedArr);
    }

    return (
        <div className="locations">
            <h1>List of Locations</h1>
            <button onClick={handleClick}>{buttonText}</button>
            {
                showContent
                    ? <>
                        <button onClick={() => handleSort('name')} value="name">Sort by Name</button>
                        <button onClick={() => handleSort('climate')} value="climate">Sort by Climate</button>
                        <button onClick={() => handleSort('terrain')} value="terrain">Sort by Terrain</button>
                        <ul>
                            {allLocations.map((location) => {
                                // console.log(location);
                                return (
                                    <ul key={location.id}>
                                        <li>
                                            <p>Name:  <span>{location.name}</span></p>
                                            <p>Climate: <span>{location.climate}</span></p>
                                            <p>Terrain:  <span>{location.terrain}</span></p>
                                        </li>
                                    </ul>
                                )
                            })}
                        </ul>
                    </>
                    : <></>
            }
        </div>
    )
}