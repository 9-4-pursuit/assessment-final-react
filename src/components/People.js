import React, { useState, useEffect } from "react";


const People = () => {
    const [people, setPeople] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const results = people.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setSearchResults(results);
    };
  
    const handleClear = () => {
      setSearchTerm('');
      setSearchResults([]);
    };

  const displayResults = () => {
    if (searchResults.length === 0) {
      return <p>Person Not Found</p>;
    }
    return searchResults.map((person) => (
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
    ));
  };

  useEffect(() => {
    fetch("https://resource-ghibli-api.onrender.com/people")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data);
        // Generates the people dem.
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [setSearchTerm, people]);

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
      <div className="people-list">
      {searchResults.length > 0
  ? displayResults()
  : (searchTerm === ''
      ? people.map((person) => (
          <div key={person.id} className="person">
            <h3>{person.name}</h3>
            <p>
              <strong>Gender:</strong> {person.gender}
            </p>
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
        ))
      : searchResults.length > 0 
          ? displayResults() 
          : <p>Person Not Found</p>
    )
}


      </div>
    </div>
  );
};

export default People;
