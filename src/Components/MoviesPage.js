import { useState, useEffect } from "react"

export default function MoviesPage() {

    const [titles, setTitles] = useState([])
    const [dropdown, setDropDown] = useState(null)


    useEffect(() => {
        fetch('https://resource-ghibli-api.onrender.com/films').then(response => response.json()).then(data => setTitles(data))
    },[])

    // console.log(titles)



    function handleTitleChange(event) {
        setDropDown(event.target.value)

        console.log(dropdown)

    }

    const selectedTitle = titles.find(title => title.id === dropdown)


    return (
        <div className="movies">

            <h1>Select a Movie</h1>
            <select onChange={handleTitleChange}>
                <option value=''>empty</option>

                {titles.map(title => (

                    <option key={title.id} value={title.id}>
                        {title.title}
                    </option>
                ))}
            </select>

            {selectedTitle && (
                <div>
                    <h2>Title: {selectedTitle.title}</h2>
                    <h4>Release Date: {selectedTitle.release_date}</h4>
                    <p> <strong>Description:</strong> {selectedTitle.description}</p>
                </div>
            )}


      

            
            
        </div>
    )
}