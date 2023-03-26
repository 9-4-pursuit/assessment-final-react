import { useState, useEffect } from "react";
import { allThings } from "../services/fetch";

export default function Locations() {


    const [allLocations, setAllLocations] = useState([]);
    const [showContent, setShowContent] = useState(false);
    const [buttonText, setButtonText] = useState("Show Locations");

    async function handleLoad() {
        const answer = await allThings("locations");
        setAllLocations([...answer.data])
        // console.log(allLocations);
    }

    useEffect(() => {
        handleLoad();
    }, [])

    function handleClick() {
        setShowContent(!showContent);
        if (!showContent){
            setButtonText("Hide Locations");
        } else {
            setButtonText("Show Locations");
        }
    };

    function handleSort(event){

    }

    return (
        <div className="locations">
            <h1>List of Locations</h1>
            <button onClick={handleClick}>{buttonText}</button>
            {
                showContent
                    ? <>
                        <button onClick={handleSort} value="name">Sort By Name</button>
                        <button onClick={handleSort} value="climate">Sort By Climate</button>
                        <button onClick={handleSort} value="terrain">Sort By Terrain</button>
                        {allLocations.map((location) => {
                            // console.log(location);
                            return(
                                <ul key={location.id}>
                                    <p>{`Name:  ${location.name}`}</p>
                                    <p>{`Climate:  ${location.climate}`}</p>
                                    <p>{`Terrain:  ${location.terrain}`}</p>
                                </ul>
                            )
                        })}
                    </>
                    : <></>
            }
        </div>
    )
}