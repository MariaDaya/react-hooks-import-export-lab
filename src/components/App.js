import React from "react";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
import About from "./components/About.js";
import Home from "./components/Home.js";
import NavBar from "./components/NavBar.js";