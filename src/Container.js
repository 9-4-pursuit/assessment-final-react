//IMPORT COMPONENETS HERE
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Locations from './components/Locations';
import Movies from './components/Movies';
import People from './components/People';

function Container() {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path="/movies" element={<Movies />} />
                <Route path="/people" element={<People />} />
                <Route path="/locations" element={<Locations />} />

            </Routes>
        </div>
    )
}

export default Container