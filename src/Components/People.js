import React from 'react'
import {findPeople} from '../Services/Constants'
import { useState, useEffect } from 'react'


function People() {

  // set all the variables you will need to update states 

  const [search, setSearch] = useState("");
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState("");
  const [notFound, setNotFound] = useState(false);

  
  // this is to pull the ppl information from the data and change the value

  async function getPeople() {
    const response = await findPeople();
    console.log (response.data.name.age.eye_color.hair_color)
    setPeople (response.data.name.age.eye_color.hair_color)
 }


  function handleChange(e) {
    setSearch(e.target.value); }



    // this focuses on filtering through look throuhg and return 
function getSelectedPerson() {
   const personArr = people.filter(p => {
        return p.name.toLowerCase() == search.toLowerCase()
    });

    if (personArr.length > 0) {
        setNotFound(false);
        return personArr[0];
    } else {
        setNotFound(true);
    }
  }

function handleSubmit(e) {
  // get selected person
  e.preventDefault();
  setSelectedPerson(getSelectedPerson())
  setSearch("");
}



  return (
    <div>
      <h2>Search for a Person</h2>
      <form>
        <input type="text" value={search} onChange={(e) => handleChange(e)} />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
      {selectedPerson ? <PersonCard person={selectedPerson} /> : null}
      {notFound ? <p>Not found.</p> : null}
    </div>
  )
}
  
export default People

// ELEMENTS FOR THIS PAGE:
// Text: Search For A Person 
// Search Input Box
// Need to Query---get back the following information: 
// Name, Age, Eye Color and Hair Color
// NOT found 404 Message 
