import { useState, useEffect } from "react";
import { getPeople } from "../Constants";
export default function People() {
  const [search, setSearch] = useState(""); //searchinput
  const [searchedPeople, setSearchedPeople] = useState([]); //all people data
  const [searchedPerson, setSearchedPerson] = useState(""); // person returned from searchinput
  const [searchError, setSearchError] = useState(""); // state  if person cant be found

  useEffect(() => {
    getPeople()
      .then((data) => {
        setSearchedPeople(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function inputHandler(event) {
    setSearch(event.target.value);
  }
  //updating the search input

  function submitHandler(event) {
    event.preventDefault();
    if (search) {
      const personReturned = searchedPeople.find(
        (person) => person.name.toLowerCase().includes(search.toLowerCase())
        //if there's a search we are looking for the serached person from our people's array
      );
      if (personReturned) {
        //if we find the person we typed in the input we update the state of the
        setSearchedPerson(personReturned);
      } else {
        //if we can find the person we're gonna update the error message

        setSearchError("Not Found");
      }
    } else {
      setSearchedPerson("");
      //if no search found updating state to reflect no one
    }
    setSearch("");

    //reset form
  }

  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form onSubmit={submitHandler}>
        <input type="text" value={search} onChange={inputHandler} />
        <button className="button">SUBMIT</button>
      </form>
      {searchedPerson && searchError == "" ? (
        <div>
          <h2>
            {" "}
            <b>Name: {searchedPerson.name}</b>
          </h2>
          <h4>
            {" "}
            <b>Age: </b>
            {searchedPerson.age}
          </h4>
          <h4>
            {" "}
            <b>Eye Color: </b>
            {searchedPerson.eye_color}
          </h4>
          <h4>
            <b>Hair Color: </b>
            {searchedPerson.hair_color}
          </h4>
        </div>
      ) : (
        <h2> {searchError}</h2>
      )}
    </div>
  );
}
