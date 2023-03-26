import { useState, useEffect } from "react";
import { locations } from "../services/constants";
function Locations() {
    const [btnTxt, setBtnTxt] = useState(true);
    const [locationArr, setLocationArr] = useState([]);
    const [locationList, setLocationList] = useState('');
    const [sortBtn, setSortBtn] = useState();
    const [sortClimateBtn, setSortClimateBtn] = useState();
    const [sortTerrainBtn, setSortTerrainBtn] = useState();

    

    async function handleBtn(event) {
        event.preventDefault();
       setBtnTxt('HIDE LOCATIONS')

        // console.log(event.target.value)

       const location = await locations();
       setLocationArr(location);
        

       setSortBtn(<button>Sort by Name</button>);
       setSortClimateBtn(<button> Sort by Climate</button>);
       setSortTerrainBtn(<button>Sort by Terrain</button>)
       

       

       let loadedLocations = locationArr.map((addy) => {
        return (
            <ul key={addy.id}>
                <ul>
                <li>Name: {addy.name}</li>
                <li>Climate:{addy.climate}</li>
                <li>Terrain: {addy.terrain}</li>
                </ul>
            </ul>
        )
       })
       setLocationList(loadedLocations)

    }

    useEffect(() => {
        handleBtn()
    }, [])
    return (
        <div>
            <h3>List of Locations</h3>
            <button id='locationBtn' onClick={handleBtn}>{btnTxt ? "Show Locations" : "Hide Locations"}</button>
            {sortBtn}
            {sortClimateBtn}
            {sortTerrainBtn}
            {locationList}
        </div>
    )
}

export default Locations