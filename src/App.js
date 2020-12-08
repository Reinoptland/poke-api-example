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
      const result = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/bulbasaur"
      );

      // setter gebruiken om de state te updaten
      setPokemon(result.data);
    }

    getPokemonData(); // aanroepen
  }, []);

  console.log("HIER ZIT DE DATA IN:", pokemon);

  return (
    <div className="App">
      {/* Weergeven met JSX */}
      {/* Goed oppassen, als we data niet hebben && of ?. gebruiken */}
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites.front_default} />
    </div>
  );
}

export default App;
