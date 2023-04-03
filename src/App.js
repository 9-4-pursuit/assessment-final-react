
import Container from "./Container";
import NavBar from "./components/common/NavBar";

function App() {
  return (
    <div className="app">
      <header>
        <NavBar />
      </header>
      <main>
        <Container />
      </main>
    </div>
  );
}

export default App;
