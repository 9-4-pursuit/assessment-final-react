export default function Person({person}) {
    return (
    <div className="person">

        <h1>Name: {person.name} </h1>
        <p><span><strong>Age:</strong></span> {person.age}</p>
        <p><span><strong>Eye Color:</strong></span> {person.eye_color}</p>
        <p><span><strong>Hair Color:</strong></span> {person.hair_color}</p>
    </div>

  )
}