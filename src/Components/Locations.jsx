
function Locations( { locations, showLocation, sortBy, toggleLocation }) {
    return (
        <main className="locations">
            <h2>List of Locations</h2>
            { showLocation ? (
            <div>
                <button onClick={toggleLocation}>Hide Locations</button>
                <button onClick={() => sortBy('name')}>Sort by Name</button>
                <button onClick={() => sortBy('climate')}>Sort by Climate</button>
                <button onClick={() => sortBy('terrain')}>Sort by Terrain</button>
            </div>
            ): <button onClick={toggleLocation}>Show Locations</button>}
            { locations && showLocation ? (
            <div>
                {locations.map((location) => { return (
                    <ul key={locations.id}>
                        <ul>
                            <li><span>Name: </span>
                            <span>{location.name}</span></li>
                            <li><span> Climate: </span>
                            <span>{location.climate}</span></li>
                            <li><span>Terrain: </span>
                            <span>{location.terrain}</span></li>
                            
                        </ul>
                    </ul>
                )})}
                </div>
             ): null }
        </main>
    )
}

export default Locations