import { useState, useEffect } from "react"
import NotFound from "./NotFound"


export default function PeoplePage() {

    const [searchTerm, setSearchTerm] = useState('')
    const [allPeople, setAllPeople] = useState([])




    async function handleInput(event) {
        setSearchTerm(event.target.value)
    }

    async function handleSearch(event) {
        event.preventDefault()

        await fetch('https://resource-ghibli-api.onrender.com/people')
        .then(response => response.json())
        .then(data => {
            setAllPeople(data)
        })

        
        
    }

    const finalPerson = allPeople.find(person => person.name.toLowerCase() === searchTerm.toLocaleLowerCase())

    useEffect((event) => {

    },[allPeople]
    )


 


    return (
        <div>

        <h1>Search for a Person </h1>

        <form onSubmit={handleSearch}>
            <input 
            type="text"
            value={searchTerm}
            onChange={handleInput}
            />
            <button>Submit</button>
        </form>


        {finalPerson ? (
                <div>
                <h2>Name: {finalPerson.name}</h2>
                <p>Age: {finalPerson.age} </p>
                <p>Eye Color: {finalPerson.eye_color}</p>
                <p>Hair Color: {finalPerson.hair_color}</p>        
                </div>
            ) : (

                <NotFound/>

            )}

            
        </div>
    )
}