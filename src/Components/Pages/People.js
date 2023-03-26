import { useEffect, useState } from "react";

export default function People() {
  let [peopleList, setPeopleList] = useState([]);
  let [person, setPerson] = useState("");
  let [text, setText] = useState('')
  let [notFound, setNotFound] = useState(false)

  useEffect(() => {
    fetch("https://resource-ghibli-api.onrender.com/people")
      .then((response) => response.json())
      .then((res) => setPeopleList(res), setNotFound(false))
      .catch((error) => console.log(error));
  }, []);

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleSearch() {
    let filtered = peopleList.filter((person) => person.name.toLowerCase() === text.toLowerCase()) 
    if(filtered.length <= 0) {
        setNotFound(true)
    } else {
        setPerson(filtered[0])
        setNotFound(false)
    }
    
  }

  return (
    <section className="people">

        <h2>Search for a Person</h2>
      <br />
      <input  onChange={handleChange} value={text} name="search" type="text" />
      <button onClick={handleSearch} type="button">Search</button>


      {person ? (
            <div>
                <h2>Name: {person.name}</h2>
                <p><strong>Age:</strong> {person.age}</p>
                <p><strong>Eye Color:</strong> {person.eye_color}</p>
                <p><strong>Hair Color:</strong> {person.hair_color}</p>
            </div>
      ) :  ""}
      {notFound ? <p>Not Found</p> : ""}
    </section>
  );
}
