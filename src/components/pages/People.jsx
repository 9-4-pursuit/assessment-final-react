import { useState, useEffect } from "react";
import { fetchApi } from "../../api/fetch";

function People() {
  const [allPeople, setAllPeople] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    fetchApi("people")
      .then((response) => {
        setAllPeople(response);
      })
      .catch((error) => console.log(error));
  }, [])

  function updateSearch(event) {
    setSearchValue(event.target.value);
  }
 
  function handleSearch(event) {
    event.preventDefault();
    setSearchName(searchValue);
    setSearchValue("");
  }

  function showPersonDetails() {
    const thePerson = allPeople.find((person) => person.name.toLowerCase() === searchName.toLowerCase());

    if (!thePerson) {
      return(<p>Not Found</p>)
    } else {
      return(
        <>
          <h1>Name: {thePerson.name}</h1>
          <p>Age: {thePerson.age}</p>
          <p>Eye Color: {thePerson.eye_color}</p>
          <p>Hair Color: {thePerson.hair_color}</p>
        </>
      )
    }
  }

  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search..." value={searchValue} onChange={updateSearch} />
        <button  type="submit">Submit</button>
      </form>

      {searchName && showPersonDetails()}
    </div>
  )
}

export default People;