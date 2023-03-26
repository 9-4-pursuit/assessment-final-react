import { useState, useEffect } from "react";
import Person from "./Person";

function People() {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");
  const [found, setFound] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    async function getPeople() {
      const res = await fetch("https://resource-ghibli-api.onrender.com/people");
      const data = await res.json();
      setPeople(
        data.map(({ name, age, hair_color, eye_color }) => ({
          name: name,
          age: age,
          hair_color: hair_color,
          eye_color: eye_color,
        }))
      );
    }
    getPeople();
  }, []);

  const onChange = (e) => {
    setSearch(e.target.value);
    setSubmit(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    setFound(search);
    setSearch("");
    setSubmit(true);
  };

  const foundPerson = people.find(
    (person) => person.name.toLowerCase() === found.toLowerCase()
  );
  console.log(search);

  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <br />
      <form className="type-form" onChange={onChange} onSubmit={onSubmit}>
        <div className="form">
          <input
            onChange={onChange}
            id="people-search"
            value={search}
            type="text"
            placeholder="Enter a Name..."
          />
          <button type="submit" id="search-button" onSubmit={onSubmit}>
            Submit
          </button>
          <section>
            {foundPerson && submit ? (<Person people={foundPerson} />)
              : !foundPerson && submit ? ("Not Found") : null}
          </section>
        </div>
      </form>
    </div>
  );
}

export default People;