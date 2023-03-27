import { getPeople } from "../api/fetch";
import { useState, useEffect } from "react";

export default function People() {
    const [people, setPeople] = useState([])
    const [search, setSearch] = useState("")
    const [getPerson, setGetPerson] = useState("")
    const [error, setError] = useState("")
    
    

      useEffect(() => {
        getPeople()
        .then((data) => {
          setPeople(data);
          console.log(data)
        })
        .catch((error) => {
          console.log(error)
        })
      }, []);

      function handleSubmit(e) {
        e.preventDefault()
      }

      if(search) {
        const person = people.find((p) => 
        p.name.toLowerCase().includes(search.toLowerCase())
        );
      if(person) {
        setGetPerson(person)
        setError("");
      } else {
        setError("error")
      } 
    } else {
      setError("error")
      setGetPerson("")
    }
    setSearch("");

    function handleChange(e) {
      setSearch(e.target.value)
    }

    return (
      <main className="people">
        <section>
          <h2>Search for a Person</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={search}
              onChange={handleChange}
              placeholder="Search.."
            />
            <button>Submit</button>
            </form>
            </section>
            {getPerson && !error ? (
              <aside>
                <div>
                  <h3><span>Name:<span>{getPerson.name}</span></span></h3>
                  <p><span>Age:</span>{getPerson.age}</p>
                  <p><span>Eye Color:</span>{getPerson.eye_color}</p>
                  <p><span>Hair Color:</span>{getPerson.hair_color}</p>
                </div>
              </aside>
            ) : (
              <section>
                <p>{error}</p>
              </section>
            )}
      </main>
    );
  }
  
