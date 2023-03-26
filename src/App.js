import "./index.css";
import Nav from "./Components/Nav";//This is the menu
import Container from "./Container";//These are the routes
import Movies from "./Components/Movies"; // This is the movie page
import People from "./Components/People"; // This is the people search page
import Locations from "./Components/Locations"; // this is the Location



function App() {
  return (
    <div className="app">
      <Nav/>
      <Movies/>
      <People/>
      <Locations/>

    </div>
  );
}

export default App;
