import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PokemonTypes from "./PokemonTypes";

import "./PokemonCard.css";

export default function PokemonCard(props) {
  // we maken een state aan (voor details van elke pokemon)
  const [pokemon, setPokemon] = useState(null);

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
  // console.log("WELKE DATA HEBBEN WE NOG MEER?", pokemon && pokemon);
  return (
    <div className="card">
      <h1>{pokemon && pokemon.name}</h1>
      <img
        className="sprite"
        src={pokemon?.sprites.front_default}
        alt={pokemon?.name}
      />
      {pokemon && <PokemonTypes pokemon={pokemon} />}
      <div class="stats">
        {pokemon &&
          pokemon.stats.map((stat) => {
            // console.log("WAT IS STAT", stat);
            return (
              <div key={pokemon.name + stat.stat.name} className="stat">
                {stat.stat.name}
                <progress value={stat.base_stat} max={100} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
