
import { useState, useEffect } from "react";
import "./People.css";

function People() {
  const [peopleData, setPeopleData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [foundPerson, setFoundPerson] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch("https://resource-ghibli-api.onrender.com/people")
      .then((response) => response.json())
      .then((response) => {
        setPeopleData(response);
      });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const person = peopleData.find(
      (person) => person.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (person) {
      setFoundPerson(person);
      setNotFound(false);
      setSearchTerm("");
    } else {
      setFoundPerson(null);
      setNotFound(true);
      setSearchTerm("");
    }
  };

  return (
    <div className="people">
      <h2>Search for a Person</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter a name"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {foundPerson ? (
        <div>
          <h3>{foundPerson.name}</h3>
          <p>Age: {foundPerson.age}</p>
          <p>Gender: {foundPerson.gender}</p>
          <p>Gender: {foundPerson.hair_color}</p>
        </div>
      ) : notFound ? (
        <p>Not Found</p>
      ) : (
        <p>Please enter a name to search.</p>
      )}
    </div>
  );
}

export default People;