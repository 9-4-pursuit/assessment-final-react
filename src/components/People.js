import React, { useState, useEffect } from "react";

const People = () => {
  const [people, setPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showNotFound, setShowNotFound] = useState(false);
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const results = people.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
    setShowNotFound(results.length === 0);
  };
  
  const handleClear = () => {
    setSearchTerm('');
    setSearchResults([]);
    setShowNotFound(false);
  };

  

  useEffect(() => {
    fetch("https://resource-ghibli-api.onrender.com/people")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="people">
      <h2>People</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleSearch} />
        <button type="submit">Search</button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>
      {showNotFound && <p>No results found</p>}
      <div className="people-list">
        {searchResults.map((person) => (
            <div key={person.id} className="person">
              <h3>Name: {person.name}</h3>
              <p>
                <strong>Age:</strong> {person.age}
              </p>
              <p>
                <strong>Eye Color:</strong> {person.eye_color}
              </p>
              <p>
                <strong>Hair Color:</strong> {person.hair_color}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default People;
