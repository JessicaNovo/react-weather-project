import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App container">
      <Weather />
      <footer>
        <a
          href="https://github.com/JessicaNovo/react-weather-project"
          target="/"
        >
          Open-source code
        </a>{" "}
        by Jéssica Novo
      </footer>
    </div>
  );
}
