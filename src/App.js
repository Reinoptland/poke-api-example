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
      // data ophalen (of fetchen)
      const result = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");

      // setter gebruiken om de state te updaten
      setPokemon(result.data);
    }

    getPokemonData(); // aanroepen
  }, []);

  console.log("HIER ZIT DE DATA IN:", pokemon);

  return <div className="App">Hello world</div>;
}

export default App;
