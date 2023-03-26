import { useState, useEffect } from "react";
import { allThings } from "../services/fetch";

export default function People() {

    const [searchText, setSearchText] = useState("");
    const [allPeople, setAllPeople] = useState([]);
    const [showContent, setShowContent] = useState(false);


    async function handleLoad(){
        const answer = await allThings('people');
        setAllPeople([answer.data])
        console.log(allPeople);
    }

    useEffect(() => {
        handleLoad();
    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        event.target.value = ''
        console.log(searchText);
    }

    return (
        <div className="people">
            <h1>Search for a Person</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    onChange={(event) => setSearchText(event.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}