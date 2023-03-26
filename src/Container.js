import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Locations from "./components/Locations";
import Movies from './components/Movies';
import People from './components/People';

export default function Container() {

    return (
        <>
        <Routes>
            <Route path="/" />
            <Route path="*" element={<NotFound />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/people" element={<People />} />
        </Routes>
        </>
    )
}