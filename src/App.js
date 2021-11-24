import "./App.css";
import React from "react";
import Homescreen from "./Screens/Homescreen";
import Signin from "./Screens/Signinscreen";
import { Route, Routes } from "react-router-dom";
import Landing from "./Screens/Landingscreen";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Homescreen />} />
      </Routes>
    </div>
  );
}

export default App;
