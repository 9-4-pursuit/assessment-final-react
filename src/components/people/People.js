import { useState, useEffect } from "react";
import { getPeople } from "../../fetch/fetch";
import Person from "./Person"

export default function People() {
  const [allPeople, setAllPeople] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [person, setPerson] = useState({});
  const [searchSubmitted, setSearchSubmitted] = useState(false)

  //fetch the people array on page render
  useEffect(() => {
    getPeople()
    .then((res) => {
      setAllPeople([...res]);
    });
  },[]);

  //function for form submission
  function onSearchSubmit(event) {
    event.preventDefault();
    event.target.searchbox.value = "";

    const result = allPeople.filter((character) => {
      return (character.name.toLowerCase() === searchText.toLowerCase());
    })[0]

    result ? setPerson(result) 
    :setPerson({})
  
    setSearchSubmitted(true);

  }

  //function for search box text change
  function searchTextChange(event) {
    setSearchText(event.target.value);
  }

  return (<div className="people">
    <h1>Search for a Person</h1>
    <form onSubmit={onSearchSubmit}>
      <input id="searchbox" type="text" onChange={searchTextChange}/>
      <button type="submit">Submit</button>
    </form>

    {(searchSubmitted && person.name) ? <Person person={person}/> 
    :(searchSubmitted ? <p>Not Found</p> 
    : null)}

  </div>);
};