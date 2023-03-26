import { useState, useEffect } from "react";

export default function People() {

    let peoplesUrl = `https://resource-ghibli-api.onrender.com/people`;

    const [peoples, setPeoples] = useState(null);

    const [input, setInput] = useState("");

    const [display, setDisplay] = useState(<> </>);

    useEffect(() => {

        fetch(peoplesUrl)
        .then((response) => response.json())
        .then((data) => {

        setPeoples(data);

    }).catch((error) => {
        console.log(error);
    })
    }, [])

    function handleClick(event) {
        event.preventDefault();

        for (let people of peoples) {

            if (people.name === input || people.name.toLowerCase() === input.toLowerCase()) {

                setDisplay(
                    <>
                    <h3> <strong> Name: </strong> {people.name} </h3>
                    <p> <strong> Age: </strong> {people.age} </p>
                    <p> <strong> Eye Color: </strong> {people.eye_color} </p>
                    <p> <strong> Hair Color: </strong> {people.hair_color} </p>
                    </>
                )
            }
        }
    }

    return (
        <div className="people">
            <h2> Search for a Person </h2>
            <form>
                <input type='text' onKeyUp={(event) => setInput(event.target.value)} />
                <button type="submit" onClick={handleClick}> Submit </button>
            </form>
            <br />
            <section className="display">

                {display}
                
            </section>
        </div>
    )
}