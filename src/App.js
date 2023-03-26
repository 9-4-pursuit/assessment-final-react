import Container from "./Container";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Container />
      </main>
    </div>
  );
}

export default App;
