import "./App.css";

//import images
import rocketLogo from "./assets/rocket-logo.png";

function App() {
  return (
    <>
      <header>
        <img src={rocketLogo} alt="rocket" />
        <h1>Ready To Go</h1>
      </header>
      <main></main>
      <footer>
        <p>
          Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
          <span>Elodiiiie</span> 🌸
        </p>
      </footer>
    </>
  );
}

export default App;
