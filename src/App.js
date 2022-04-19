import { useState } from "react";
import "./App.css";

function App() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="App">
      <div className="container">
        <div
          style={
            selected === 4 || selected === 0
              ? { background: "red" }
              : { background: "yellow" }
          }
          className="inputs"
        >
          <input onChange={() => setSelected(0)} type="checkbox" checked />
          <input onChange={() => setSelected(1)} type="checkbox" />
          <input onChange={() => setSelected(2)} type="checkbox" />
          <input onChange={() => setSelected(3)} type="checkbox" />
          <input onChange={() => setSelected(4)} type="checkbox" />
        </div>
      </div>
    </div>
  );
}

export default App;
