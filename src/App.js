import React from "react";
import "./App.css";
import Pomodoro from "./pomodoro/Pomodoro";

function App() {
  return (
    <div className="background">
    <div className="App">
      <header className="App-header container mb-3 mt-3">
        <h1>Pomodoro Timer</h1>
      </header>
      <div className="container mw-100">
        <Pomodoro />
      </div>
    </div>
    </div>
  );
}

export default App;
