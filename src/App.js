import React from "react";
import "./App.css";
import ApiCall from "./Components/ApiCall";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>API Call App</h1>
      </header>
      <main>
        <ApiCall />
      </main>
    </div>
  );
}

export default App;
