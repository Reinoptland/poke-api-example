import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PokemonCard(props) {
  // we maken een state aan (voor details van elke pokemon)
  const [pokemon, setPokemon] = useState();

  // useEffect
  useEffect(() => {
    async function getPokemonData() {
      // data fetchen uit de api
      const result = await axios.get(
        // we gebruiken de naam prop om de juiste data op te halen
        `https://pokeapi.co/api/v2/pokemon/${props.name}`
      );
      // respons opslaan in de state
      setPokemon(result.data);
    }

    getPokemonData();
  }, [props.name]);

  // Informatie weergeven
  return (
    <div>
      <h1>Pokemon Card</h1>
      <h1>{pokemon && pokemon.name}</h1>
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
    </div>
  );
}
