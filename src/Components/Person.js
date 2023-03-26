


const Person = ({person}) => {
    return (
        <div className="person">
        <h1>Name: {person.name}</h1>
        <p><span>Age:</span> {person.age}</p>
        <p><span>Eye Color:</span> {person.eye_color}</p>
        <p><span>Hair Color:</span> {person.hair_color}</p>
    </div>
    )
}

export default Person;