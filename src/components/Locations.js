import { getLocations } from "../api/fetch";
import { useState, useEffect } from "react";

export default function Locations () {
    const [loc, setLoc] = useState([])
    const [showLoc, setShowLoc] = useState(false);

    useEffect(() => {
        getLocations()
        .then(setLoc)
        .catch((error) => {
            console.log(error)
        })
    }, [])

        const sortLocType = (type) => {
            const sortType = [...loc].sort((a, b) => {
                return a[type].localCompare(b[type]);
            })
            setLoc(sortType);
        };

        return (
            <div className="locations">
                <h2>List of Locations</h2>
                <button onClick={() => setShowLoc(!showLoc)}></button>
                {showLoc && (
                    <>
                    <button onClick={() => sortLocType("name")}>Sort by Name</button>
                    <button onClick={() => sortLocType("climate")}>Sort by Climate</button>
                    <button onClick={() => sortLocType("terrain")}>Sort by Terrain</button>
                    
                <ul>
                    {loc.map((location) => {
                        return (
                            <li key={location.id}>
                                <ul className="details">
                                    <li><span>Name:</span><span>{loc.name}</span></li>
                                    <li><span>Climate:</span><span>{loc.climate}</span></li>
                                    <li><span>Terrain:</span><span>{loc.terrain}</span></li>
                                </ul>
                            </li>
                        )
                    })}
                </ul>
                </>
                )}
            </div>
        )


}

