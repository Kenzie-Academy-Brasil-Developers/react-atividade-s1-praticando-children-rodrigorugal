import "./App.css";
import Children from "./components/Children/CenteredCard";

function App() {
  const test = ["Children 1", "Children 2", "Children 3", "Children 4"];

  return (
    <div className="App">
      <header className="App-header">
        {test.map((item) => (
          <Children> {item} </Children>
        ))}
      </header>
    </div>
  );
}

export default App;
