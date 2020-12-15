import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PokemonCard(props) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    async function getPokemonData() {
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${props.name}`
      );
      setPokemon(result.data);
    }

    getPokemonData();
  }, [props.name]);

  return (
    <div>
      <h1>Pokemon Card</h1>
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
    </div>
  );
}
