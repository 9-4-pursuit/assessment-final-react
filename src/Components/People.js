import { useState } from 'react';

export default function People({ people }) {
    const [selectPerson, setSelectPerson] = useState([]);
    const [initialRender, setInitialRender] = useState(true);
    function handleSubmit(event) {
        event.preventDefault();
        setSelectPerson(people.filter(person => (person.name === event.target.personSelect.value)));
        setInitialRender(false);
        //    populate with name, age, gender, clear field
        event.target.personSelect.value = "";
    }
    function personCard(){
        if (initialRender) {
            return (
                <div></div>
            )
        } else if (!initialRender && selectPerson.length === 0) {
            return (
                <div>Not Found</div>
            )
        } else {
            return (
                <aside>
                    <h3>Name: {selectPerson[0].name}</h3>
                    <p>Age: {selectPerson[0].age}</p>
                    <p>Eye Color {selectPerson[0].eye_color}</p>
                    <p>Hair Color {selectPerson[0].hair_color}</p>
                </aside>
            )
        }
        

    }
    return (
        <div className="people">
            <h3>Search for a Person</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" id="personSelect" />
                </label>
                <button type="submit">Submit</button>
            </form>
            {personCard()}
        </div>
    )
}