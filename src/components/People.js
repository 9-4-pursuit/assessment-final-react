import { useState, useEffect } from "react";
import { allThings } from "../services/fetch";
import Person from "./Person";

export default function People() {

    const [searchText, setSearchText] = useState("");
    const [allPeople, setAllPeople] = useState([]);
    const [showContent, setShowContent] = useState(false);
    const [searchedPerson, setSearchedPerson] = useState({});

    async function handleLoad() {
        const answer = await allThings('people');
        setAllPeople([...answer.data])
        console.log(allPeople);
    }

    useEffect(() => {
        handleLoad();
    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        event.target.searchbox.value = '';
        console.log(searchText);

        let searchedP = allPeople.filter(person => {
            return person.name.toLowerCase() === searchText.toLowerCase()
        });

        searchedP ? setSearchedPerson(searchedP[0]) : setSearchedPerson({});
        console.log(searchedP[0]);

        setShowContent(true);
    }


    return (
        <div className="people">
            <h1>Search for a Person</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    id="searchbox"
                    onChange={(event) => setSearchText(event.target.value)} />
                <button>Submit</button>
            </form>
            {(showContent && searchedPerson.name)
                ? <Person searchedPerson={searchedPerson} />
                : (showContent ? <p>Not Found</p> : null)
            }
        </div>
    )
}
