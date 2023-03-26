import React from "react";
import { getPeople } from "../services/constants";
import { useState } from "react";

function People() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    const people = await getPeople();
    const filteredResults = people.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults);
  }

  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">SUBMIT</button>
        {searchResults.length > 0 ? (
          searchResults.map((person) => {
            return (
              <aside>
                <h3>Name: {person.name}</h3>
                <p>
                  <span>Age:</span> {person.age}
                </p>
                <p>
                  <span>Eye Color:</span> {person.eye_color}
                </p>
                <p>
                  <span>Hair Color:</span> {person.hair_color}
                </p>
              </aside>
            );
          })
        ) : (
          search.length > 0 && <p>Not found</p>
        )}
      </form>
    </div>
  );
}

export default People;
