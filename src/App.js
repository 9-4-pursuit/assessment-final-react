import Nav from './components/Nav';
import Container from "./Container";
import './css/App.css';

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
      <h2 className='welcome-header'> Welcome to GhibliApp </h2>
        <Container />
      </main>
    </div>
  );
}

export default App;
