import { useState, useEffect } from "react"
import { getLocations } from "./Fetch"
import Location from "./Location"

export default function Locations() {
    const [clicked, setClicked] = useState(false)
    const [locations, setLocations] = useState([])
    
    
    
    
    function handleClick(){
        setClicked(!clicked)
    }
    
    
    function sortName(){
        const newArr=[...locations]
        newArr.sort((a,b) => {
            if (a.name < b.name){
                return -1
            }
            if (a.name > b.name){
                return 1
            }
            return 0
        })
        setLocations(newArr)
    }
    
    
    function sortClimate(){
        const newArr=[...locations]
        newArr.sort((a,b) => {
            if (a.climate < b.climate){
                return -1
            }
            if (a.climate > b.climate){
                return 1
            }
            return 0
        })
        setLocations(newArr)
    }
    
    
    
    function sortTerrain(){
        const newArr=[...locations]
        newArr.sort((a,b) => {
            if (a.terrain < b.terrain){
                return -1
            }
            if (a.terrain > b.terrain){
                return 1
            }
            return 0
        })
        setLocations(newArr)
    }
    
    
    useEffect(()=> {
        getLocations().then((response)=>{
            setLocations(response)
        }).catch((e) =>{
            console.log(e)
        })
    }, [])
    
    
    
    return (
        <div className="locations">
        <h1> List of Locations</h1>
        <button onClick={handleClick}>{clicked ? "Hide Locations" : "Show Locations"}</button>
        
        {clicked ? (
            <>
            <button onClick={sortName}>Sort by Name</button>
            <button onClick={sortClimate}>Sort by Climate</button>
            <button onClick={sortTerrain}>Sort by Terrain</button>
            </>
        ) : null}

        <ul className="details">
            {clicked ? locations.map((location)=>{
                return (
                    <li key={location.id}> <Location location={location}/> </li>
                )}) : null }
        </ul>
    </div>

  )
}