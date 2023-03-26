import { useState } from "react"



export default function People({ people }) {

    const [person, setPerson] = useState([])
    const [search, setSearch] = useState("")
    const [click, setClick] = useState(false)
    

    let place = ""
    let arr = []

   function handleSearch(event) {
      setSearch(event.target.value)
    }


     function handleClick(event) {
        event.preventDefault()
        people.map((element) => {
            arr.push(element.name.toLowerCase())
            if(element.name.toLowerCase().includes(search.toLowerCase()) && search.length > 1){
              setPerson(element)
            }
        })
        setClick(true)
        place = search
        setSearch("")
        console.log(person)
        console.log(search)
    }
    

   


    if(!click){
    return (
        <div className="people">
            <h2 style={{"fontWeight": "normal"}}>Search for a Person</h2>
            <form style={{"textAlign": "center"}}>
                <input
                onChange={handleSearch}
                value={search}
                type="text"
                />
                <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
    } else if (click && person.length < 1 ) {
        return (
            <div className="people">
                <h2 style={{"fontWeight": "normal"}}>Search for a Person</h2>
                <form style={{"textAlign": "center"}}>
                    <input
                    onChange={handleSearch}
                    value={search}
                    type="text"
                    />
                    <button onClick={handleClick}>Submit</button>
                </form>
                <p style={{"textAlign": "center"}}>Not Found</p>
            </div>
        )
    } else if (click) {
        return (
            <div className="people">
                <h2 style={{"fontWeight": "normal"}}>Search for a Person</h2>
                <form style={{"textAlign": "center"}}>
                    <input
                    onChange={handleSearch}
                    value={search}
                    type="text"
                    />
                    <button onClick={handleClick}>Submit</button>
                </form>
                <aside className="personsDesc">
                    <h3>Name: {person.name}</h3>
                    <p><span>Age:</span> {person.age}</p>
                    <p><span>Eye Color:</span> {person.eye_color}</p>
                    <p><span>Hair Color:</span> {person.hair_color}</p>
                </aside>
            </div>
        )
    }
}