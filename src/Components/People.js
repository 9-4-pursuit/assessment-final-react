import React, { useState, useEffect } from "react";
import { getAllPersons } from "../Fetch";


const People = () => {
    const [people, setPeople] = useState([]);
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        getAllPersons().then((people) => {
            setPeople(people);
        });
    }, []);

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearch(value);
    };

    const searchFilter = () => {
        const searchResult = people
            .filter((person) =>
                person.name.toLowerCase().includes(search.toLowerCase())
            )
            .map(({ id, name, age, eye_color, hair_color }) => {
                return (
                    <div className="item" key={id} >
                        <h1>Name: {name}</h1>
                        <p> Age: {age}</p>
                        <p>Eye Color: {eye_color}</p>
                        <p>Hair Color: {hair_color}</p>
                    </div>
                );
            });
        if (searchResult.length === 0) {
            setResults(<div className="item warning"><p>Not Found</p></div>);
        } else {
            setResults(searchResult);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searchFilter();
        setSearch("");
    };

    return (
        <div className='people'>
            <h1>Search for a Person</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' onChange={handleSearch} value={search} required />
                    <button type='submit' value='Submit'>
                        Search
                    </button>
                </form>
            </div>
            {results}
        </div>
    );
};
export default People;