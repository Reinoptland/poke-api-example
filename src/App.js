import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  // [getter, setter]
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    console.log("HALLO! Ik zit in useEffect");
  }, []);

  return <div className="App">Hello world</div>;
}

export default App;
