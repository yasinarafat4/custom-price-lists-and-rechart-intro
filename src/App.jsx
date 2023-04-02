import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold text-purple-700 p-4 mt-2 text-center">
        Price Lists
      </h1>
    </div>
  );
}

export default App;
