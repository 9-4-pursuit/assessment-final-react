import React from "react";
import Home from "./Components/Home";

function App() {
  return (
    <div className="nav">
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='Movies' element={<Movies/>} />
          <Route path='People' element={<People/>} />
          <Route path='Location' element={<Location/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
