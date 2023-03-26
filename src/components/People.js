import { peopleSearch } from "../services/constants";
import { useState, useEffect } from "react";

function People() {

    const [peopleArr, setPeopleArr] = useState([]);
    const [searchedPersons, setSearchedPersons] = useState("");
    const [ searchedName, setSearchedName ] = useState('');
    const [ age, setAge ] = useState('');
    const [ eye, setEye ] = useState('');
    const [ hair, setHair ] = useState('');
    const [infoDisplay, setinfoDisplay] = useState('none')
    const [ notFound, setNotFound ] = useState('');
  
  
    async function handleBtn(event) {
      event.preventDefault();

      console.log(event.target.search.value)
      const person = await peopleSearch();
    //   console.log(person);
      setPeopleArr(person);
       setSearchedPersons(event.target.search.value.toLocaleLowerCase());
      console.log(searchedPersons);
    
      peopleArr.map((foundMe) => {
        if(foundMe.name.toLocaleLowerCase() === searchedPersons) {
            setSearchedName(foundMe.name);
            setAge(foundMe.age);
            setEye(foundMe.eye_color);
            setHair(foundMe.hair_color);
            setinfoDisplay('block');
        } else {
            setNotFound('Not Found')
        }
      })
    }
  
    useEffect(() => {
        handleBtn()
    })

    return (
        <div className="people">
            <form onSubmit={handleBtn}>
                <label htmlFor="">Search for a Person</label><br />
                <input type='text' id="search"/>
                <button>SUBMIT</button>
            </form> 
            <div style={{'display': infoDisplay}}>
                <h3><span>Name:</span> {searchedName} </h3>
                <p><span>Age:</span> {age}</p>
                <p><span>Eye Color:</span> {eye}</p>
                <p><span>Hair Color:</span> {hair}</p>
                
            </div>
        </div>
    )
}

export default People