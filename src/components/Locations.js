import { useState, useEffect } from "react";
import { allThings } from "../services/fetch";

export default function Locations() {

    const [allLocations, setAllLocations] = useState([]);
    const [showContent, setShowContent] = useState(false);
    const [buttonText, setButtonText] = useState("SHOW LOCATIONS");

    async function handleLoad() {
        const answer = await allThings("locations");
        setAllLocations([answer.data])
        console.log(allLocations);
    }

    useEffect(() => {
        handleLoad();
    }, [])

    function handleClick() {
        setShowContent(!showContent);
        if (!showContent){
            setButtonText("HIDE LOCATIONS");
        } else {
            setButtonText("SHOW LOCATIONS");
        }
    }

    return (
        <div className="locations">
            <h1>List of Locations</h1>
            <button onClick={handleClick}>{buttonText}</button>
            {
                showContent
                    ? <>
                        <button>SORT BY NAME</button>
                        <button>SORT BY CLIMATE</button>
                        <button>SORT BY TERRAIN</button>
                    </>
                    : <></>
            }
        </div>
    )
}