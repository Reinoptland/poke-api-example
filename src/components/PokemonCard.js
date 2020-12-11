import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// useState, axios

export default function PokemonCard(props) {
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
  console.log("Wat zijn de props?", props);
  return (
    <div>
      <h1>Pokemon Card</h1>
      {/* Weergeven met JSX */}
      {/* Goed oppassen, als we data niet hebben && of ?. gebruiken */}
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites.front_default} />
    </div>
  );
}
