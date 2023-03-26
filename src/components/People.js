import { useState } from "react"
import { useEffect } from "react"
import { getPeople } from "../api/fetch"


export default function People() {

    const [people, setPeople] = useState([])
    const [person, setPerson] = useState({})
    const [search, setSearch] = useState('')

    useEffect(() => {
        getPeople().then(response => setPeople(response))
    }, [])

    function handleClick() {
        console.log(search)
        // console.log(people)
        const searchedPerson = people.filter( (person) => person.name === search )
        setPerson(searchedPerson[0])
        console.log(person)
    }
    
    return (
        <div className="people">
            <h2>Search for a Person</h2>
            <form>
                <input type='text' value={search} onChange={(e) => {setSearch(e.target.value)}}></input>
                <button type='button' onClick={() => handleClick()}>SUBMIT</button>
            </form>
        </div>
    )
    
}