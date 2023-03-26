import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import People from "./People"
import Movies from "./Movies"
import Locations from "./Locations";

export default function Container() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/movies" element={<Movies />}/>
                <Route path="/people" element={<People />}/>
                <Route path="/locations" element={<Locations />}/>
            </Routes>
        </div>
    )
}