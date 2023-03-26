import { useState, useEffect } from "react";
import { allThings } from "../services/fetch";
import Person from "./Person";
import Error from "./Error";

export default function People() {

    const [searchText, setSearchText] = useState("");
    const [allPeople, setAllPeople] = useState([]);
    const [searchedPerson, setSearchedPerson] = useState({});
    const [showContent, setShowContent] = useState(false);
    const [errorClear, setErrorClear] = useState(true);

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
        // console.log(searchText);

        let searchedP = allPeople.filter(person => {
            return person.name.toLowerCase() === searchText.toLowerCase()
        });

        searchedP ? setSearchedPerson(searchedP[0]) : setSearchedPerson({});
        !searchedP.length ? setErrorClear(false) : setErrorClear(true)
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
            {(showContent && errorClear)
                ? <Person searchedPerson={searchedPerson} />
                : (showContent ? <Error /> : null)
            }
        </div>
    )
}
