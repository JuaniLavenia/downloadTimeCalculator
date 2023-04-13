import React from "react";
import DownloadTimeCalculator from "./components/Calculadora";
import "./App.css";

function App() {
  return (
    <div className="contenedor">
      <h1>Calculadora de tiempo de descarga</h1>
      <DownloadTimeCalculator />
    </div>
  );
}

export default App;
