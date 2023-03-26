import { useState } from "react"




export default function Locations({ locations }) {

    const [click, setClick] = useState(false)
    const [land, setLand] = useState([locations])


    function handleClick(){
        setClick(!click)
    }


    function handleClimate() {
        let obj = {}
        let arr = []
        for (let i = 0; i < 7; i++){
        land[0].map((locate) => {
        if(!obj[i][locate.climate]){
            obj[i][locate.climate] = obj[i][locate.climate]
        }
        })
    }
        console.log(Object.keys(obj))
    }

    if(!click){
        return (
            <section className="locations">
            <section style={{"textAlign": "center"}}>
            <h1 style={{"fontWeight": "normal" }}>List of Locations</h1>
            <button onClick={handleClick}>{!click ? "Show Locations" : "Hide Locations"}</button>
            </section>
            </section>
        )
    } else if(click){
    return (
        <section className="locations">
            <section style={{"textAlign": "center"}}>
            <h1 style={{"fontWeight": "normal" }}>List of Locations</h1>
            <button onClick={handleClick}>{!click ? "Show Locations" : "Hide Locations"}</button>
            <button>Sort by Name</button>
            <button onClick={handleClimate}>Sort by Climate</button>
            <button>Sort by Terrain</button>
            </section>
            {land[0].map((location) => {
                return (
                    <ul key={location.id}>
                        <li className="details">
                            <ul>
                                <li><span>Name:</span> {location.name}</li>
                                <li><span>Climate:</span> {location.climate}</li>
                                <li><span>Terrain:</span> {location.terrain}</li>
                            </ul>
                        </li>
                    </ul>
                )
            })}
        </section>
    )
        }
}