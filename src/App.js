import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  // [getter, setter]
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    // console.log("HALLO! Ik zit in useEffect");

    // definieren (opschrijven)
    async function getPokemonData() {
      const result = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
      console.log(result.data);
    }

    getPokemonData(); // aanroepen
  }, []);

  return <div className="App">Hello world</div>;
}

export default App;
