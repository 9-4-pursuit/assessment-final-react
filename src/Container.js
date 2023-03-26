import { Routes, Route } from "react-router-dom"
import HomePage from "./Components/HomePage"
import PeoplePage from "./Components/PeoplePage"
import MoviesPage from "./Components/MoviesPage"
import LocationsPage from "./Components/LocationsPage"


export default function Container() {
    return (
        <div>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/movies" element={<MoviesPage/>}/>
                <Route path="/people" element={<PeoplePage/>}/>
                <Route path="/locations" element={<LocationsPage/>}/>
                




            </Routes>
            
        </div>
    )
}