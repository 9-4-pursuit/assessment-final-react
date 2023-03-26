import { useState, useEffect } from "react";

export default function Locations() {

    let locationsUrl = `https://resource-ghibli-api.onrender.com/locations`;

    const [sortButtons, setSortButtons] = useState(<> </>);

    const [locations, setLocations] = useState([]);

    const [showOrHide, setShowOrHide] = useState("Show");

    const [display, setDisplay] = useState(<> </>);

    useEffect(() => {

        fetch(locationsUrl)
        .then((response) => response.json())
        .then((data) => {

        setLocations(data);

    }).catch((error) => {
        console.log(error);
    })
    }, [])

    function handleClick(event) {
        event.preventDefault();

        setSortButtons(
        <>
            <button> Sort by Name </button>
            <button> Sort by Climate </button>
            <button> Sort by Terrain </button>
        </>
        )

        setDisplay(
            <>
                {locations.map((location, i) => <ul key={location.id}> <li> <span> <strong> Name: </strong> {location.name} </span> </li> 
                                                     <li> <span> <strong> Climate: </strong> {location.climate} </span> </li>
                                                     <li> <span> <strong> Terrain: </strong> {location.terrain}</span> </li> </ul>)}
            </>
        )

        if (showOrHide === "Show") {
            setSortButtons(
                <>
                    <button> Sort by Name </button>
                    <button> Sort by Climate </button>
                    <button> Sort by Terrain </button>
                </>
                )
            setDisplay(
                <>
                    {locations.map((location, i) => <ul key={location.id} className='listed'> <li> <span> <strong> Name: </strong> {location.name} </span>  </li> 
                                                         <li> <span> <strong> Climate: </strong> {location.climate} </span>  </li>
                                                         <li> <span> <strong> Terrain: </strong> {location.terrain} </span> </li> </ul>)}
                </>
            )
            setShowOrHide("Hide");
        }
        else {
            setDisplay(<> </>)
            setSortButtons(<> </>)
            setShowOrHide("Show")
        }
    }

    return (
        <div className="locations">
            <h2> List of Locations </h2>
            <section>
            <button onClick={handleClick}> {showOrHide} Locations </button>
            {sortButtons}
            </section>
            <br />
            <div>
                <ul>
                    {display}
                </ul>
            </div>
        </div>
    )
}