import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Locations from './components/Locations';
import People from './components/People';
import Movies from './components/Movies';
import NotFound from './components/NotFound';

function Container() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<h1>Welcome to GhibliApp</h1>} />
                <Route path='/locations' element={<Locations />} />
                <Route path='/people' element={<People />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default Container;