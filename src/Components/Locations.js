import React, { useState, useEffect } from "react";
import { getAllLocations } from "../Fetch";

const Locations = () => {
    const [locations, setLocations] = useState([]);
    const [results, setResults] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        getAllLocations().then((locations) => {
            setLocations(locations);
        });
    }, []);

    const handleSort = (sort) => {
        const sortedLocations = locations.sort(function (a, b) {
            if (a[sort] < b[sort]) {
                return -1;
            }
            if (a[sort] > b[sort]) {
                return 1;
            }
            return 0;
        });
        setLocations(sortedLocations);
        handleLocations();
        setShow(true);
    };

    const handleLocations = () => {
        const results = locations.map(({ id, name, climate, terrain }) => {
            return (
                <ul key={id}>
                    <li>
                        <ul>
                            <li>
                                <span>Name:</span> <span>{name}</span>
                            </li>
                            <li>
                                <span>Climate:</span> <span>{climate}</span>
                            </li>
                            <li>
                                <span>Terrain:</span> <span>{terrain}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            );
        });
        setResults(results);
        show ? setShow(false) : setShow(true);
    };

    return (
        <div className='locations'>
            <h1>List of Locations</h1>
            <div className='locations-btn'>
                <button type='submit' onClick={() => handleLocations()}>
                    {show ? "Hide Locations" : "Show Locations"}
                </button>
                {show ? (
                    <>
                        <button type='submit' onClick={() => handleSort("name")}>
                            Sort by Name
                        </button>
                        <button type='submit' onClick={() => handleSort("climate")}>
                            Sort by Climate
                        </button>
                        <button type='submit' onClick={() => handleSort("terrain")}>
                            Sort by Terrain
                        </button>
                    </>
                ) : (
                    ""
                )}
            </div>
            <>{show && results}</>
        </div>
    );
};

export default Locations;