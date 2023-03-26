import { useState, useEffect } from "react"
import { getPeople } from "./Fetch"
import Person from "./Person"


export default function People() {
const [people, setPeople] = useState([])
const [search, setSearch] = useState("")
const [selected, setSelected] = useState("")
const [error, setError] = useState(false)

useEffect(()=> {
    getPeople().then((response)=>{
        setPeople(response)
    }).catch((e) =>{
        console.log(e)
    })
   }, [])

   function handleTextChange(event) {
    setSearch(event.target.value);
   }

    function getPerson() {
        const result = people.filter(person => {
            return person.name.toLowerCase() === search.toLowerCase()
        })
        if (result.length > 0) {
            setError(false)
            return result[0]
        }else {
            setError(true)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSelected(getPerson());
        setSearch("")
    }

    return (
        <div className="People">
        <h1>Search for a Person</h1>
        <br></br>
        <form>
        <input type="text" value={search} onChange={(event)=> handleTextChange(event)}/>
        <button onClick={(event) => handleSubmit(event)}>Submit</button> 
        </form>
            {selected ? <Person person={selected}/> : null}
            {error ? <p> Not Found</p> :null}
    
        <br></br>
       
        </div>


  )
}
