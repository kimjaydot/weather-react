import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello World from Weather</header>

      <Weather city="Paris" />
    </div>
  );
}

export default App;
