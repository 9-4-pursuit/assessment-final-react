import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav/>

      <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/shows" element={<ShowsIndex />} />
          <Route path="/shows/new" element={<ShowsNewForm />} />
          <Route path="/shows/:id" element={<Show />} />
          <Route path="/shows/:id/edit" element={<ShowsEditForm />} />
          <Route path="/movies" element={<MoviesIndex />} />
          <Route path="/movies/new" element={<MoviesNewForm />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/movies/:id/edit" element={<MoviesEditForm />} /> */}
      </Routes>
    </div>
  );
}

export default App;
