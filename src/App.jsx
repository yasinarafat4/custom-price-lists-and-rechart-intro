import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PriceLists from "./components/PriceLists/PriceLists";
import Dashboard from "./components/Dashboard/Dashboard";
import PhoneBar from "./components/PhoneBar/PhoneBar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <PriceLists></PriceLists>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
