import "./App.css";
import Children from "./components/Children/CenteredCard";

function App() {
  const test = {
    child1: "Children 1",
    child2: "Children 2",
    child3: "Children 3",
  };

  return (
    <div className="App">
      <header className="App-header">
        <Children children1={test.child1} />
        <Children children1={test.child2} />
        <Children children1={test.child3} />
      </header>
    </div>
  );
}

export default App;
