function Person({ people }) {
    const { name, age, hair_color, eye_color } = people;
    return (
      <article className="person">
        <p> Name: {name} </p>
        <p> Age: {age}</p>
        <p> Hair Color: {hair_color} </p>
        <p> Eye Color: {eye_color}</p>
      </article>
    );
  }
  
  export default Person;
  