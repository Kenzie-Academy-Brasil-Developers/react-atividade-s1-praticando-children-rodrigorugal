import "./App.css";
import Children from "./components/Children/CenteredCard";

function App() {
  const test = {
    child1: "Rodrigo",
    child2: "Julio",
  };

  return (
    <div className="App">
      <header className="App-header">
        <Children children1={test.child1} />
      </header>
    </div>
  );
}

export default App;
